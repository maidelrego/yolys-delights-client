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
      const uniqueItems = new Map<number, CartItem>();

      this.cartItems.forEach((item) => {
        const existingItem = uniqueItems.get(item.id);

        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          uniqueItems.set(item.id, { ...item });
        }
      });

      let totalQuantity = 0;

      uniqueItems.forEach((item) => {
        totalQuantity += item.quantity;
      });

      return totalQuantity;
    },
  },

  actions: {
    addToCart(item: CartItem) {
      const existingItem = this.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity ++;
      } else {
        this.cartItems.push({ ...item });
      }
    },
    removeQuantityFromCart(itemId: number) {
      const item = this.cartItems.find((i) => i.id === itemId);

      if (item) {
        item.quantity--;

        if (item.quantity === 0) {
          this.removeFromCart(item.id);
        }
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
