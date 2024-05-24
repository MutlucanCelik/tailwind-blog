import { createApp } from 'vue'
import '@/assets/css/main.scss'

import App from '@/app/App.vue'
import router from '@/app/router';
import store from '@/app/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas,fab)

const app = createApp(App);

app.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
