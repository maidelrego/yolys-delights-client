<template>
  <v-card class="rounded-lg mt-6" style="border: 1px solid;" flat>
    <v-card-text>
      <p class="text-center font-weight-bold text-uppercase mb-2 secondarySubHeader">
        ** Please provide your preferred date and time for order pickup or delivery **
      </p>
      <p class="text-center font-weight-bold text-uppercase mb-2 secondarySubHeader">
        ** Delivery method will be selected at checkout **
      </p>
      <p class="text-primary font-weight-bold text-center text-uppercase mb-5 secondarySubHeader">
        Please note that we require a minimum of one day to process all orders.
      </p>

      <VueDatePicker v-model="orderTypeDate" position="center" placeholder="Select Order Date" :teleport="true"
        :is-24="false" :min-date="minDates"></VueDatePicker>
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
const { orderTypeDate } = storeToRefs(cartStore)

const minDates = computed(() => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
})
</script>

<style scoped></style>