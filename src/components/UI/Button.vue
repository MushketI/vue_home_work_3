<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue"

const count = ref("Button component")
</script>
