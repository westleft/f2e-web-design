<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
const modules = [Mousewheel]

import FrontPage from "@/views/FrontPage.vue";
import PainPoints from "@/views/PainPoints.vue";
import IntroducePage from "@/views/IntroducePage.vue";
import ThemePage from "@/views/ThemePage.vue";
import InstructionsPage from "@/views/InstructionsPage.vue";
import BonusPage from "@/views/BonusPage.vue";

import { onMounted, provide, ref } from "vue";
import type { Ref } from "vue";

const components = [
  // { idx: 1, comp: FrontPage },
  // { idx: 2, comp: PainPoints },
  // { idx: 3, comp: IntroducePage },
  // { idx: 4, comp: ThemePage },
  // { idx: 5, comp: InstructionsPage },
  { idx: 6, comp: BonusPage }

];
  
onMounted(() => {
  // window.scrollTop = 100
})

</script>

<template>
  <!-- <FrontPage />
  <PainPoints />
  <IntroducePage />
  <ThemePage />
  <InstructionsPage />
  <BonusPage /> -->
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
    class="mySwiper"
  >
    <swiper-slide v-for="item in components" :key="item.idx">
      <component :is="item.comp"></component>
    </swiper-slide>
  </swiper>
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

</style>