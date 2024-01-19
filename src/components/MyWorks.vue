<template>
  <v-app class="content-block">
    <h1 class="content-page__heading wrapper">Мои работы</h1>
    <div class="content-page wrapper" id="content">
      <div data-aos="zoom-in">
        <div class="content-page__item">
          <v-card max-width="600" elevation="24">
            <router-link to="/helpenhance" class="hover-text-one">
              <figure class="effect-text-two">
                <v-img :src="require(`../assets/img/helpenhance.png`)" height="288px" contain></v-img>
                <figcaption>
                  <p>Перейти к просмотру</p>
                </figcaption>
              </figure>
            </router-link>
            <v-card-title class="card__title">HELP ENHANCE</v-card-title>

            <v-card-subtitle class="card__subtitle">
              <p class="card-subtitle__text">Vue JS</p>
              <p class="card-subtitle__text">Vuex</p>
              <p class="card-subtitle__text">HTML</p>
              <p class="card-subtitle__text">SCSS</p>
              <p class="card-subtitle__text">Figma</p>
              <p class="card-subtitle__text">Photoshop</p>
            </v-card-subtitle>
            <v-card-actions class="card__link">
              <v-spacer></v-spacer>
              <v-btn id="1" color="indigo darken-4" icon @click="show0=!show0">
                <v-icon id="1">{{ show0 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show0" class="expand-block">
                <v-divider></v-divider>

                <v-card-text class="card-text">
                  <p>Коммерческий проект, выполненный по подобию android-приложения.</p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div class="content-page__item">
          <v-card max-width="600" elevation="24">
            <router-link to="/helptense" class="hover-text-one">
              <figure class="effect-text-two">
                <v-img :src="require(`../assets/img/helptense.png`)" height="288px" contain></v-img>
                <figcaption>
                  <p>Перейти к просмотру</p>
                </figcaption>
              </figure>
            </router-link>
            <v-card-title class="card__title">HELPTENSE</v-card-title>

            <v-card-subtitle class="card__subtitle">
              <p class="card-subtitle__text">Vue JS</p>
              <p class="card-subtitle__text">HTML</p>
              <p class="card-subtitle__text">SCSS</p>
              <p class="card-subtitle__text">Github</p>
              <p class="card-subtitle__text">Figma</p>
              <p class="card-subtitle__text">Trello</p>
            </v-card-subtitle>
            <v-card-actions class="card__link">
              <v-spacer></v-spacer>
              <v-btn id="1" color="indigo darken-4" icon @click="show1=!show1">
                <v-icon id="1">{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1" class="expand-block">
                <v-divider></v-divider>

                <v-card-text class="card-text">
                  <p>Сервис для изучения английского языка, разработанный командой разработчиков из 4-х человек с использованием Agile SCRUM.</p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div class="content-page__item">
          <v-card class="mx-auto" max-width="600" elevation="24">
            <router-link to="/onlinestore" class="hover-text-one">
              <figure class="effect-text-two">
                <v-img
                  class="item-img"
                  :src="require(`../assets/img/verstka.png`)"
                  height="288px"
                  contain
                ></v-img>
                <figcaption>
                  <p>Перейти к просмотру</p>
                </figcaption>
              </figure>
            </router-link>
            <v-card-title class="card__title">Online Store</v-card-title>
            <v-card-subtitle class="card__subtitle">
              <p class="card-subtitle__text">Vue JS</p>
              <p class="card-subtitle__text">JavaScript</p>
              <p class="card-subtitle__text">Node JS</p>
              <p class="card-subtitle__text">HTML</p>
              <p class="card-subtitle__text">CSS</p>
              <p class="card-subtitle__text">Webpack</p>
            </v-card-subtitle>

            <v-card-actions class="card__link">
              <v-spacer></v-spacer>
              <v-btn id="2" color="indigo darken-4" icon @click="show2=!show2">
                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2" class="expand-block">
                <v-divider></v-divider>

                <v-card-text class="card-text">Учебный проект по реализации интернет-магазина.</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div class="content-page__item">
          <v-card class="mx-auto" max-width="600" elevation="24">
            <router-link to="/personalfinance" class="hover-text-one">
              <figure class="effect-text-two">
                <v-img :src="require(`../assets/img/vueproject.png`)" height="288px" contain></v-img>
                <figcaption>
                  <p>Перейти к просмотру</p>
                </figcaption>
              </figure>
            </router-link>
            <v-card-title class="card__title">Personal finance app</v-card-title>

            <v-card-subtitle class="card__subtitle">
              <p class="card-subtitle__text">Vue JS</p>
              <p class="card-subtitle__text">Vuex</p>
              <p class="card-subtitle__text">Vuetify</p>
              <p class="card-subtitle__text">HTML</p>
              <p class="card-subtitle__text">CSS</p>
              <p class="card-subtitle__text">Figma</p>
            </v-card-subtitle>

            <v-card-actions class="card__link">
              <v-spacer></v-spacer>

              <v-btn id="3" color="indigo darken-4" icon @click="show3=!show3">
                <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3" class="expand-block">
                <v-divider></v-divider>

                <v-card-text
                  class="card-text"
                >Веб-приложение, выполненное на Vue JS, которое позволяет вести учет личных финансовых расходов и наглядно на диаграмме анализировать.</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div class="content-page__item">
          <v-card class="mx-auto" max-width="600" elevation="24">
            <a class="hover-text-one" href="https://chat-react-azure.vercel.app/chats">
              <figure class="effect-text-two">
                <v-img :src="require(`../assets/img/chat.png`)" height="288px" contain></v-img>
                <figcaption>
                  <p>Перейти к просмотру</p>
                </figcaption>
              </figure>
            </a>
            <v-card-title class="card__title">Chat</v-card-title>

            <v-card-subtitle class="card__subtitle">
              <p class="card-subtitle__text">React JS</p>
              <p class="card-subtitle__text">Redux</p>
              <p class="card-subtitle__text">Firebase</p>
              <p class="card-subtitle__text">HTML</p>
              <p class="card-subtitle__text">CSS</p>
              <p class="card-subtitle__text">Photoshop</p>
            </v-card-subtitle>
            <v-card-actions class="card__link">
              <v-spacer></v-spacer>

              <v-btn id="4" color="indigo darken-4" icon @click="show4=!show4">
                <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show4" class="expand-block">
                <v-divider></v-divider>

                <v-card-text class="card-text">
                  <h2>О проекте</h2>Чат был разработан в учебных целях.
                  <br />В веб-приложении добавлена регистрация и авторизация, после
                  которых становится доступен чат. Есть возможность
                  самостоятельно добавлять диалоговое окно, отправлять
                  сообщения, изменять свое имя.
                </v-card-text>
                <v-card-text class="card-text">
                  <h2>Инструменты</h2>React.Js, Redux, Firebase, HTML, CSS, Github.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <h2 class="bottom-content__heading wrapper">Небольшие проекты и эксперименты</h2>
      <div class="small-content-page wrapper">
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <v-tooltip bottom color="deep-purple darken-1" class="small-content-page__item">
            <template v-slot:activator="{ on, attrs }">
              <a href="https://auto-calculator.vercel.app/" class="circle-link">
                <v-img
                  class="small-content-page__img"
                  :src="require(`../assets/img/calculator.png`)"
                  max-height="180"
                  max-width="180"
                  v-bind="attrs"
                  v-on="on"
                ></v-img>
              </a>
            </template>
            <span
              class="tooltip-span"
            >Калькулятор расчета стоимости автомобиля в лизинг (Адаптив + VueJS)</span>
          </v-tooltip>
        </div>

        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <v-tooltip bottom color="pink darken-1" class="small-content-page__item">
            <template v-slot:activator="{ on, attrs }">
              <a href="https://anna-naily.github.io/ResponsiveLayout/" class="circle-link">
                <v-img
                  class="small-content-page__img"
                  :src="require(`../assets/img/first-project.png`)"
                  max-height="180"
                  max-width="180"
                  v-bind="attrs"
                  v-on="on"
                ></v-img>
              </a>
            </template>
            <span class="tooltip-span">Респонсивная верстка интернет-магазина</span>
          </v-tooltip>
        </div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <v-tooltip bottom color="pink darken-1" class="small-content-page__item">
            <template v-slot:activator="{ on, attrs }">
              <a href="https://pokemons-mocha.vercel.app/" class="circle-link">
                <v-img
                  class="small-content-page__img"
                  :src="require(`../assets/img/poke.png`)"
                  max-height="180"
                  max-width="180"
                  v-bind="attrs"
                  v-on="on"
                ></v-img>
              </a>
            </template>
            <span class="tooltip-span">Pokemon's API</span>
          </v-tooltip>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'MyWorks',
  data() {
    return {
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    };
  },
  methods: {
    handlerClick() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/assets/style/responsiveStyle.scss';
@import './src/assets/style/main.scss';

.content-block {
  background: #eaeeee;

  font-family: 'Montserrat', sans-serif !important;
}
.content-page__heading {
  font-size: 30px;
  font-weight: 600;
  margin-top: 60px;
  color: #6d7178;
  text-align: center;
}
.content-page {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 800px;
}
.content-page__item {
  margin-bottom: 90px;
}

.card__title {
  font-size: 21px;
  font-weight: 500;
  margin: 20px 0px 30px 10px;
  color: #3949ab;
}
.card__subtitle {
  font-size: 14px;
  color: #4a4a4a;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 480px;
  flex-wrap: wrap;
}
.card-subtitle__text {
  background: #3949ab;
  color: #f3f3f3;
  border-radius: 15px;
  padding: 2px 10px;
  text-align: center;
}
.card__link {
  .card__link-btn {
    font-size: 16px;
  }
}
.expand-block {
  background: #738bb1;
}
.card-text {
  color: #fff;

  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 5px 10px;
  h2 {
    font-size: 20px;
    color: #ffbbc4;
    margin-bottom: 3px;
    font-weight: 400;
  }
}
.bottom-content {
  background: #85a0af;
}
.bottom-content__heading {
  color: #eff5f8;
  text-align: center;
  margin-top: 20px;
  font-size: 26px;
  font-weight: 400;
}
.small-content-page {
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  width: 1000px !important;
}
.small-content-page__img {
  border-radius: 50%;
}
.tooltip-span {
  padding: 10px 15px;
  font-size: 16px;
}
// Hover card
*,
*:after,
*:before {
  box-sizing: border-box;
}
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.figcaption-text {
  font-size: 20px;
}
.hover-text-one {
  overflow: hidden;
  margin: 0;
  width: 100%;
  list-style: none;
  text-align: center;
}
.hover-text-one figure {
  position: relative;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  background: #527c82;
  text-align: center;
  cursor: pointer;
}
.hover-text-one figure img {
  position: relative;
  display: block;
  min-height: 100%;
  opacity: 0.8;
}
.hover-text-one figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.hover-text-one figure figcaption::before,
.hover-text-one figure figcaption::after {
  pointer-events: none;
}
.hover-text-one figure figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hover-text-one figure h3 {
  word-spacing: -0.15em;
  font-weight: 300;
}
.hover-text-one figure h3 span {
  font-weight: 800;
}
.hover-text-one figure h3,
.hover-text-one figure p {
  margin: 0;
  font-size: 18px !important;
}
.hover-text-one figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Эффект при наведении */
figure.effect-text-two figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(
    top,
    rgba(72, 76, 97, 0) 0%,
    rgba(72, 76, 97, 0.8) 75%
  );
  background: linear-gradient(
    to bottom,
    rgba(72, 76, 97, 0) 0%,
    rgba(72, 76, 97, 0.8) 75%
  );
  content: '';
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}
figure.effect-text-two h3 {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #f66d52 !important;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
figure.effect-text-two figcaption::before,
figure.effect-text-two p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}
figure.effect-text-two p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}
figure.effect-text-two:hover h3 {
  color: #fff;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
}
figure.effect-text-two:hover figcaption::before,
figure.effect-text-two:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
/// Hover for small content

.small-content-page__img {
  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out;
}
.small-content-page__img:hover {
  -webkit-transform: rotate(
    360deg
  ); /* Градусы поворота можно изменить по необходимости */
  transform: rotate(
    360deg
  ); /* Градусы поворота можно изменить по необходимости */
}
</style>