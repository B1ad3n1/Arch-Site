<template>
  <div class="home">
    <!-- Hero screen -->
    <section class="home__hero">
      <div class="container">
        <h1 class="home__hero-title">Иван Иванов</h1>
        <p class="home__hero-subtitle">не Frontend-разработчик • Vue • React • BEM</p>
        <router-link to="/contact" class="home__hero-btn">Связаться со мной</router-link>
      </div>
    </section>

    <!-- About screen -->
    <section class="home__about">
      <div class="container">
        <h2 class="section-title">Обо мне</h2>
        <p class="home__about-text">
          Привет! Я не frontend-разработчик, увлечённый созданием красивых и не производительных веб-приложений.
          Владею современным стеком: Vue 3-346, React, TypeScript, SCSSSSSSSSSS, BEM, Vite, Nuxt и др.
          Люблю чистый код и внимание к деталям и деньги.
        </p>
      </div>
    </section>

    <!-- Projects screen -->
    <section class="home__projects">
      <div class="container">
        <h2 class="section-title">Мои проекты</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-card__placeholder"></div>
            <h3 class="project-card__title">Интернет-магазин (доставка на Марс)</h3>
            <p>Vue 346 + Vuexxxs + SCSSSSSSSSSS</p>
          </div>
          <div class="project-card">
            <div class="project-card__placeholder"></div>
            <h3 class="project-card__title">Корпоративный сайт Indian</h3>
            <p>Nuxt 3 + Tailwind</p>
          </div>
          <div class="project-card">
            <div class="project-card__placeholder"></div>
            <h3 class="project-card__title">Лендинг компании SpaceX</h3>
            <p>React + Framer Motion</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home__footer">
      <div class="container">
        <p>&copy; 2025 Иван Иванов. Все права не защищены.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home__hero {
  height: 100vh;
  min-height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}

.home__hero-title { font-size: 4.5rem; margin-bottom: 1rem; }
.home__hero-subtitle { font-size: 1.8rem; margin-bottom: 3rem; opacity: 0.9; }
.home__hero-btn {
  display: inline-block;
  padding: 1rem 3rem;
  background: white;
  color: #667eea;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform .3s;
}
.home__hero-btn:hover { transform: translateY(-5px); }

.home__about, .home__projects {
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  align-items: center;
}
.home__about { background: #f8fafc; }

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #1e293b;
}

.home__about-text {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,.1);
  transition: transform .3s;
}
.project-card:hover { transform: translateY(-10px); }

.project-card__placeholder {
  height: 200px;
  background: #e2e8f0;
}

.project-card__title {
  padding: 1.5rem 1.5rem .5rem;
  font-size: 1.5rem;
}

.project-card p {
  padding: 0 1.5rem 1.5rem;
  color: #64748b;
}

.home__footer {
  padding: 3rem 0;
  background: #1e293b;
  color: white;
  text-align: center;
}

@media (max-width: 768px) {
  .home__hero-title { font-size: 3rem; }
  .home__hero-subtitle { font-size: 1.4rem; }
}
</style>