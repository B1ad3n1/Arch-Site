<template>
  <div class="contact">
    <div class="container">
      <h1 class="contact__title">Связаться со мной (Не стоит)</h1>
      <form class="contact__form" @submit.prevent="sendMessage">
        <input
          v-model="form.name"
          type="text"
          placeholder="Ваше имя (я всё равно забуду)"
          class="contact__input"
          required
        >
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="contact__input"
          required
        >
        <textarea
          v-model="form.message"
          placeholder="Сообщение"
          class="contact__textarea"
          required
        ></textarea>
        <button type="submit" class="contact__btn">Отправить в ящик никогда непрочитанных сообщений</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sendMessage = () => {
  alert('Спасибо! Сообщение отправлено (в реальном проекте было бы отправлено на сервер)')
  form.name = form.email = form.message = ''
}
</script>

<style scoped>
.contact {
  padding: 120px 0 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.contact__title {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
}

.contact__form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__input,
.contact__textarea {
  padding: 1.2rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: border 0.3s;
}

.contact__input:focus,
.contact__textarea:focus {
  outline: none;
  border-color: #667eea;
}

.contact__textarea {
  min-height: 180px;
  resize: vertical;
}

.contact__btn {
  padding: 1.2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
}

.contact__btn:hover {
  background: #5a67d8;
}
</style>
