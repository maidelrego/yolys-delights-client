<template>
  <section class="mt-16">
    <v-row>
      <v-col cols="12" md="6" order-md="last">
        <img class="img-fluid" src="https://freepngimg.com/save/170464-fresh-bakery-photos-free-clipart-hq/600x559" alt="hero-header" />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="headers text-h4 text-md-h3 text-sm-h3 text-lg-h2 mb-3">Are you starving?</h1>
        <p class="subheader text-h5 text-md-h5 text-sm-h4 text-lg-h4 mb-3">Within a few clicks, find meals that are
          accessible near you</p>
        <v-card class="rounded-lg mt-12" flat>
          <v-card-text>
            <v-btn v-for="tab in tabs" :key="tab.id" flat :prepend-icon="tab.iconClass"
              @click="changeTab(tab.id)" :active="activeTab === tab.id"
              :class="activeTab === tab.id ? 'activeClass' : ''">
              {{ tab.label }}
            </v-btn>
            <v-divider class="mt-5 mb-5"></v-divider>
            <v-text-field label="Enter your Address" prepend-inner-icon="mdi-map-marker" variant="outlined"
              density="compact" color="primary">
              <template v-slot:append>
                <v-btn block color="primary">
                  Order
                </v-btn>
              </template>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref<String>('delivery');
const tabs = [
  {
    id: 'delivery',
    label: 'Delivery',
    iconClass: 'mdi-moped'
  },
  {
    id: 'pickup',
    label: 'Pickup',
    iconClass: 'mdi-purse'
  }
];

const changeTab = (tabId: string) => {
  console.log(tabId);
  activeTab.value = tabId;
};
</script>
  
  