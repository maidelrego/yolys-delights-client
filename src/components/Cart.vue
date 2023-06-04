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
      <v-row v-for="item in cartItems" :key="item.id">
        <v-col cols="4">
          <v-img max-width="150" :src="item.src" class="rounded-lg"></v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col cols="8">
              <p class="ml-3 text-body-1">
                {{ item.name }}
              </p>
            </v-col>
            <v-col align="right" cols="4">
              <p class="text-subtitle-2">
                {{ formatCurrencyUSD(item.price) }}
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
                    {{ item.quantity }}
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

      <v-divider class="mt-8 mb-8"></v-divider>

      <v-row>
        <v-col cols="6" align="left">
          <p>Total Amount</p>
        </v-col>
        <v-col cols="6" align="right">
          <p>{{ formatCurrencyUSD(cartTotal) }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-btn class="mb-3" color="primary" block variant="elevated">Check Out</v-btn>
          <v-btn @click="appStore.toggleDrawer()" block variant="outlined">Continue Shopping</v-btn>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import { formatCurrencyUSD } from '@/lib/filters';

const appStore = useAppStore();
const cartStore = useCartStore();
const { removeFromCart, addToCart, removeQuantityFromCart } = cartStore;
const { cartItems, cartTotal } = storeToRefs(cartStore);
</script>

<style scoped></style>