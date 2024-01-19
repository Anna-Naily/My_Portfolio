<template>
  <div class="cases">
    <a class="cases__link" href="https://pokemons-mocha.vercel.app/">
      <div class="image-parlax" ontouchstart="this.classList.toggle('hover');">
        <div class="image-container">
          <div class="front-side front-side--1">
            <div class="inner">
              <p>Pokemon's API</p>
            </div>
          </div>
          <div class="back-side">
            <div class="inner">
              <p>Работа с API Покемонов. Отрисовка покемона, его характеристика, визуал и способность</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cases__link" href="https://anna-naily.github.io/ResponsiveLayout/">
      <div class="image-parlax" ontouchstart="this.classList.toggle('hover');">
        <div class="image-container">
          <div class="front-side front-side--2">
            <div class="inner"></div>
          </div>
          <div class="back-side">
            <div class="inner">
              <p>Респонсивная верстка интернет-магазина</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cases__link" href="https://auto-calculator.vercel.app/">
      <div class="image-parlax" ontouchstart="this.classList.toggle('hover');">
        <div class="image-container">
          <div class="front-side front-side--3">
            <div class="inner"></div>
          </div>
          <div class="back-side">
            <div class="inner">
              <p>Калькулятор расчета стоимости автомобиля в лизинг (Адаптив + VueJS)</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CasesComp',
};
</script>

<style lang="scss">
.cases {
  display: flex;
  justify-content: space-around;

  @media (min-width: 320px) and (max-width: 1279px) {
    flex-wrap: wrap;
    row-gap: 30px;
  }
}

// circles
.image-parlax {
  width: 300px;

  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 1279px) {
    width: 200px;
  }
}
.image-container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}
.front-side {
  &--1 {
    background-image: url('../assets/img/poke.png');
  }
  &--2 {
    background-image: url('../assets/img/first-project.png');
  }
  &--3 {
    background-image: url('../assets/img/calculator.png');
  }
}
.front-side,
.back-side {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;

  background-size: cover;
  background-position: center;
  min-height: 300px; /* Высота изображения */
  height: auto;
  border-radius: 50%; /* Скругление углов */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #fff;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  @media (min-width: 320px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 18px;
    min-height: 200px;
  }
  @media (min-width: 320px) and (max-width: 374px) {
  }
}
.back-side {
  background: #343434;
  background: -webkit-linear-gradient(45deg, #343434 0%, #000000 100%);
  background: -o-linear-gradient(45deg, #343434 0%, #000000 100%);
  background: linear-gradient(45deg, #343434 0%, #000000 100%);
}
.front-side:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  opacity: 0.6;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50%; /* Скругление углов */
}
.image-container:hover .front-side,
.image-container:hover .back-side {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.back-side {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}
.image-container .back-side {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.image-container .front-side {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.image-container:hover .back-side {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.image-container:hover .front-side {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.front-side .inner p {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;

  margin-bottom: 2rem;
  position: relative;
  @media (min-width: 320px) and (max-width: 1279px) {
    font-size: 16px;
    line-height: 20px;
  }
}
.front-side .inner p:after {
  content: '';
  width: 4rem;
  height: 1px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.75rem;
}
.front-side .inner span {
  color: rgba(255, 255, 255, 0.7);
}
</style>