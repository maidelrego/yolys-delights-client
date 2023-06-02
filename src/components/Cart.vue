<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="text-none" stacked rounded>
        <v-badge content="3" color="error">
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const items = ref([
    { title: 'Edit' },
    { title: 'Delete' },
    { title: 'Something else' },
  ])

</script>

<style scoped></style>