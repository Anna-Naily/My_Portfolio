jpg<template>
  <div class="wrapper-cert">
    <div class="cert-block wrapper">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="carousel-wrapper">
          <v-carousel
            class="carousel-block"
            hide-delimiters
            show-arrows-on-hover
            height="300"
            width="400"
          >
            <v-carousel-item
              class="carousel-block__item"
              v-for="(file, i) in files"
              :key="i"
              :src="file.image"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificatesList',
  data() {
    return {
      files: [
        {
          image: require('../assets/img/certificates/Сертификат продвинутый js.jpg'),
        },
        { image: require('../assets/img/certificates/Сертификат Vue js.jpg') },
        {
          image: require('../assets/img/certificates/Сертификат Командная разработка по методологии SCRUM.jpg'),
        },
        { image: require('../assets/img/certificates/Сертификат React.jpg') },
        {
          image: require('../assets/img/certificates/Сертификат TypeScript.jpg'),
        },
        { image: require('../assets/img/certificates/Сертификат NodeJs.jpg') },
        { image: require('../assets/img/certificates/Проф верстка.jpg') },
        {
          image: require('../assets/img/certificates/Сертификат Web проект.jpg'),
        },
        {
          image: require('../assets/img/certificates/JavaScript 1 уровень.jpg'),
        },
        { image: require('../assets/img/certificates/Тестирование JS.jpg') },
        {
          image: require('../assets/img/certificates/Основы программирования.jpg'),
        },
        {
          image: require('../assets/img/certificates/Сертификат Agile, Scrum теория.jpg'),
        },
        { image: require('../assets/img/certificates/osnovi.jpg') },
        { image: require('../assets/img/certificates/nachalniy lvl.jpg') },
        { image: require('../assets/img/certificates/MySQL.jpg') },
        { image: require('../assets/img/certificates/git.jpg') },
        { image: require('../assets/img/certificates/Сертификат Linux.jpg') },
        {
          image: require('../assets/img/certificates/Золотой сертификат HTML.jpg'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/assets/style/main.scss';
@import './src/assets/style/responsiveStyle.scss';
.wrapper-cert {
  background: #6d7177;
}
.cert-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-block {
  margin-top: 50px;
  margin-bottom: 50px;
}

.carousel-wrapper {
  width: 400px;
}
</style>