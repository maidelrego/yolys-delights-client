<template>
  <v-card :class="`rounded-lg mt-12 ${props.cartMode ? 'cardModeStyle' : ''}`" flat>
    <v-card-text>
      <v-btn v-for="tab in tabs" :key="tab.id" flat :prepend-icon="tab.iconClass" @click="cartStore.toggleOrderType()"
        :active="orderType === tab.id" :class="orderType === tab.id ? 'activeClass' : ''">
        {{ tab.label }}
      </v-btn>
      <v-divider class="mt-5 mb-2"></v-divider>
      <v-card-subtitle class="mb-3">
        We need a day to proccess your order!
      </v-card-subtitle>
      <VueDatePicker v-model="orderTypeDate" position="center" placeholder="Select Order Date" :enable-time-picker="false"
        :teleport="true" :min-date="minDates"></VueDatePicker>
      <!-- <v-text-field label="Enter your Address" prepend-inner-icon="mdi-map-marker" variant="outlined" density="compact"
        color="primary">
        <template v-slot:append>
          <v-btn block color="primary">
            Shop Now
          </v-btn>
        </template>
      </v-text-field> -->
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/cart'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed } from 'vue'

const cartStore = useCartStore()
const { orderType, orderTypeDate } = storeToRefs(cartStore)

const props = defineProps({
  cartMode: {
    type: Boolean,
    required: false
  }
})

const minDates = computed(() => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
})

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
]
</script>

<style scoped>
.cardModeStyle {
  border: 1px solid;
}
</style>