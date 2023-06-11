<template>
  <v-row justify="center" class="bg-primary-gradient">
    <v-col class="mt-16" cols="12" sm="8" md="8">
      <div class="text-center">
        <v-icon class="mb-6" color="primary" icon="mdi-check-circle-outline" size="128"></v-icon>
        <div class="secondaryHeader">Order Placed!</div>
      </div>
    </v-col>
    <v-col cols="12" sm="8" md="8">
      <v-table density="comfortable" style="background-color: transparent;">
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
            <td class="text-left">
              <strong>Sub total</strong>
            </td>
            <td class="font-weight-bold">{{ formatCurrencyUSD(orderTotal) }}</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-left">
              <strong>Delivery Fee:</strong>
            </td>
            <td class="font-weight-bold">{{ formatCurrencyUSD(shipping) }}</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-left">
              <strong>Total</strong>
            </td>
            <td class="font-weight-bold text-primary">${{ total.toFixed(2) }}</td>
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
import { sessionIsValid } from '@/lib/helpers'
const shipping = import.meta.env.VITE_SHIPPING_COST


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

const total = computed(() => {
  return Number(orderTotal.value) + Number(shipping)
})

const router = useRouter()

const goToHome = () => {
  router.push({ name: 'Home' })
}

const structureAddress = (address: any) => {
  return `${address.line1} ${address.line2 ? address.line2 : ''} ${address.city}, ${address.state} ${address.postal_code}`
}

const updateOrder = async () => {
  const { session_id } = route.query

  await doAPIGet(`orders?fields[0]=orderType&filters[stripeId][$in]=${session_id}&fields[0]=products&fields[0]=customerName`).then(async (res) => {
    const session = await sessionIsValid(route.query.session_id as string)

    const { customer_details } = session
    const customerAddress = structureAddress(customer_details?.address)

    orderItems.value = res.data[0].attributes.products

    if (res.data[0].attributes.customerName) {
      return
    }

    await doAPIPut(`orders/${res.data[0].id}`, {
      data: {
        status: 'success',
        email: customer_details?.email,
        customerName: customer_details?.name,
        address: res.data[0].attributes.orderType === 'delivery' ? customerAddress : 'My Address',
        rawAddress: customer_details?.address
      }
    })
  })

  cartStore.$reset()
}

onBeforeMount(async () => {
  updateOrder()
})
</script>

<style scoped>

</style>