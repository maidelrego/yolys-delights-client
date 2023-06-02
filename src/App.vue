<template>
  <v-app id="app">
    <v-app-bar app flat top>
      <v-img src="./assets/img/flag.webp" max-height="50" max-width="50" contain class="ml-4" />
      <h1 class="text-gradient">cubanToGo</h1>
      <v-spacer></v-spacer>
      <Cart />
      <!-- LOGIN -->
      <v-btn color="primary" variant="outlined" prepend-icon="mdi-account-outline" class="mr-4">
        Login
      </v-btn>
    </v-app-bar>
    <v-main class="ma-3">
      <router-view />
    </v-main>
      <v-footer class="bg-footer text-center d-flex flex-column mt-16">
        <div>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
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

const icons = ref([
  'mdi-facebook',
  'mdi-instagram',
])
</script>
