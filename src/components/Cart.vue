<template>
  <v-row justify="center">
    <v-col cols="12">
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
            <v-col>
              <v-img cover max-height="200" max-width="150" :src="item.src" class="rounded-lg"></v-img>
            </v-col>
            <v-col>
              <p class="ml-3 text-body-1">
                {{ item.name }}
              </p>
            </v-col>
            <v-col align="right">
              <p class="text-subtitle-2">
                {{ $filters.formatCurrencyUSD(item.price) }}
              </p>
            </v-col>
          </v-row>

          <v-divider class="mt-8 mb-8"></v-divider>

          <v-row>
            <v-col cols="6" align="left">
              <p>Total Amount</p>
            </v-col>
            <v-col cols="6" align="right">
              <p>{{ $filters.formatCurrencyUSD(cartTotal) }}</p>
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
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const cartStore = useCartStore();
const { removeFromCart, clearCart } = cartStore;
const { cartItems, cartTotal } = storeToRefs(cartStore);
</script>

<style scoped></style>