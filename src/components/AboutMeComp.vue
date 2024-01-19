<template>
  <div class="about">
    <div class="about__leftbar">
      <span class="about__heading">Обо мне</span>

      <span class="about__text">
        <span class="about__text--tag">&lt;p&gt;</span>

        <p>
          <span class="about__text--green">Привет!</span> Меня зовут Анна. Я занимаюсь фронтенд-разработкой около 2-х лет.
        </p>
        <p>
          В основном использую такие технологии как:
          <span class="about__text--green">Vue JS</span>,
          <span class="about__text--green">JavaScript</span>,
          <span class="about__text--green">Vuex</span>,
          <span class="about__text--green">HTML5</span>,
          <span class="about__text--green">SCSS</span>,
          <span class="about__text--green">Node JS</span>,
          <span class="about__text--green">jQuery</span>,
          <span class="about__text--green">Bootstrap</span>,
          <span class="about__text--green">Vuetify</span>,
          <span class="about__text--green">Webpack</span>,
          <span class="about__text--green">Docker</span>,
          <span class="about__text--green">Github / Gitlab</span>,
          <span class="about__text--green">Pixel Perfect</span>,
          <span class="about__text--green">Figma</span>,
          <span class="about__text--green">Adobe Photoshop</span>.
        </p>

        <p>В работе всегда совмещаю красивый код со своим внутренним перфекционистом :) Никогда не стою на месте и всегда стараюсь изучать что-то новое.</p>
        <p>
          В 2022-ом году окончила обучение в GeekBrains на
          <span
            class="about__text--green"
          >Front-end разработчика</span>, в наличии диплом о профессиональной переподготовке.
        </p>
        <p>
          В своем арсенале имею много кейсов, пет-проектов и опыт в коммерческой разработке. С самыми основными проектами Вы можете ознакомиться
          <span
            class="about__text--green"
          >здесь</span>.
        </p>

        <span class="about__text--tag">&lt;/p&gt;</span>
      </span>
    </div>
    <div class="about__rightbar">
      <img class="about__img" src="../assets/img/workplace-pic.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeComp',
};
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) and (max-width: 1919px) {
    flex-direction: column;
    row-gap: 64px;
  }

  &__leftbar {
    display: flex;
    flex-direction: column;

    width: 880px;
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 100%;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
      align-items: center;
    }
  }

  &__heading {
    font-family: 'Ubuntu', sans-serif;
    font-size: 64px;
    line-height: 72px;
    font-weight: 400;

    padding: 16px 40px;

    width: fit-content;

    color: #ffff;
    background-color: #292f36;

    border: 4px solid #12f7d6;
    border-radius: 40px 0 40px 0;

    margin-bottom: 64px;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 32px;
      line-height: 36px;

      margin-bottom: 32px;
    }
  }

  &__text {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;

    padding: 24px 40px;

    color: #ffff;
    background-color: #292f36;

    border-radius: 40px;
    &--tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;

      color: #98faec;
    }
    &--green {
      color: #12f7d6;
    }
  }

  &__img {
    width: 400px;

    border-radius: 16px;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 272px;
    }
  }
}
</style>