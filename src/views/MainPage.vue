<template>
  <div>
    <HeaderComp />
    <main class="main">
      <section class="main__welcome" id="contacts">
        <div class="main--container">
          <h1 class="main__welcome-h1">Developer</h1>
          <div class="main__welcome-information">
            <LeftBarComp />
            <HelloComp />
            <RightBarComp />
          </div>
        </div>
      </section>
      <section class="main__aboutme" id="aboutme">
        <div class="main--container">
          <div class="main__aboutme-content">
            <DownComp />
            <AboutMeComp class="main__aboutme-item" />
          </div>
        </div>
      </section>
      <section class="main__skills">
        <div class="main--container">
          <div class="main__skills-content">
            <div class="main__skills-header">
              <div></div>
              <DownComp />
              <span class="main__skills-header--span">&lt;/&gt;</span>
            </div>
            <HeadingComp :title="'Skills'" />
            <SkillsComp />
          </div>
        </div>
      </section>
      <section class="main__works" id="works">
        <div class="main--container">
          <div class="main__works-content">
            <DownComp />
            <HeadingComp :title="'Работы'" />
            <WorksComp />
          </div>
        </div>
      </section>
      <section class="main__cases">
        <div class="main--container">
          <div class="main__cases-content">
            <HeadingComp :title="'Кейсы'" />
            <CasesComp />
          </div>
        </div>
      </section>
      <section class="main__certificate" id="documents">
        <div class="main--container">
          <div class="main__certificate-content">
            <HeadingComp :title="'Документы'" />
            <CertificateComp />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HelloComp from '@/components/HelloComp.vue';
import LeftBarComp from '@/components/LeftBarComp.vue';
import RightBarComp from '@/components/RightBarComp.vue';
import AboutMeComp from '@/components/AboutMeComp.vue';
import DownComp from '@/components/DownComp.vue';
import HeadingComp from '@/components/HeadingComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import WorksComp from '@/components/WorksComp.vue';
import CasesComp from '@/components/CasesComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import CertificateComp from '@/components/CertificateComp.vue';

export default {
  name: 'MainPage',
  components: {
    LeftBarComp,
    HelloComp,
    RightBarComp,
    AboutMeComp,
    DownComp,
    HeadingComp,
    SkillsComp,
    WorksComp,
    CasesComp,
    HeaderComp,
    CertificateComp,
  },
};
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;

  width: 100%;

  &--container {
    max-width: 1460px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1280px) and (max-width: 1919px) {
      max-width: 1024px;
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      max-width: 704px;
    }
    @media (min-width: 375px) and (max-width: 767px) {
      max-width: 342px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      max-width: 320px;
    }
  }
  &__welcome {
    background-color: #292f36;
    padding-top: 64px;
    margin-top: 130px;

    @media (min-width: 768px) and (max-width: 1279px) {
      padding-top: 0px;
      margin-top: 78px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      padding-top: 0px;
      margin-top: 78px;
    }
    &-h1 {
      font-family: 'Ubuntu';
      font-size: 117px;
      line-height: 134px;
      font-weight: 400;

      margin: 0;

      text-align: center;
      color: #98faec;

      @media (min-width: 320px) and (max-width: 1279px) {
        display: none;
      }
    }
    &-information {
      display: flex;
      justify-content: space-around;
      column-gap: 128px;
      align-items: center;

      padding-top: 64px;
      padding-bottom: 128px;
      @media (min-width: 1280px) and (max-width: 1919px) {
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        flex-direction: column;
        padding-bottom: 64px;
      }
      @media (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        row-gap: 64px;
        padding-bottom: 64px;
      }
    }
  }
  &__aboutme {
    background-image: url('../assets/img/aboutme.png');
    background-size: cover;
    &-item {
      margin-top: 128px;
      @media (min-width: 320px) and (max-width: 1279px) {
        margin-top: 0;
      }
    }
    &-content {
      padding-top: 128px;
      padding-bottom: 128px;

      @media (min-width: 320px) and (max-width: 1279px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
    }
  }
  &__skills {
    background-image: url('../assets/img/skills.png');
    background-size: cover;
    &-content {
      padding-top: 128px;
      padding-bottom: 128px;
      @media (min-width: 320px) and (max-width: 1279px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
    }
    &-header {
      display: flex;
      position: relative;
      margin: 0;
      padding: 0;
      &--span {
        font-family: 'Ubuntu', sans-serif;
        font-size: 150px;
        line-height: 72px;
        font-weight: 400;

        position: absolute;
        right: 70px;

        color: #12f7d6;
        @media (min-width: 320px) and (max-width: 1279px) {
          display: none;
        }
      }
    }
  }
  &__works {
    background-image: url('../assets/img/Works.png');
    &-content {
      padding-top: 128px;
      padding-bottom: 128px;
      @media (min-width: 320px) and (max-width: 1279px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
    }
  }
  &__cases {
    background-color: #292f36;
    &-content {
      padding-bottom: 128px;
      @media (min-width: 320px) and (max-width: 1279px) {
        padding-bottom: 64px;
      }
    }
  }
  &__certificate {
    background-color: #1a1e23;
    &-content {
      padding-bottom: 128px;
      @media (min-width: 320px) and (max-width: 1279px) {
        padding-bottom: 64px;
      }
    }
  }
}
</style>