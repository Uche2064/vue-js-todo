<script setup>
const props = defineProps({
  buttonName: {
    type: String,
    required: true
  },
  handleClick: {
    type: Function,
    required: true
  },
  buttonStyle: {
    type: Object,
    required: false,
    default: () => ({})
  }
})
</script>

<template>
  <button @click="handleClick" class="button" :style="buttonStyle">{{ buttonName }}</button>
</template>

<style scoped>
.button {
  padding: 10px 20px;
  background-color: #03445d;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 20px;
  transition: all 300ms ease-in-out;
}

.button:hover {
  background-color: #002b36;
}
</style>
