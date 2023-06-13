/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader"
import vuetify from "./vuetify"
import pinia from "../store"
import router from "../router"
import { createGtm } from "@gtm-support/vue-gtm"
import type { App } from "vue"

const TagManagerId = import.meta.env.VITE_GTM_ID

export function registerPlugins(app: App) {
  loadFonts()
  app.use(vuetify).use(router).use(pinia)
  app.use(
    createGtm({
      id: TagManagerId,
      vueRouter: router
    })
  )
}
