import { defineStore } from "pinia"

export const useRatingStore = defineStore("ratingStore", {
  state: () => ({
    ratingValue: 0,
    comment: ""
  }),
  getters: {},
  actions: {
  }
})
