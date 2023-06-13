<template>
  <v-app id="app">
    <v-app-bar app flat top>
      <v-img src="./assets/img/iconOnly.png" class="ml-2 iconResize" />
      <v-spacer></v-spacer>
      <v-img src="./assets/img/textOnly.png" class="ml-2 textLogoResize" />
      <v-spacer></v-spacer>
      <v-btn class="text-none" stacked rounded @click="appStore.toggleDrawer()">
        <v-badge :content="totalItemsInCart">
          <v-icon color="primary" size="x-large">mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" temporary width="420">
      <Cart />
    </v-navigation-drawer>
    <v-main class="ma-3">
      <v-overlay :model-value="loading" class="align-center justify-center" persistent>
        <half-circle-spinner :animation-duration="1000" :size="60" color="#f17228" />
      </v-overlay>
      <router-view />
    </v-main>
    <v-footer class="bg-footer text-center d-flex flex-column mt-16">
      <div>
        <v-btn :color="icon.color" target="_blank" v-for="icon in icons" :key="icon.icon" :href="icon.link" class="mx-4" :icon="icon.icon"
          variant="text"></v-btn>
      </div>

      <div class="pt-0">
        Thank you for choosing our Cuban pastry online ordering app. We appreciate your trust in us to satisfy your
        cravings for authentic Cuban pastries. Our dedicated team is here to ensure that you have a delightful and
        convenient ordering experience.
        <br />
        At our app, we take pride in delivering the highest quality Cuban pastries right to your doorstep. Each pastry is
        carefully handcrafted using traditional techniques and authentic ingredients to bring you the true flavors of
        Cuba.
      </div>

      <v-divider></v-divider>

      <div class="mt-3">
        <strong>Yoly's Delights</strong> — {{ new Date().getFullYear() }} — All Rights Reserved
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import Cart from './components/Cart.vue'
import { ref } from 'vue'
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/cart'
import { HalfCircleSpinner } from 'epic-spinners'

const cartStore = useCartStore()
const appStore = useAppStore()
const { totalItemsInCart } = storeToRefs(cartStore)
const { drawer, loading } = storeToRefs(appStore)

const icons = ref(
  [
    {
      icon: 'mdi-facebook',
      link: 'https://www.facebook.com/yolyDelights',
      color: '#3b5998'
    },
    {
      icon: 'mdi-instagram',
      link: 'https://instagram.com/yolyDelights',
      color: '#e4405f'
    },
    {
      icon: 'mdi-whatsapp',
      link: 'https://wa.me/19133706598',
      color: '#25d366'
    }
  ]
)
</script>
