import HowDoesItWork from '@/components/HowDoesItWork.vue';
<template>
  <section class="pt-12">
    <v-row>
      <v-col cols="12" class="text-center pb-12">
        <h1 class="secondaryHeader">How does it work</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/location.png" height="80" alt="..." />
          <h3 class="mt-4 primaryFont">Select location</h3>
          <p class="mb-3 secondarySubHeader">Choose the location where your food will be delivered.</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/order.png" height="80" alt="..." />
          <h3 class="mt-4 primaryFont">Choose order</h3>
          <p class="mb-3 secondarySubHeader">Select your favorite food by choosing one or several pastries from our menu.</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/pay.png" height="80" alt="..." />
          <h3 class="mt-4 primaryFont">Pay advanced</h3>
          <p class="mb-3 secondarySubHeader">It's quick, safe, and simple. Select several methods of payment</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <div class="text-center"><img class="shadow-icon" src="../assets/img/meals.png" height="80" alt="..." />
          <h3 class="mt-4 primaryFont">Enjoy meals</h3>
          <p class="mb-3 secondarySubHeader">Food is made and delivered directly to your home.</p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>