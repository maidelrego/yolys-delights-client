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
      <router-view />
    </v-main>
    <v-footer style="height: 10px;" class="bg-footer text-center d-flex flex-column mt-16">
      <div>
        <v-btn target="_blank" v-for="icon in icons" :key="icon.icon" :href="icon.link" class="mx-4" :icon="icon.icon" variant="text"></v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
        risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
        Duis
        commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
        cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
        penatibus
        et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Maydel Rego</strong>
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

const cartStore = useCartStore()
const appStore = useAppStore()
const { totalItemsInCart } = storeToRefs(cartStore)
const { drawer } = storeToRefs(appStore)

const icons = ref(
  [
    {
      icon: 'mdi-facebook',
      link: 'https://www.facebook.com/yolyDelights'
    },
    {
      icon: 'mdi-instagram',
      link: 'https://www.instagram.com/maydelrego'
    }
  ]
)
</script>
