<template>
  <v-app>
    <div class="container">
      <div class="main-page" id="start">
        <div class="top-block">
          <nav class="menu">
            <ul class="menu__list wrapper">
              <li class="menu__link">
                <span class="menu-link" v-scroll-to="'#content'">Мои работы</span>
              </li>
              <li class="menu__link">
                <span class="menu-link" v-scroll-to="'#cert'">Сертификаты</span>
              </li>
              <li class="menu__link">
                <span class="menu-link" v-scroll-to="'#contacts'">Контакты</span>
              </li>
            </ul>
          </nav>
          <div class="center-block wrapper">
            <div class="about-me">
              <h1 class="about-me__heading">Анна Уманская</h1>
              <p class="about-me__text">Front-end Developer</p>
              <v-dialog class="about-me__btn-block" v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="about-me__btn"
                    color="indigo darken-1"
                    elevation="9"
                    rounded
                    x-large
                    v-bind="attrs"
                    v-on="on"
                  >Обо мне</v-btn>
                </template>
                <transition name="fade">
                  <v-card outlined shaped elevation="6" class="about-modal">
                    <v-card-title class="text-h5 indigo darken-1">Обо мне</v-card-title>
                    <v-card-text class="card-text">
                      Привет! Меня зовут Анна. Живу в Москве.
                      <br />Я - Front-end Developer.
                      <br />
                      <br />В работе всегда совмещаю красивый код со своим внутренним перфекционистом :)
                      <br />
                      <br />В 2022-ом году окончила обучение Front-end разработке, в наличии диплом о профессиональной переподготовке. В своем арсенале имею много кейсов. С самыми основными Вы можете ознакомиться здесь.
                      <br />
                      <br />Использую: JavaScript, Vue.JS, Node.JS, React.JS, TypeScript, Webpack
                      HTML, CSS, SASS/SCSS, Vuetify, Bootstrap, Photoshop, Figma, Adobe XD, Zeplin.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="indigo darken-1" text @click="dialog = false">Закрыть</v-btn>
                    </v-card-actions>
                  </v-card>
                </transition>
              </v-dialog>
            </div>
            <div class="contacts-bar">
              <a class="contact-icon" href="https://t.me/MsNaily">
                <font-awesome-icon icon="fa-brands fa-telegram"></font-awesome-icon>
              </a>
              <a class="contact-icon" href="https://github.com/Anna-Naily">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>
        <div class="bottom-center-block wrapper">
          <div class="arrow-7" v-scroll-to="'#content'">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <MyWorks id="content" />
        <CertificatesList id="cert" />
      </div>
    </div>
  </v-app>
</template>
  
  <script>
import MyWorks from '@/components/MyWorks.vue';
import CertificatesList from '@/components/CertificatesList.vue';

export default {
  name: 'HomePage',
  components: { MyWorks, CertificatesList },
  data: () => ({
    dialog: false,
  }),
};
</script>
  <style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
@import '../assets/style/responsiveStyle.scss';
@import '../assets/style/main.scss';

.container {
  font-family: 'Montserrat', sans-serif !important;
}

.top-block {
  background: url(../assets/img/main2.png) no-repeat center;
  width: 100%;
  height: 930px;
}
.menu__list {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
.menu__link span {
  text-decoration: none;
  display: block;
  transition: 0.5s linear;
  padding: 15px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #9dabf1a1;
  }
}
.center-block {
  display: flex;
  justify-content: space-between;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.about-me {
  margin-top: 23%;
}
.about-me__heading {
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
}
.about-me__text {
  font-size: 20px;
  color: white;
  margin-bottom: 50px;
  font-style: italic;
}
.about-me__btn {
  font-size: 18px;
  width: 220px;
  color: #fff;
}
.text-h5 {
  color: #fff;
  font-weight: 400;
}
.card-text {
  font-size: 19px;
  font-weight: 400;
  color: #0d1625;
  margin-top: 30px;
}

.contact-icon {
  font-size: 60px;
  color: rgb(207, 204, 204);
  font-size: 60px;
  margin-bottom: 30px;
  transition: all 0.35s;
  &:hover {
    color: #97a4e2fb;
  }
}
.contacts-bar {
  margin-top: 23%;
  display: flex;
  flex-direction: column;
}
.bottom-center-block {
  margin-top: 270px;
}
.arrow-7 {
  margin: -380px auto 10px auto;
  width: 38px;
  height: 100px;
  cursor: pointer;
}
.arrow-7 span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #cfccccbb;
  border-right: 5px solid #cfccccbb;
  transform: rotate(45deg);
  margin: -16px 0;
  animation: arrow-7 2s infinite;
}
.arrow-7 span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-7 span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-7 {
  0% {
    opacity: 0;
    transform: translate(0, -20px) rotate(45deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(0, 20px) rotate(45deg);
  }
}
</style>
  
  