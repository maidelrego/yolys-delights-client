<template>
  <v-card :class="`rounded-lg mt-12 ${props.cartMode ? 'cardModeStyle' : ''}`" flat>
    <v-card-text>
      <v-btn v-for="tab in tabs" :key="tab.id" flat :prepend-icon="tab.iconClass" @click="cartStore.toggleOrderType()"
        :active="orderType === tab.id" :class="orderType === tab.id ? 'activeClass' : ''">
        {{ tab.label }}
      </v-btn>
      <v-divider class="mt-5 mb-2"></v-divider>
      <template v-if="cartMode">
        <p class="text-center font-weight-black text-uppercase mb-2 mt-5 secondarySubHeader">
          ** Please provide your preferred date and time for order pickup or delivery **
        </p>
        <p class="text-primary font-weight-black text-center text-uppercase mb-5 secondarySubHeader">Please note that we
          need a minimum of one day to process all orders.</p>

        <VueDatePicker v-model="orderTypeDate" position="center" placeholder="Select Order Date" :teleport="true"
          :is-24="false" :min-date="minDates"></VueDatePicker>
      </template>
      <!-- whatsapp banner -->

      <!-- <v-banner color="primary" dark>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="4" class="text-center">
          <v-icon size="64" class="white--text">mdi-whatsapp</v-icon>
          <h3 class="white--text mt-3">Order by Phone or WhatsApp</h3>
          <p class="white--text">
            Our friendly staff is ready to assist you with your order.
            <br>
            Call us at: <strong>+1 123-456-7890</strong>
            <br>
            Or message us on WhatsApp at: <strong>+1 123-456-7890</strong>
          </p>
          <v-btn color="white" dark class="mt-4">Learn More</v-btn>
        </v-col>
      </v-row>
  </v-banner> -->

      <v-btn @click="scrollToSection()" block color="primary" class="mt-5" v-if="!cartMode">
        Shop Now
      </v-btn>
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

const scrollToSection = () => {
  const el = document.getElementById('menu')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.cardModeStyle {
  border: 1px solid;
}
</style>