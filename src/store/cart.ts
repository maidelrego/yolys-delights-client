import { defineStore } from "pinia"
import { MenuItem } from "@/interfaces/MenuItem"

const today = new Date() // Today

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as MenuItem[],
    orderType: "delivery" as "delivery" | "pickup",
    orderTypeDate: today.setDate(today.getDate() + 1)
  }),
  persist: true,
  getters: {
    cartTotal(): number {
      return this.cartItems.reduce(
        (total, item) => total + item.attributes.price * item.attributes.quantity,
        0
      )
    },
    totalItemsInCart(): number {
      const uniqueItems = new Map<number, MenuItem>()

      this.cartItems.forEach((item) => {
        const existingItem = uniqueItems.get(item.id)

        if (existingItem) {
          existingItem.attributes.quantity += item.attributes.quantity
        } else {
          uniqueItems.set(item.id, { ...item })
        }
      })

      let totalQuantity = 0

      uniqueItems.forEach((item) => {
        totalQuantity += item.attributes.quantity
      })

      return totalQuantity
    }
  },
  actions: {
    toggleOrderType() {
      this.orderType = this.orderType === "delivery" ? "pickup" : "delivery"
    },
    addToCart(item: MenuItem) {
      const existingItem = this.cartItems.find((i) => i.id === item.id)

      if (existingItem) {
        existingItem.attributes.quantity++
      } else {
        const newItem = { ...item }
        this.cartItems.push(newItem)
      }
    },
    removeQuantityFromCart(itemId: number) {
      const item = this.cartItems.find((i) => i.id === itemId)

      if (item) {
        item.attributes.quantity--

        if (item.attributes.quantity === 0) {
          this.removeFromCart(item.id)
          item.attributes.quantity = 1
        }
      }
    },

    removeFromCart(itemId: number) {
      const index = this.cartItems.findIndex((item) => item.id === itemId)

      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },

    updateCartItemQuantity(payload: { itemId: number; quantity: number }) {
      const item = this.cartItems.find((i) => i.id === payload.itemId)

      if (item) {
        item.attributes.quantity = payload.quantity
      }
    }
  }
})
