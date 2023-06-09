// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: false,
    loading: false
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    setLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
