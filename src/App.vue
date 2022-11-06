<script setup lang="ts">
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper";
import { provide, ref } from "vue";
import type { Ref } from "vue";

import FrontPage from "@/views/FrontPage.vue";
import PainPoints from "@/views/PainPoints.vue";
import IntroducePage from "@/views/IntroducePage.vue";
import ThemePage from "@/views/ThemePage.vue";
import InstructionsPage from "@/views/InstructionsPage.vue";
import BonusPage from "@/views/BonusPage.vue";
import QuestionPage from "@/views/QuestionPage.vue";

const modules = [Mousewheel];

// 決定是否顯示 slider
const hideSlide = ref(false);
provide("hideSlide", hideSlide);

const components = [
  { idx: 1, comp: FrontPage },
  { idx: 2, comp: PainPoints },
  { idx: 3, comp: IntroducePage },
  { idx: 4, comp: ThemePage },
  { idx: 5, comp: InstructionsPage },
  { idx: 6, comp: BonusPage },
];
</script>

<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="0"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :speed="1500"
    :modules="modules"
    :class="['mySwiper', { move: hideSlide }]"
  >
    <swiper-slide v-for="item in components" :key="item.idx">
      <component :is="item.comp"></component>
    </swiper-slide>
  </swiper>
  <QuestionPage />
</template>

<style lang="scss">
html {
  ::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
}

#app {
  height: 100%;
  background-color: $color-bg;
}

html,
body {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.swiper {
  width: 100%;
  height: 100%;
}

.mySwiper {
  transition: 1.5s !important;
  position: fixed;
  top: 0;
  left: 0;
}
.move {
  transform: translateY(-100vh);
}
</style>