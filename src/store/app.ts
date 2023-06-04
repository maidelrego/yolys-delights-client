// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: false
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
})
