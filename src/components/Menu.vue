<template>
  <section id="menu">
    <v-row class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="secondaryHeader">Menu</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto" sm="6" md="3" lg="3" v-for="item in menuItems" :key="item.id">
        <v-card class="mx-auto rounded-lg elevation-5" max-width="auto">
          <v-img cover height="200" :src="item.attributes.img.data.attributes.url"></v-img>

          <v-card-item class="mb-1">
            <v-card-title class="secondaryFont">{{ item.attributes.title }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="text-grey mt-1 mr-1">
                {{ getAverageRating(item.attributes.ratings) }}
              </div>
              <v-rating :model-value="getAverageRating(item.attributes.ratings)" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>
              <Ratings :productId="item.id" :ratings-total="item.attributes.ratings.data.length" />
            </v-row>
            <v-row>
              <v-col>
                <h3 class="secondarySubHeader">{{ formatCurrencyUSD(item.attributes.price) }}</h3>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-item class="text-center" v-if="cartItems.find(i => i.id === item.id)">
            <v-btn block color="primary" variant="elevated" :ripple="false">
              <span @click="removeQuantityFromCart(item.id)" style="cursor: pointer; font-size: 1rem;" class="pa-3">
                <v-icon v-if="cartItemQuantity(item.id) > 1">mdi-minus</v-icon>
                <v-icon v-else>mdi-trash-can-outline</v-icon>
              </span>
              <span class="align-center pa-3" style="font-size: 1rem;">
                {{ cartItemQuantity(item.id) }}
              </span>
              <span @click="addToCart(item)" style="cursor: pointer; font-size: 1rem;" class="pa-3">
                <v-icon>mdi-plus</v-icon>
              </span>
            </v-btn>
          </v-card-item>
          <v-card-item v-else>
            <v-btn color="primary" variant="elevated" prepend-icon="mdi-cart-outline" block
              @click="addToCart(item); appStore.toggleDrawer()">
              Add to Cart
            </v-btn>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

  </section>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useCartStore } from '@/store/cart'
import { storeToRefs } from 'pinia'
import { formatCurrencyUSD } from '@/lib/filters'
import { useAppStore } from '@/store/app'
import { useMenuStore } from '@/store/menu'
import Ratings from '@/components/Ratings.vue'

const cartStore = useCartStore()
const { addToCart, removeQuantityFromCart } = cartStore
const appStore = useAppStore()
const { cartItems } = storeToRefs(cartStore)
const menuStore = useMenuStore()
const { menuItems } = storeToRefs(menuStore)

const cartItemQuantity = (id: number) => {
  const item = cartItems.value.find(i => i.id === id)
  return item ? item.attributes.quantity : 0
}

const getAverageRating = (ratings: any) => {
  if (ratings.data.length === 0) {
    return 0 // Return 0 if there are no ratings
  }
  const totalRating = ratings.data.reduce((sum: number, rating: any) => sum + rating.attributes.ratingValue, 0)
  const value = totalRating / ratings.data.length

  return value.toFixed(1)
}

onBeforeMount(async () => {
  await menuStore.getMenuItems()
})


</script>

<style lang="scss" scoped></style>