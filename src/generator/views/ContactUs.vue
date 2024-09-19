<template>
    <div class="contact-page">
      <h1>{{ $t('message.contactUs') }}</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">{{ $t('message.contactUsContent.name') }}</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">{{ $t('message.contactUsContent.email') }}</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="message">{{ $t('message.contactUsContent.message') }}</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">{{ $t('message.contactUsContent.submit') }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'ContactUs',
    data() {
        return {
        form: {
            name: '',
            email: '',
            message: ''
        }
        }
    },
    methods: {
        async submitForm() {
            try {
                const encodedName = encodeURIComponent(this.form.name);
                const encodedEmail = encodeURIComponent(this.form.email);
                const encodedMessage = encodeURIComponent(this.form.message);
                const api_url="https://[2600:1900:4001:8a7::]:9527"
                const url = `${api_url}/contact?name=${encodedName}&email=${encodedEmail}&message=${encodedMessage}`;
                
                await axios.post(url);
                alert(this.$t('message.contactUsContent.success'))
                this.form = { name: '', email: '', message: '' }
            } catch (error) {
                console.error('Error submitting form:', error)
                alert(this.$t('message.contactUsContent.error'))
            }
        }
    },
    computed: {
    }
  }
  </script>

<style scoped>
.contact-page {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #e0e0e0;
  min-height: 69vh;
  font-size: 18px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #e0e0e0;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #333333;
  color: #e0e0e0;
  border: 1px solid #444444;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.1em;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.3s, opacity 0.3s;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.2em;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>