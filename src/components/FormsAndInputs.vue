<script setup>
import {ref} from 'vue';

//real time input binding
const firstNameInput = ref('')
const lastNameInput = ref('')

    // store the output in a variable 
const formData = ref({
    firstName: "",
    lastName: ""
})


//with form submission
const handleSubmit = (e) => {
    e.preventDefault()

    formData.value.firstName = firstNameInput.value
    formData.value.lastName = lastNameInput.value

    //clear the inputs
    firstNameInput.value = ''
    lastNameInput.value = ''
}


</script>

<template>

    <div>
        <div>
            <h1>Sample Form</h1>
            <form @submit="handleSubmit">
                <label>Name Registration</label>
                <input 
                v-model="firstNameInput"
                type="text"
                placeholder="Enter your First Name"/>
                
                <input
                v-model="lastNameInput"
                type="text"
                placeholder="Enter your Last Name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div>
            <h2>Form Data</h2>
            <p>First Name: {{ formData.firstName }}</p>
            <p>Last Name: {{ formData.lastName }}</p>
        </div>
    </div>

</template>