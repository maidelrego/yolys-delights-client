<template>
  <v-card flat>
    <v-toolbar>
      <v-btn icon @click="appStore.toggleDrawer()">
        <v-icon>mdi-chevron-right-circle-outline</v-icon>
      </v-btn>
      <v-divider class="ml-3 mr-3" vertical inset></v-divider>
      <v-toolbar-title>Your Cart</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-row v-for="item in cartItems" :key="item.id" no-gutters class="mb-5">
        <v-col cols="4">
          <v-img max-width="150" :src="imgBaseUrl + item.attributes.img.data.attributes.url" class="rounded-lg"></v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col cols="8">
              <p class="ml-3 secondaryFontCart">
                {{ item.attributes.title }}
              </p>
            </v-col>
            <v-col align="right" cols="4">
              <p class="secondarySubHeaderCart">
                {{ formatCurrencyUSD(item.attributes.price) }}
              </p>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-2">
            <v-col cols="8" align="center">
              <div class="d-flex justify-space-between align-center no-wrap w-full h-100">
                <div class="d-flex align-center">
                  <span @click="removeQuantityFromCart(item.id)" style="cursor: pointer;" class="icon d-flex pa-3">
                    <v-icon>mdi-minus</v-icon>
                  </span>
                  <span class="number d-flex align-center pa-3">
                    {{ item.attributes.quantity }}
                  </span>
                  <span @click="addToCart(item)" style="cursor: pointer;" class="icon d-flex pa-3">
                    <v-icon>mdi-plus</v-icon>
                  </span>
                </div>
              </div>
            </v-col>
            <v-col cols="4" align="right" align-self="center">
              <v-icon color="error" @click="removeFromCart(item.id)">mdi-delete</v-icon>
            </v-col>
          </v-row>
        </v-col>

      </v-row>


      <template v-if="cartIsNotEmpty">
        <v-divider class="mt-8 mb-8"></v-divider>

        <v-row>
          <!-- ORDER SUMMARY -->
          <v-col cols="6" align="left">
            <p class="secondarySubHeaderCart">Order Summary</p>
          </v-col>
          <v-col cols="6" align="right">
            <p class="secondarySubHeaderCart">{{ cartItems.length }} Items</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" align="left">
            <p class="secondarySubHeaderCart">Total Amount</p>
          </v-col>
          <v-col cols="6" align="right">
            <p class="secondarySubHeaderTotal">{{ formatCurrencyUSD(cartTotal) }}</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-btn class="mb-3" color="primary" block variant="elevated" @click="checkout()">Check Out</v-btn>
            <v-btn @click="appStore.toggleDrawer()" block variant="outlined">Continue Shopping</v-btn>
          </v-col>
        </v-row>
      </template>

      <template v-else>
        <v-row justify="center">
          <!-- IMAGE OF EMPTY CART -->
          <v-col cols="12" align="center">
            <v-img max-width="300" :src="emptyCart"></v-img>
            <v-col cols="12">
              <p class="secondarySubHeaderCart" style="font-size: 1.6rem;">Your cart is empty</p>
              <p class="secondarySubHeaderCart mt-5">Looks like you haven't added anything to your cart.</p>
            </v-col>
          </v-col>
        </v-row>
      </template>

    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'
import { formatCurrencyUSD } from '@/lib/filters'
import { computed } from 'vue'
import emptyCart from '@/assets/img/emptyCart.png'
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from '@/services/api'
import { imgBaseUrl } from '@/services/api'


const appStore = useAppStore()
const cartStore = useCartStore()
const { removeFromCart, addToCart, removeQuantityFromCart } = cartStore
const { cartItems, cartTotal } = storeToRefs(cartStore)

const cartIsNotEmpty = computed(() => cartItems.value.length > 0)

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_TEST_KEY
)

const checkout = async () => {
  const products = cartItems.value.map(item => {
    return {
      id: item.id,
      title: item.attributes.title,
      quantity: item.attributes.quantity,
      price: item.attributes.price
    }
  })
  try {
    const stripe = await stripePromise
    const res = await makeRequest.post("/orders", {
      products
    })

    if (stripe !== null) {
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })
    } else {
      console.log("Stripe is not available.")
    }

  } catch (err) {
    console.log(err)
  }
}

</script>

<style scoped></style>