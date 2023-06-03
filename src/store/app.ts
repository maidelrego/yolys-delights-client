// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: false,
    cartItems: []
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
})
