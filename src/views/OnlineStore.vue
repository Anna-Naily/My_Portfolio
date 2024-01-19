<template>
  <div class="project">
    <div class="project__bcg">
      <div class="project__wrapper">
        <div class="project__header project--container">
          <router-link class="project__header-btn" to="/">Вернуться назад</router-link>
          <div class="project__header-heading">Online Store</div>
          <div class="project__header-info">
            <span class="project__header-span">
              <span class="project__header-span project__header-span--blue">РОЛЬ</span>FRONT-END DEVELOPER
            </span>
            <span class="project__header-span">
              <span class="project__header-span project__header-span--blue">ЗАДАЧА</span>ВЕРСТКА ИНТЕРНЕТ-МАГАЗИНА И СОЗДАНИЕ ФУНКЦИОНАЛА
            </span>
            <span class="project__header-span">
              <span class="project__header-span project__header-span--blue">ПЕРИОД</span>2021
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="project__discription">
      <div class="project__discription-content project--container">
        <span class="project__discription-heading">О Проекте</span>
        <p
          class="project__discription-text"
        >Учебный проект по реализации интернет-магазина со всем предусмотренным функционалом, включая работу с базами данных.</p>
        <a
          href="https://www.behance.net/gallery/148996927/Online-Store"
          class="project__discription-btn"
        >Посетить Веб-сайт</a>
      </div>
    </div>
    <div class="project__main">
      <div class="main-wrapper project--container">
        <div class="project__main-content">
          <div class="project__leftbar">
            <div class="project__leftbar-heading">Реализация</div>
            <p class="project__leftbar-text">
              Я разработала интернет-магазин с возможностью заказывать товар из каталога. Необходимо было сверстать по макетам + разработать функционал frontend и backend (Node.js) частей + сборка проекта Webpack.
              Основной функционал в корзине: при нажатии на товар, каждая его единица добавляется в корзину, меняется стоимость, есть возможность редактирования списка покупок.
              Используемый стек: Vue.JS, JavaScript, HTML, CSS, Node.JS, Webpack, Zeplin, Figma, Github.
            </p>
          </div>
          <div class="project__rightbar">
            <img class="project__rightbar-img" src="../assets/img/adaptiveOnlineStore.png" alt />
          </div>
        </div>

        <div class="project__carousel">
          <div class="project__carousel-heading project__leftbar-heading">Дизайн</div>
          <div class="project__carousel-wrapper">
            <Swiper :slides="slides" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Swiper from '@/components/Swiper.vue';
export default {
  components: { Swiper },
  name: 'OnlineStore',
  setup() {
    const slides = [
      { img: 'onlinestore1' },
      { img: 'onlinestore2' },
      { img: 'onlinestore3' },
      { img: 'onlinestore4' },
      { img: 'onlinestore5' },
      { img: 'onlinestore6' },
      { img: 'onlinestore7' },
      { img: 'onlinestore8' },
    ];
    return { slides };
  },
};
</script>
  
