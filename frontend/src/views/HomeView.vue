<script setup>
import {onAuthStateChanged } from ""
// Inside your main.js or App.vue
onAuthStateChanged(auth, (user) => {    
  if (user) {
    console.log('User is logged in:', user);
    // User is signed in, you can set a state or redirect
  } else {
    console.log('No user is signed in.');
  }
});

</script>

<template>
  
  <main>
    <h1>Hello, Vue.js!</h1>
    <p>
        This is a basic To do app using vuejs and firebase( for authentication and authorization)
    </p>
    <p>
        To continue, you need to login or signup
    </p>
  </main>
</template>

<style scoped>
    main {
        text-align: center;
        padding: 20px;
        font-size: 24px;
    }
    h1 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 20px;
    }
</style>