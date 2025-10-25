import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'


const pinia = createPinia();


export const app = createApp(App);

app.use(pinia);
app.use(PhosphorIcons);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
    }
 });



app.mount('#app');