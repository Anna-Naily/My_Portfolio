<template>
  <div class="hello">
    <div class="hello__heading">
      <h1 class="hello__heading-h1">
        <span class="hello__span--tag">&lt;h1&gt;</span>
        <br />Hello
        <br />I'm
        <span class="hello__span--green">Anna</span>,
        <br />Front-end Developer
        <span class="hello__span--tag">&lt;/h1&gt;</span>
      </h1>
    </div>
    <div class="hello__text">
      <span class="hello__span--tag">&lt;p&gt;</span>
      <p
        class="hello__text-p"
      >I like to create smart user interface and imagine useful interaction, developing rich web experiences & web applications.</p>
      <span class="hello__span--tag">&lt;/p&gt;</span>
    </div>
    <div class="hello__contact">
      <span class="hello__contact-text">Let's Talk</span>
      <a href="https://t.me/MsNaily">
        <SvgIcon class="hello__contact-icon" :name="'letstalk'" />
      </a>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'HelloComp',
  components: { SvgIcon },
};
</script>

<style lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  width: 745px;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    width: 100%;
  }
  &__span {
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
  &__heading {
    &-h1 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 64px;
      line-height: 72px;
      font-weight: 400;

      margin: 0;

      color: #ffffff;

      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
      }
    }
  }
  &__text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;

    color: #ffffff;
  }
  &__contact {
    display: flex;
    column-gap: 16px;
    &-text {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 32px;
      line-height: 42px;
      font-weight: 500;

      color: #12f7d6;
    }
    &-icon {
      width: 40px;
      height: 40px;

      cursor: pointer;
    }
  }
}
</style>