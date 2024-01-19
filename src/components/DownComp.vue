<template>
  <div class="down">
    <img src="../assets/img/mouse.png" alt class="down__mouse" />
    <div class="arrow-7">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownComp',
};
</script>

<style lang="scss">
.down {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
  &__mouse {
    width: 32px;
    height: 44px;
    margin-left: auto;
    margin-right: auto;
  }
}
.arrow-7 {
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}
.arrow-7 span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #98faec;
  border-right: 5px solid #98faec;
  transform: rotate(45deg);
  margin: -16px 0;
  animation: arrow-7 2s infinite;
}
.arrow-7 span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-7 span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-7 {
  0% {
    opacity: 0;
    transform: translate(0, -20px) rotate(45deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(0, 20px) rotate(45deg);
  }
}
</style>