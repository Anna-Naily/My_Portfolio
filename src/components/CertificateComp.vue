<template>
  <div class="certificate">
    <Swiper :slides="slides" :swiperMode="swiperMode" />
  </div>
</template>

<script>
import Swiper from './Swiper.vue';
export default {
  components: { Swiper },
  name: 'CertificateComp',
  setup() {
    const slides = [
      { img: 'qsoft-diplom' },
      { img: 'vue' },
      { img: 'Сертификат React' },
      { img: 'Сертификат NodeJs' },
      { img: 'Проф верстка' },
      { img: 'TypeScript' },
      { img: 'js_middle' },
      { img: 'prodvinutij_js' },
      { img: 'JavaScript 1 уровень' },
      { img: 'MySQL' },
      { img: 'webpack' },
      { img: 'test_html' },
      { img: 'js_test' },
      { img: 'git' },
      { img: 'es6' },
      { img: 'scrum' },
      { img: 'Сертификат Agile, Scrum теория' },
      { img: 'Сертификат Linux' },
      { img: 'Золотой сертификат HTML' },
      { img: 'osnovi_gold' },
      { img: 'Основы программирования' },
    ];
    const swiperMode = 'certificate';
    return { slides, swiperMode };
  },
};
</script>

<style lang="scss">
.certificate {
  margin: -64px 0 -64px 0;
  &__swiper {
    width: 800px;
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 600px;
    }
    @media (min-width: 375px) and (max-width: 767px) {
      width: 350px;
      margin-left: -5px;
    }
    @media (min-width: 320px) and (max-width: 374px) {
      width: 330px;
      margin-left: -5px;
    }
  }
  &__img {
    width: 500px;
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 400px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      width: 230px;
    }
  }
}
</style>
