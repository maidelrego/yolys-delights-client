import HowDoesItWork from '@/components/HowDoesItWork.vue';
<template>
  <section class="pt-16">
    <v-row>
      <v-col cols="12" class="text-center pb-16">
        <h1 class="howDoesItWorkHeader text-h4 mb-3 text-primary">How does it work</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/location.png" height="112" alt="..." />
          <h3 class="mt-4 font-weight-bold">Select location</h3>
          <p class="mb-3">Choose the location where your food will be delivered.</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/order.png" height="112" alt="..." />
          <h3 class="mt-4 font-weight-bold">Choose order</h3>
          <p class="mb-3">Check over hundreds of menus to pick your favorite food</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/pay.png" height="112" alt="..." />
          <h3 class="mt-4 font-weight-bold">Pay advanced</h3>
          <p class="mb-3">It's quick, safe, and simple. Select several methods of payment</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/meals.png" height="112" alt="..." />
          <h3 class="mt-4 font-weight-bold">Enjoy meals</h3>
          <p class="mb-3">Food is made and delivered directly to your home.</p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>

</style>