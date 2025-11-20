<template>
  <Header />
  <router-view class="main-content" />
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style scoped>
.main-content {
  margin-top: 90px;
}
</style>