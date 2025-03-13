import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"
import Buefy from 'buefy'

export const app = createApp(App);

app.use(PhosphorIcons);
app.use(Buefy);

app.mount('#app');