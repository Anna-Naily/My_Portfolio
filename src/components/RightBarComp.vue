<template>
  <div class="rightbar">
    <div class="rightbar__wrapper">
      <ul class="rightbar__contacts">
        <li class="rightbar__contacts-item">
          <a class="rightbar__contacts-link" href="https://github.com/Anna-Naily">
            <SvgIcon :name="'github'" />
          </a>
        </li>
        <li class="rightbar__contacts-item">
          <a class="rightbar__contacts-link" href="https://t.me/MsNaily">
            <SvgIcon :name="'telegram'" />
          </a>
        </li>
        <li class="rightbar__contacts-item">
          <a class="rightbar__contacts-link" href="mailto:zareth2_@mail.ru">
            <SvgIcon :name="'mailIcon'" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  components: { SvgIcon },
  name: 'RightBarComp',
};
</script>

<style lang="scss">
.rightbar {
  &__wrapper {
    background-color: #1a1e23;
    border-radius: 80px;
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    row-gap: 48px;

    padding: 48px 32px;

    @media (min-width: 768px) and (max-width: 1279px) {
      flex-direction: row;
      column-gap: 48px;
      margin-top: 64px;
      padding: 32px 24px;
    }
    @media (min-width: 375px) and (max-width: 767px) {
      flex-direction: row;
      column-gap: 48px;
      padding: 32px 24px;
    }
    &-item,
    &-link {
      width: 50px;
      height: 50px;

      list-style-type: none;

      color: #12f7d6;

      cursor: pointer;

      transition: 0.3s;

      &:hover {
        color: #16b9a1;
      }
    }
  }
}
</style>