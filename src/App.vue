<script setup>
import { reactive, onMounted, watchEffect } from "vue"
import axiosInstance from "./assets/js/axios.js"
import HelloWorld from "./components/HelloWorld.vue"
import ToggleComponent from "./components/ToggleComponent.vue"

const products = reactive(
  axiosInstance.get("/carts").then((res) => {
    console.log(res.data)
  })
)

watchEffect(() => console.log(products))

onMounted(() => {
  products
  console.log("Promise", products)
})
</script>

<template>
  <div>
    <h1>App Component</h1>
  </div>
  <my-button>Button</my-button>
  <HelloWorld msg="Hello World component" />
  <ToggleComponent></ToggleComponent>
</template>

<style scoped></style>
