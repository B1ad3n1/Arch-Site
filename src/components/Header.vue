<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/" class="header__link">Главная</router-link>
        <router-link to="/about" class="header__link">Обо мне</router-link>
        <router-link to="/contact" class="header__link">Контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header__nav {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 1.5rem 0;
}

.header__link {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.header__link:hover,
.router-link-exact-active {
  color: #2563eb;
}

@media (max-width: 768px) {
  .header__nav {
    gap: 2rem;
    flex-direction: column;
    text-align: center;
  }
}
</style>