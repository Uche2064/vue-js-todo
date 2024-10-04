<script setup>
    const props = defineProps({
        inputType: {
            type: String,
            required: false,
            default: 'text'
        },
        labelText: {
            type: String,
            required: false,
            default: 'label'
        },
        inputId: {
            type: String,
            required: true,
        },
        inputName: {
            type: String,
            required: true,
        },
        placeholderText: {
            type: String,
            required: false,
        }

    });
    
</script>

<template>
  <div class="form-field">
    <label :for="inputId">{{labelText}}</label>
    <input
      :type="inputType"
      :name="inputName"
      :id="inputId"
      :placeholder="placeholderText"
      class="input-field"
    />
  </div>
</template>


<style scoped>
.form-field {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-field {
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 450px;
  transition: all 350ms ease-in-out;
}

.input-field:focus {
  outline: none;
  border-color: #03445d;
}
</style>
