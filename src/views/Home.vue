<template>
  <v-row justify="center" class="home-section">
    <v-col cols="9" sm="9" md="10">
      <HomeSection />
    </v-col>
  </v-row>

    <v-row justify="center" class="bg-primary-gradient">
      <v-col cols="9" sm="9" md="10">
        <HowDoesItWork />
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-16">
      <v-col cols="9" sm="9" md="10">
        <Menu />
      </v-col>
    </v-row>
    

</template>

<script lang="ts" setup>
import HomeSection from '@/components/HomeSection.vue';
import HowDoesItWork from '@/components/HowDoesItWork.vue';
import Menu from '@/components/Menu.vue';
</script>

<style scoped>
.home-section {
  background-color: #FFB30E;
}
</style>
