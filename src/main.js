import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import button from "./components/UI/Button.vue"

// 1. Створіть проєкт за допомогою VUE CLI.

const app = createApp(App)

// 3. Створіть нові компоненти та зареєструйте іх локально і глобально (хоча б один компонент).
app.component("my-button", button)

app.mount("#app")
