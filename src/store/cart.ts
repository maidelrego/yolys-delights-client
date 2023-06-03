// cart.ts

import { defineStore } from "pinia";
import { CartItem } from "@/interfaces/CartItem";


export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as CartItem[],
  }),

  getters: {
    cartTotal(): number {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    totalItemsInCart(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }
  },

  actions: {
    addToCart(item: CartItem) {
      const existingItem = this.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        console.log("existingItem", existingItem.quantity, item.quantity);
        existingItem.quantity ++;
      } else {
        this.cartItems.push(item);
      }
    },

    removeFromCart(itemId: number) {
      const index = this.cartItems.findIndex((item) => item.id === itemId);

      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },

    updateCartItemQuantity(payload: { itemId: number; quantity: number }) {
      const item = this.cartItems.find((i) => i.id === payload.itemId);

      if (item) {
        item.quantity = payload.quantity;
      }
    },

    clearCart() {
      this.cartItems = [];
    },
  },
});
