<template>
  <section>
    <v-row class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="howDoesItWorkHeader text-h4 mb-3 text-primary">Menu</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto" sm="6" md="3" lg="3" v-for="item in items" :key="item.id">
        <v-card class="mx-auto rounded-lg elevation-5" max-width="auto">
          <v-img cover height="200" :src="item.src"></v-img>
          <v-card-item>
            <v-card-title>{{ item.name }}</v-card-title>
            <h4 class="font-weight-bold">{{ formatCurrencyUSD(item.price) }}</h4>
          </v-card-item>
          <v-card-item class="text-center" v-if="cartItems.find(i => i.id === item.id)">
            <div class="align-center">
              <span @click="removeQuantityFromCart(item.id)" style="cursor: pointer;" class="icon  pa-3">
                <v-icon>mdi-minus</v-icon>
              </span>
              <span class="number align-center pa-3">
                {{ cartItems.find(i => i.id === item.id)?.quantity }}
              </span>
              <span @click="addToCart(item)" style="cursor: pointer;" class="icon  pa-3">
                <v-icon>mdi-plus</v-icon>
              </span>
            </div>
          </v-card-item>
          <v-card-actions v-else>
            <v-btn color="primary" variant="elevated" block @click="addToCart(item)">
              Order Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'
import { storeToRefs } from 'pinia'
import { formatCurrencyUSD } from '@/lib/filters'

const cartStore = useCartStore()
const { addToCart, removeQuantityFromCart } = cartStore
const { cartItems } = storeToRefs(cartStore)

const items = ref([
  {
    id: 1,
    name: 'Flan',
    src: 'https://www.steamycooker.com/wp-content/uploads/2020/08/flan-7-720x405.jpg',
    price: 5.00,
    quantity: 1
  },
  {
    id: 2,
    name: 'Pastel de Guayaba',
    src: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/2d/f8/1e/pastel-de-guayaba.jpg',
    price: 3.00,
    quantity: 1
  },
  {
    id: 3,
    name: 'Pastel de Coco',
    src: 'https://recetacubana.com/wp-content/uploads/2022/07/pastelitos-cubanos-de-guayaba-y-queso-1-1024x683.jpg',
    price: 3.00,
    quantity: 1
  },
  {
    id: 4,
    name: 'Arroz con Leche',
    src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F03%2F25%2Frecetas-1092-arroz-con-leche-2000.jpg&q=60',
    price: 5.00,
    quantity: 1
  }
])
</script>

<style scoped></style>