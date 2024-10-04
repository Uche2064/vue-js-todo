<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="form-footer">
    <p class="title">{{ title }}</p>
    <RouterLink :to='route' class="content">{{ content }}</RouterLink>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.title {
  color: #03445d9a;
}

.content {
  color: #03445d;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>
