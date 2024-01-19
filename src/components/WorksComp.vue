<template>
  <div class="works">
    <article class="works__work" v-for="work in works" :key="work.index">
      <router-link :to="work.link" class="hover-text-one">
        <figure class="works__card">
          <img
            class="works__img"
            :src="require(`../assets/img/${work.img}.png`)"
            height="288px"
            contain
          />
          <figcaption>
            <p>Перейти к просмотру</p>
          </figcaption>
        </figure>
      </router-link>
      <div class="works__content">
        <span class="works__title">{{ work.title }}</span>
        <ul class="works__skills">
          <li class="works__skills-item">{{ work.skill1 }}</li>
          <li class="works__skills-item">{{ work.skill2 }}</li>
          <li class="works__skills-item">{{ work.skill3 }}</li>
          <li class="works__skills-item">{{ work.skill4 }}</li>
          <li class="works__skills-item">{{ work.skill5 }}</li>
          <li class="works__skills-item">{{ work.skill6 }}</li>
        </ul>
      </div>
    </article>
    <article class="works__work">
      <a href="https://chat-react-azure.vercel.app/chats" class="hover-text-one">
        <figure class="works__card">
          <img class="works__img" :src="require(`../assets/img/chat.png`)" height="288px" contain />
          <figcaption>
            <p>Перейти к просмотру</p>
          </figcaption>
        </figure>
      </a>
      <div class="works__content">
        <span class="works__title">Chat</span>
        <ul class="works__skills">
          <li class="works__skills-item">React</li>
          <li class="works__skills-item">Redux</li>
          <li class="works__skills-item">Firebase</li>
          <li class="works__skills-item">HTML</li>
          <li class="works__skills-item">CSS</li>
          <li class="works__skills-item">Photoshop</li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'WorksComp',
  data() {
    return {
      works: [
        {
          title: 'HELP ENHANCE',
          link: '/helpenhance',
          img: 'helpenhance',
          skill1: 'Vue JS',
          skill2: 'Vuex',
          skill3: 'HTML',
          skill4: 'SCSS',
          skill5: 'Figma',
          skill6: 'Photoshop',
        },
        {
          title: 'WEB Integrator',
          link: '/webintegrator',
          img: 'webintegrator',
          skill1: 'Vue JS',
          skill2: 'Vuex',
          skill3: 'Vue Cli',
          skill4: 'HTML5',
          skill5: 'SCSS',
          skill6: 'Figma',
        },
        {
          title: 'Fitness Project',
          link: '/fitnessproject',
          img: 'fitnessproject',
          skill1: 'HTML5',
          skill2: 'SCSS',
          skill3: 'JavaScript',
          skill4: 'jQuery',
          skill5: 'Webpack',
          skill6: 'Figma',
        },
        {
          title: 'HELPTENSE',
          link: '/helptense',
          img: 'helptense',
          skill1: 'Vue JS',
          skill2: 'HTML',
          skill3: 'SCSS',
          skill4: 'Github',
          skill5: 'Figma',
          skill6: 'Trello',
        },
        {
          title: 'Online Store',
          link: '/onlinestore',
          img: 'verstka',
          skill1: 'Vue JS',
          skill2: 'JavaScript',
          skill3: 'Node JS',
          skill4: 'HTML',
          skill5: 'CSS',
          skill6: 'Webpack',
        },
        {
          title: 'Personal finance app',
          link: '/personalfinance',
          img: 'vueproject',
          skill1: 'Vue JS',
          skill2: 'Vuex',
          skill3: 'Vuetify',
          skill4: 'HTML',
          skill5: 'CSS',
          skill6: 'Figma',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.works {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 100px;
  column-gap: 40px;
  &__work {
    display: flex;
    flex-direction: column;

    width: 600px;
    height: fit-content;
    background-color: #292f36;

    -webkit-box-shadow: 0px 0px 15px 9px rgba(26, 30, 35, 0.2);
    -moz-box-shadow: 0px 0px 15px 9px rgba(26, 30, 35, 0.2);
    box-shadow: 0px 0px 15px 9px rgba(26, 30, 35, 0.2);

    border-radius: 18px;

    transition: all 0.3s ease-in-out;

    @media (min-width: 375px) and (max-width: 767px) {
      width: 300px;
    }

    &:hover {
      transform: scale(1.1);

      -webkit-box-shadow: 0px 0px 26px 22px rgba(18, 247, 214, 0.12);
      -moz-box-shadow: 0px 0px 26px 22px rgba(18, 247, 214, 0.12);
      box-shadow: 0px 0px 26px 22px rgba(18, 247, 214, 0.12);
    }
  }
  &__card {
    margin: 0;

    border-radius: 18px 18px 0 0;
  }
  &__img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  &__content {
    padding: 15px 10px 0 10px;
  }
  &__title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;

    color: #12f7d6;
    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 18px;
      line-height: 20px;
    }
  }
  &__skills {
    display: flex;
    justify-content: space-between;

    margin: 15px 0 15px 0;
    padding: 0;
    @media (min-width: 375px) and (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: flex-start;
      column-gap: 5px;
      row-gap: 5px;
    }

    &-item {
      font-family: 'Ubuntu', sans-serif;
      font-size: 16px;
      line-height: 32px;
      font-weight: 500;

      padding: 2px 18px;

      list-style-type: none;
      text-align: center;

      color: #292f36;
      background-color: #98faec;

      border-radius: 24px;
      @media (min-width: 375px) and (max-width: 767px) {
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;

        padding: 2px 8px;
      }
    }
  }
}
// animation

/* Общие стили */

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
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;

  padding: 2em;
  color: #fff;
  text-transform: uppercase;

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
}
.hover-text-one figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Эффект при наведении */
figure.works__card figcaption::before {
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
figure.works__card h3 {
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
figure.works__card figcaption::before,
figure.works__card p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}
figure.works__card p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}
figure.works__card:hover h3 {
  color: #fff;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
}
figure.works__card:hover figcaption::before,
figure.works__card:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>