<template>
  <div class="logo">
    <span class="logo__text logo__text--green">&lt;C/&gt;</span>
    <span class="logo__text">AnnaUmanskaya</span>
  </div>
</template>

<script>
export default {
  name: 'LogoComp',
};
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;

  &__text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 32px;
    line-height: 42px;
    font-weight: 500;

    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(#0000, 0.25);

    @media (min-width: 768px) and (max-width: 1279px) {
      display: none;
      font-size: 24px;
      line-height: 32px;
    }
    @media (min-width: 375px) and (max-width: 767px) {
      display: none;
      font-size: 16px;
      line-height: 20px;
    }
    &--green {
      color: #12f7d6;

      @media (min-width: 375px) and (max-width: 1279px) {
        display: block;
      }
    }
  }
}
</style>