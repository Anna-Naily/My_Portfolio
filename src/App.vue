<template>
  <div class="page">
    <router-view />
    <FooterComp class="page__footer" />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import MainPage from './views/MainPage.vue';

export default {
  name: 'App',
  components: { FooterComp, MainPage },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400;500&family=Ubuntu:wght@300;400;500&display=swap');
@import './assets/scss/style.scss';
.page {
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  font-family: 'IBM Plex Mono', monospace;
  font-family: 'Ubuntu', sans-serif;

  margin: 0;

  &__footer {
    flex-shrink: 0;
  }
}
</style>
