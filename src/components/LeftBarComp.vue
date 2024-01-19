<template>
  <div class="leftbar">
    <div class="leftbar__wrapper">
      <div class="leftbar__content">
        <div class="leftbar__avatar">
          <img class="leftbar__avatar-pic" src="../assets/img/me.png" alt="photo" />
        </div>
        <div class="leftbar__me">
          <span class="leftbar__me-name">Anna</span>
          <span class="leftbar__me-prof">Front-end developer</span>
        </div>
        <div class="leftbar__contacts">
          <div class="leftbar__item">
            <SvgIcon class="leftbar__item-icon" :name="'icon-mail'" />
            <p class="leftbar__item-text">zareth2_@mail.ru</p>
          </div>
          <div class="leftbar__item">
            <SvgIcon class="leftbar__item-icon" :name="'icon-map-pin'" />
            <p class="leftbar__item-text">Moscow</p>
          </div>
          <div class="leftbar__item">
            <SvgIcon class="leftbar__item-icon" :name="'icon-briefcase'" />
            <p class="leftbar__item-text">Full-time</p>
          </div>
          <div class="leftbar__item">
            <SvgIcon class="leftbar__item-icon" :name="'icon-link'" />
            <p class="leftbar__item-text">aum-portfolio.vercel.app</p>
          </div>
        </div>
        <ul class="leftbar__stack">
          <li class="leftbar__el">HTML</li>
          <li class="leftbar__el">CSS</li>
          <li class="leftbar__el">VUE</li>
          <li class="leftbar__el">JS</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  components: { SvgIcon },
  name: 'LeftBarComp',
};
</script>

<style lang="scss">
.leftbar {
  font-family: 'IBM Plex Mono';
  width: 320px;
  min-width: 320px;

  border-left: 4px solid #12f7d6;
  border-top: 4px solid #12f7d6;
  box-shadow: inset 3px 0px 3px 0px #12f7d6;
  border-radius: 160px 0 160px 0;

  &__wrapper {
    border: 3px solid #fff;

    border-radius: 160px 0 160px 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 36px 24px;
  }
  &__avatar {
    display: flex;
    justify-content: center;
    &-pic {
      width: 96px;
      height: 96px;
      object-fit: cover;

      border-radius: 50%;
      border: 3px solid #12f7d6;
    }
  }
  &__me {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    line-height: 18px;
    font-weight: 400;

    margin-top: 16px;

    color: #fff;
    text-align: center;
    &-name {
      font-size: 32px;
      line-height: 42px;
      font-weight: 500;
    }
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }
  &__item {
    display: flex;
    column-gap: 16px;

    align-items: center;
    &-icon {
      width: 14px;
      height: 14px;

      color: #12f7d6;
    }
    &-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;

      color: #fff;
    }
  }
  &__stack {
    display: flex;
    column-gap: 16px;

    margin-top: 48px;

    padding: 0;

    list-style-type: none;
  }
  &__el {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;

    padding: 0 8px 0 8px;

    color: #292f36;
    background-color: #12f7d6;

    border-radius: 8px;
  }
}
</style>