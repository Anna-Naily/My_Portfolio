<template>
  <div class="skills">
    <ul class="skills__list">
      <li class="skills__item">
        <img src="../assets/icons/html.png" alt class="skills__icon" />
        <p class="skills__text skills__text--red">HTML</p>
      </li>
      <li class="skills__item">
        <img src="../assets/icons/css.png" alt class="skills__icon" />
        <p class="skills__text skills__text--blue">CSS</p>
      </li>
      <li class="skills__item">
        <img src="../assets/icons/js.png" alt class="skills__icon" />
        <p class="skills__text skills__text--orange">JS</p>
      </li>
      <li class="skills__item">
        <img src="../assets/icons/vue.png" alt class="skills__icon" />
        <p class="skills__text skills__text--green">VUE</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillsComp',
};
</script>

<style lang="scss">
.skills {
  &__list {
    display: flex;
    justify-content: space-around;
    padding: 0;
    width: 100%;
    @media (min-width: 767px) and (max-width: 1279px) {
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 64px;
      row-gap: 32px;
      align-items: center;
    }
    @media (min-width: 390px) and (max-width: 767px) {
      flex-wrap: wrap;
      column-gap: 64px;
      row-gap: 32px;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;

    list-style-type: none;
    @media (min-width: 767px) and (max-width: 1279px) {
      width: calc((100% - 30px) / 3);
    }
  }
  &__icon {
    width: 144px;
    height: 144px;
    @media (min-width: 390px) and (max-width: 767px) {
      width: 112px;
      height: 112px;
    }
  }
  &__text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 32px;
    line-height: 42px;
    font-weight: 500;

    margin: 0;
    &--red {
      color: #e54f26;
    }
    &--blue {
      color: #0c73b8;
    }
    &--orange {
      color: #e7a020;
    }
    &--green {
      color: #41b883;
    }
  }
}
</style>