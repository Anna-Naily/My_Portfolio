<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="100"
    navigation
    :pagination="{ clickable: true }"
    :loop="true"
    :grabCursor="true"
    class="swiper"
    :class="swiperMode == 'certificate' ? 'certificate__swiper' : ''"
  >
    <swiper-slide class="swiper__slide" v-for="slide in slides" :key="slide.index">
      <img
        :style="style"
        :class="swiperMode == 'certificate' ? 'certificate__img ' : ''"
        :src="require(`../assets/img/${slide.img}.png`)"
        class="swiper__slide-img"
        alt
      />
    </swiper-slide>
  </swiper>
</template>

  <script>
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// import { ref } from 'vue';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: Array,
    swiperMode: String,
  },
  setup() {
    return { modules: [Navigation, Pagination] };
  },
};
</script>

<style lang="scss">
.swiper {
  width: 1100px;
  padding-top: 64px;
  padding-bottom: 64px;
  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 900px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 700px;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: 360px;
    margin-left: -10px;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    width: 340px;
    margin-left: -10px;
  }
  &__slide {
    display: flex;
    justify-content: center;
    &-img {
      width: 900px;
      @media (min-width: 1280px) and (max-width: 1919px) {
        width: 700px;
      }
      @media (min-width: 768px) and (max-width: 1279px) {
        width: 600px;
      }
      @media (min-width: 375px) and (max-width: 767px) {
        width: 280px;
      }
      @media (min-width: 320px) and (max-width: 374px) {
        width: 260px;
      }
    }
  }
}
.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 30px;
}
:root {
  --swiper-navigation-color: #3949ab;
  --swiper-pagination-color: #3949ab;
}
</style>

  