<script setup>
import GoogleLogo from '@/assets/google-logo.png'
const signupWithGoogle = (e) => {
  e.preventDefault()
  console.log(e.message)
}
</script>

<template>
  <div class="or-with-container">
    <div class="divider"></div>
    <span class="or-with">or with</span>
    <div class="divider"></div>
  </div>

  <button class="google-button" type="submit" v-on:click="signupWithGoogle">
    <div>
      <img :src="GoogleLogo" alt="google logo" class="google-logo" />
    </div>
    <div>
      <span>Continue with google</span>
    </div>
  </button>
</template>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
  background-color: #06222d60;
}

.or-with {
  width: 30%;
  text-align: center;
  color: #06222d60;
}

.or-with-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: #06222d60;
  gap: 36px;
}

.google-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  border: 1px solid #03445d;
  border-radius: 20px;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  width: 450px;
  gap: 8px;
  margin-bottom: 20px;
}

.google-button:hover {
  background-color: #03445d;
  color: #ffffff;
}

.google-logo {
  height: 20px;
  width: 20px;
}
</style>
