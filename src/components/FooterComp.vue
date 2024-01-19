<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__copy">&COPY;&ensp;2023 AnnaUmanskaya All rights reserved.</div>
        <div class="footer__contacts">
          <a href="https://t.me/MsNaily" class="footer__contacts-link">
            <SvgIcon class="footer__icon" :name="'telegram'" />
          </a>
          <a href="https://github.com/Anna-Naily" class="footer__contacts-link">
            <SvgIcon class="footer__icon" :name="'github'" />
          </a>
          <a href="mailto:zareth2_@mail.ru" class="footer__contacts-link">
            <SvgIcon class="footer__icon" :name="'mail'" />
          </a>
        </div>
        <div class="footer__design">
          Design By
          JohannLeon
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  components: { SvgIcon },
  name: 'FooterComp',
};
</script>

<style lang="scss">
.footer {
  font-family: 'Ubuntu';

  border-top: 1px solid #43454d;
  background-color: #1a1e23;
  &__container {
    max-width: 1460px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1280px) and (max-width: 1919px) {
      max-width: 1024px;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      max-width: 704px;
    }
    @media (min-width: 390px) and (max-width: 767px) {
      max-width: 342px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    padding: 23px 0 23px 0;
    @media (min-width: 1280px) and (max-width: 1919px) {
    }

    @media (min-width: 390px) and (max-width: 1279px) {
      flex-direction: column;
      row-gap: 24px;
    }
  }
  &__icon {
    color: #98faec;
    width: 32px;
    height: 32px;

    transition: 0.3s;
    &:hover {
      color: rgb(2, 236, 201);
    }
  }
  &__copy,
  &__design {
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;

    color: #fff;

    order: 0;
    @media (min-width: 390px) and (max-width: 1279px) {
      order: 1;
    }
  }
  &__contacts {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
  }
}
</style>
