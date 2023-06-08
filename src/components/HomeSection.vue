<template>
  <section class="mt-16">
    <v-row>
      <v-col cols="12" md="6" order-md="last">
        <img class="img-fluid" src="https://freepngimg.com/save/170464-fresh-bakery-photos-free-clipart-hq/600x559"
          alt="hero-header" />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="mainHeader text-center">Feeling hungry?</h1>
        <p class="subheader text-center pa-8">Indulge in our Cuban-inspired delicacies and journey to Havana's vibrant
          streets.</p>
        <OrderTypeCard />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import OrderTypeCard from './OrderTypeCard.vue'


</script>

