<template>
  <div class="heading">
    <h3 class="heading__h3">{{title}}</h3>
    <SvgIcon class="heading__border" :name="'border'" />
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  components: { SvgIcon },
  name: 'HeadingComp',
  props: {
    title: {
      typeof: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 64px;
  padding-bottom: 64px;
  &__h3 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 64px;
    line-height: 72px;
    font-weight: 400;

    margin: 0;

    color: #12f7d6;
    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 40px;
      line-height: 46px;
    }
  }
  &__border {
    margin-top: 10px;
    width: fit-content;
    height: 9px;
    color: #12f7d6;
  }
}
</style>