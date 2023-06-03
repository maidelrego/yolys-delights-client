/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Styles
import './assets/main.css'

const app = createApp(App)

function formatCurrencyUSD(value: number | string): string {
  const numberValue = Number(value);
  const formattedValue = numberValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formattedValue;
}

const filters = {
  formatCurrencyUSD,
};

app.config.globalProperties.$filters = filters;

registerPlugins(app)

app.mount('#app')
