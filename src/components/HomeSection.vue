<template>
  <section class="mt-16">
    <v-row>
      <v-col cols="12" md="6" order-md="last">
        <img class="img-fluid" src="https://freepngimg.com/save/170464-fresh-bakery-photos-free-clipart-hq/600x559"
          alt="hero-header" />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="mainHeader text-center">Feeling hungry?</h1>
        <p class="subheader text-center pa-8">Indulge in our Cuban-inspired delicacies and journey to Havana's vibrant
          streets.</p>
        <v-card class="rounded-lg mt-10" flat>
          <v-card-text>
            <h2 class="whatsAppFont mb-2">Order by Phone or WhatsApp <v-icon>mdi-whatsapp</v-icon></h2>
            <p>
              Our friendly staff is ready to assist you with your order. Simply give us a call or message us on WhatsApp
              using the provided contact information below.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="redirectToWhatsapp()" color="primary"><strong>(913)-370-6598</strong></v-btn>
            <v-btn variant="elevated" size="small" @click="scrollToSection()" color="primary">
              Order Online
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">

const redirectToWhatsapp = () => {
  window.open('https://wa.me/19133706598', '_blank')
}

const scrollToSection = () => {
  const el = document.getElementById('menu')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

