<template>
  <v-row justify="center" class="bg-primary-gradient">
    <v-col class="mt-16" cols="12" sm="8" md="8">
      <div class="text-center">
        <v-icon class="mb-6" color="primary" icon="mdi-check-circle-outline" size="128"></v-icon>
        <div class="secondaryHeader">Order Placed!</div>
      </div>
    </v-col>
    <v-col cols="12" sm="8" md="8">
      <v-table style="background-color: transparent;">
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Quantity
            </th>
            <th class="text-left">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orderItems" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ formatCurrencyUSD(item.price) }}</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-right">
              <strong>Total</strong>
            </td>
            <td>{{ formatCurrencyUSD(orderTotal) }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
  <v-row class="mt-5" justify="center">
    <v-col cols="12" sm="8" md="8">
      <v-btn @click="goToHome()" color="primary" block variant="elevated">Continue Shopping</v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { doAPIGet } from '@/services/api'
import { formatCurrencyUSD } from '@/lib/filters'
import { doAPIPut } from '../services/api'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/cart'

interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const cartStore = useCartStore()

const route = useRoute()
let orderItems = ref<OrderItem[]>([])

const orderTotal = computed(() => {
  return orderItems.value.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0)
})

const router = useRouter()

const goToHome = () => {
  router.push({ name: 'Home' })
}

const updateOrder = async () => {
  const { session_id } = route.query

  await doAPIGet(`orders?sort[0]=title:asc&filters[stripeId][$in]=${session_id}&fields[0]=products`).then(async (res) => {
    orderItems.value = res.data[0].attributes.products
    await doAPIPut(`orders/${res.data[0].id}`, {
      data: {
        status: 'success'
      }
    })
  })

  cartStore.clearCart()
}

onBeforeMount(async () => {
  updateOrder()
})
</script>

<style scoped></style>