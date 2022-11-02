<script setup lang="ts">
import FrontPage from "@/views/FrontPage.vue";
import PainPoints from "@/views/PainPoints.vue";
import IntroducePage from "@/views/IntroducePage.vue";
import ThemePage from "@/views/ThemePage.vue";

import { onMounted, ref } from "vue";
import type { Ref } from "vue";

const components = [
  { comp: FrontPage, idx: 0 },
  { comp: PainPoints, idx: 1 },
];

const currentView: Ref<number> = ref(0);





// window.addEventListener("scroll", () => {
//   console.log(event);
// });


</script>

<template>
  <FrontPage />
  <PainPoints />
  <IntroducePage />
  <ThemePage />
</template>

<style lang="scss">
html {
  ::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
}
</style>