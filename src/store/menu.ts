import { defineStore } from "pinia"
import { doAPIGet } from '@/services/api'
import { MenuItem } from "@/interfaces/MenuItem"

export const useMenuStore = defineStore("menuStore", {
  state: () => ({
    menuItems: [] as MenuItem[]
  }),
  getters: {},
  actions: {
    async getMenuItems() {
      await doAPIGet("products/?populate[img][fields][0]=url").then((res) => {
        console.log(res.data)
        this.menuItems = res.data
      })
    }
  }
})
