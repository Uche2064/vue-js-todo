<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="form-container">
      <h1 class="field-title">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.field-title {
  color: #041d27;
  margin-bottom: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

.form-container {
  padding: 40px 50px;
  background-color: #03445d14;
  border-radius: 20px;
}
</style>
