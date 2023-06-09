<template>
  <div class="mt-1 ml-3 text-decoration-underline ratingPopup">
    ({{ props.ratingsTotal }}) Ratings
    <v-dialog v-model="dialog" activator="parent" width="auto">
      <v-card class="mx-auto rounded-lg elevation-5 mt-1" width="300">
        <v-card-title class="text-h5 text-center">
          Rating overview
        </v-card-title>
        <v-card-text class="text-center">
          <div class="align-center">
            <div class="text-h2">
              {{ ratingValue }}
              <span class="text-h6">/5</span>
            </div>
            <v-rating v-model="ratingValue" color="yellow-darken-3" half-increments></v-rating>
            <div class="px-3 mb-3">{{ props.ratingsTotal }} Ratings</div>
          </div>
          <div class="align-center">
            <v-textarea v-model="comment" placeholder="Leave us a comment to let us know how we're doing."
              variant="outlined"></v-textarea>
            <v-btn color="primary" @click="submitRating()" size="small">Submit</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRatingStore } from '@/store/rating'
import { storeToRefs } from 'pinia'
import { doAPIPost } from '@/services/api'
import { useMenuStore } from '@/store/menu'

const menuStore = useMenuStore()
const ratingStore = useRatingStore()
const { ratingValue, comment } = storeToRefs(ratingStore)
const dialog = ref(false)

const props = defineProps({
  ratingsTotal: {
    type: Number,
    required: true
  },
  productId: {
    type: Number,
    required: true
  }
})

watch(dialog, (val) => {
  if (!val) {
    ratingStore.$reset()
  }
})

const submitRating = async () => {

  const data = {
    ratingValue: ratingValue.value,
    comments: comment.value,
    product: props.productId
  }
  await doAPIPost("ratings", { data }).then(() => {
    dialog.value = false
    menuStore.getMenuItems()
  })
}

</script>

<style scoped>
.rating-values {
  width: 25px;
}

.ratingPopup {
  cursor: pointer;
  color: #b3b3b3
}

.ratingPopup:hover {
  color: #ffc107;
}</style>