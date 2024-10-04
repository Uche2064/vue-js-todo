<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import FormFooter from '@/components/FormFooter.vue'
import InputfieldComponent from '@/components/InputfieldComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
const loginUser = (e) => {
    e.preventDefault();

  console.log('login user');
}
</script>

<template>
  <form action="" method="post">
    <FormComponent :title="'Login'">
      <InputfieldComponent
        :input-id="'username'"
        :input-name="'username'"
        :input-type="'text'"
        :label-text="'Username'"
        :placeholder-text="'Enter your name'"
      />
      <InputfieldComponent
        :input-type="'password'"
        :input-name="'password'"
        :input-id="'password'"
        :placeholder-text="'Enter a password'"
        :label-text="'Password'"
      />
      <div>
        <span class="forgot-password">Forgot password?</span>
      </div>

      <ButtonComponent
        :buttonName="'Login'"
        :handleClick="loginUser"
        :style="{ width: '450px', marginBottom: '20px' }"
      />
      <FormFooter :title="`Don't have an account?`" :content="'Sign up'" :route="'/signup'" />
    </FormComponent>
  </form>
</template>


<style scoped>
.forgot-password {
  font-size: 0.8rem;
  color: #03445d;
  display: flex;
  justify-content: end;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 350ms ease-in-out;
}

.forgot-password:hover {
  color: #041d27;
}
</style>
