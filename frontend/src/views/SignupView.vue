<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import FormFooter from '@/components/FormFooter.vue'
import InputfieldComponent from '@/components/InputfieldComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import GoogleButtonComponent from '@/components/GoogleButtonComponent.vue'

const signUp = (e) => {
  e.preventDefault()

  console.log('signinng up user')
}
</script>

<template>
  <form action="" method="post">
    <FormComponent :title="'Sign up'">
      <InputfieldComponent
        :input-type="'email'"
        :input-name="'email'"
        :input-id="'email'"
        :placeholder-text="'Enter your email'"
        :label-text="'E-mail'"
      />
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
      <InputfieldComponent
        :input-type="'password'"
        :input-name="'confirm-password'"
        :input-id="'confirm-password'"
        :placeholder-text="'Confirm your password'"
        :label-text="'Confirm password'"
      />

      <ButtonComponent
        :buttonName="'Sign up'"
        :handleClick="signUp"
        :style="{ width: '450px', marginBottom: '20px' }"
      />
      <GoogleButtonComponent />

      <FormFooter :title="`Already a member?`" :content="'Login'" :route="'/login'" />
    </FormComponent>
  </form>
</template>
