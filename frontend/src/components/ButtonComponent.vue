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
  border: 1px solid #03445d;

}

.button:hover {
  background-color: #fff;
  color: #03445d;
  border: 1px solid #03445d;
}
</style>