<style lang="scss" scoped>
.project {
  flex-grow: 1;

  width: 100%;

  &--container {
    max-width: 1460px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1280px) and (max-width: 1919px) {
      max-width: 1024px;
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      max-width: 704px;
    }
    @media (min-width: 390px) and (max-width: 767px) {
      max-width: 342px;
    }
  }
  &__bcg {
    background-image: url('@/assets/img/onlinestoreBcg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__wrapper {
    background-color: rgba($color: #060c10, $alpha: 0.7);
  }
  &__header {
    display: flex;
    flex-direction: column;

    &-btn {
      font-family: 'Ubuntu', sans-serif;
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;

      color: #fff;
      background-color: #292f36;

      border: 2px solid #12f7d6;
      border-radius: 32px;

      margin-left: auto;
      margin-right: 0;
      margin-top: 20px;

      padding: 16px 32px;

      cursor: pointer;
      text-decoration: none;

      transition: 0.3s;
      @media (min-width: 390px) and (max-width: 767px) {
        font-size: 16px;
        line-height: 32px;
        padding: 10px 14px;

        margin-right: auto;
      }

      &:hover {
        color: #292f36;
        background-color: #12f7d6;
      }
    }
    &-heading {
      font-family: 'Ubuntu', sans-serif;
      font-size: 80px;
      line-height: 72px;
      font-weight: 500;

      text-align: center;

      color: white;
      margin-top: 340px;
      @media (min-width: 390px) and (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
        margin-top: 180px;
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;

      font-family: 'IBM Plex Mono', monospace;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;

      color: white;
      padding-bottom: 60px;
      margin-top: 300px;

      @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 390px) and (max-width: 767px) {
        font-size: 14px;
        line-height: 16px;
        flex-direction: column;
        text-align: center;
        row-gap: 15px;
        margin-top: 180px;
      }
    }
    &-span {
      @media (min-width: 390px) and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
      }

      &--blue {
        font-weight: 500;
        color: #12f7d6;
        margin-right: 8px;
      }
    }
  }
  &__discription {
    background-color: #060c10;
    &-heading {
      font-family: 'Ubuntu', sans-serif;
      font-size: 60px;
      line-height: 72px;
      font-weight: 500;

      border-bottom: 1px solid #43454d;

      padding-bottom: 30px;

      color: white;
      @media (min-width: 390px) and (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
      }
    }
    &-content {
      width: 560px;
      margin: auto;
      padding: 60px 0px 60px 0px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-text {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 18px;
      line-height: 24px;
      font-weight: 300;

      color: white;

      margin-top: 20px;
      text-align: justify;
      @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 390px) and (max-width: 767px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    &-btn {
      font-family: 'Ubuntu', sans-serif;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;

      color: #fff;

      border: 1px solid #12f7d6;

      color: white;

      padding: 15px;

      margin-top: 20px;
      transition: 0.2s;
      text-decoration: none;
      &:hover {
        color: #292f36;
        background-color: #12f7d6;
      }
    }
  }
  &__main {
    background-color: #eaeeee;
    &-wrapper {
      display: flex;
      flex-direction: column;
    }
    &-content {
      padding-top: 60px;
      padding-bottom: 60px;
      display: flex;
      justify-content: space-between;
      @media (min-width: 390px) and (max-width: 767px) {
        flex-direction: column;
        row-gap: 50px;
      }
    }
  }
  &__leftbar {
    width: 400px;
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 300px;
    }
    @media (min-width: 390px) and (max-width: 767px) {
      width: 100%;
    }
    &-heading {
      font-family: 'Ubuntu', sans-serif;
      font-size: 40px;
      line-height: 46px;
      font-weight: 500;

      color: #060c1096;
      padding-bottom: 30px;
      border-bottom: 0.5px solid #060c102f;
      @media (min-width: 390px) and (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
      }
    }
    &-text {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;

      text-align: justify;
      margin-top: 30px;

      color: rgba(0, 0, 0, 0.801);
    }
  }
  &__rightbar {
    color: rgba(0, 0, 0, 0.801);
    width: 450px;
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 300px;
    }
    @media (min-width: 390px) and (max-width: 767px) {
      width: 100%;
    }
    &-img {
      width: 450px;
      height: 462px;
      @media (min-width: 768px) and (max-width: 1279px) {
        width: 300px;
        height: 312px;
      }
      @media (min-width: 390px) and (max-width: 767px) {
        width: 342px;
        height: 354px;
      }
    }
  }
  &__carousel {
    &-content {
      padding: 60px 0px 60px 0px;
      display: flex;
      flex-direction: column;
    }
    &-heading {
      text-align: right;
      margin-left: auto;
      width: 400px;
      @media (min-width: 390px) and (max-width: 767px) {
        width: 100%;
      }
    }
  }
}
</style>