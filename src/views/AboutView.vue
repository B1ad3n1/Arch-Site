<template>
  <div class="about">
    <div class="container">
      <h1 class="about__title">Обо мне</h1>
      <div class="about__content">
        <p class="about__text">
          Меня зовут Иван Иванов. Я frontend-разработчик с опытом коммерческой разработки более 2 лет...
          Занимался специфичиными вещами. Особенно дороги.
        </p>

        <h2 class="about__skills-title">Навыки</h2>
        <ul class="about__skills">
          <li class="about__skill-item">Vue 3</li>
          <li class="about__skill-item">React</li>
          <li class="about__skill-item">JavaScript / TypeScript</li>
          <li class="about__skill-item">HTML5 / CSS3 / SCSS / BEM</li>
          <li class="about__skill-item">Vite / Webpack / Git</li>
          <li class="about__skill-item">Знаком с Илоном Маском (он об этом не знает)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 120px 0 80px;
  min-height: 100vh;
}

.about__title {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #1e293b;
}

.about__content {
  max-width: 900px;
  margin: 0 auto;
}

.about__text {
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 4rem;
  text-align: center;
}

.about__skills-title {
  font-size: 2.5rem;
  text-align: center;
  margin: 4rem 0 2rem;
}

.about__skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  list-style: none;
}

.about__skill-item {
  background: #f1f5f9;
  ;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>