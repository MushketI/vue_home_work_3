<!-- 4. Створіть компонент, який відображає два різних повідомлення на основі булевої змінної. Переключайте змінну для перевірки умовного виведення обох повідомлень -->
<!-- 5. Створіть два елементи, один з v-show, інший з v-if, з однаковими умовами. Змініть умову і спостерігайте за відмінностями у DOM. Дослідіть, в яких ситуаціях краще використовувати кожну директиву. -->
<!-- 6. Створіть декілька компонентів і динамічно переключайте між ними за допомогою v-if, в залежності від вибору користувача (наприклад, використовуючи радіокнопки або випадаючий список). -->
<!-- 7. Використовуючи v-bind, динамічно додавайте або видаляйте атрибути елемента (наприклад, disabled, readonly) в залежності від умови. -->
<template>
  <div className="Task 4">
    <button @click="toggle = !toggle">Click me</button>
  </div>
  <div className="Task 5">
    <div v-if="toggle === true">green</div>
    <div v-else-if="toggle === false">red</div>
    <!-- v-if полностью удаляет елемент -->
    <div v-if="toggle">v-if</div>
    <!-- v-show добавляет display: none; елементу -->
    <div v-show="toggle">v-show</div>
  </div>
  <div className="Task 6">
    <input
      type="checkbox"
      v-model="checked"
      @input="checked = $event.target.checked"
    />
    <OneComponent v-if="checked"></OneComponent>
    <TwoComponent v-else></TwoComponent>
  </div>
  <div className="Task 7">
    <input type="text" v-bind:disabled="change">asd</input>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue"
import OneComponent from "./OneComponent.vue"
import TwoComponent from "./TwoComponent.vue"

const toggle = ref(true)
const checked = ref(true)
const change = ref(true)

watchEffect(() => console.log(checked.value))
</script>

<style scoped>

</style>
