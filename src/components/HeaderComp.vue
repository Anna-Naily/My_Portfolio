<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <router-link class="header__logo-link" to="/">
          <LogoComp />
        </router-link>
      </div>
      <div class="header__menu">
        <MenuComp
          @goDocuments="this.$emit('goDocuments')"
          @goWorks="this.$emit('goWorks')"
          @goContacts="this.$emit('goContacts')"
          @goAboutMe="this.$emit('goAboutMe')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LogoComp from './LogoComp.vue';
import MenuComp from './MenuComp.vue';

export default {
  name: 'HeaderComp',
  components: { LogoComp, MenuComp },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 55;
  top: 0;
  right: 0;
  left: 0;
  flex-shrink: 0;

  background-color: #292f36;
  border-bottom: 1px solid transparent;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1460px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 24px;
    padding-bottom: 24px;

    border-bottom: 1px solid #43454d;
    @media (min-width: 1280px) and (max-width: 1919px) {
      max-width: 1024px;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      max-width: 704px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    @media (min-width: 375px) and (max-width: 767px) {
      max-width: 342px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    @media (min-width: 320px) and (max-width: 374px) {
      max-width: 320px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
  &__logo {
    &-link {
      text-decoration: none;
    }
  }
}
</style>