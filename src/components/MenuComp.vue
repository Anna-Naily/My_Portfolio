<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">Обо мне</li>
      <li class="menu__item">Работы</li>
      <li class="menu__item menu__item--none">Документы</li>
      <li class="menu__item">Контакты</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuComp',
};
</script>

<style lang="scss">
.menu {
  &__list {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;

    font-family: 'IBM Plex Mono';
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;

    list-style-type: none;

    @media (min-width: 375px) and (max-width: 767px) {
      column-gap: 16px;

      font-size: 16px;
      line-height: 20px;
    }
  }
  &__item {
    text-shadow: 2px 2px 5px rgba(#0000, 0.25);
    color: #ffffff;
    transition: 0.3s;
    &--none {
      @media (min-width: 375px) and (max-width: 767px) {
        display: none;
      }
    }
    &:hover {
      cursor: pointer;
      color: #12f7d6;
    }
  }
}
</style>