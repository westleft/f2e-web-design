<script setup lang="ts">
import Sponsors from "@/components/Sponsors.vue";
import questions from "@/assets/data/questions.json";
import { inject, ref } from "vue";
import type { Ref } from "vue";

const qaData: { [index: string]: any } = questions;

const hideSlide = inject("hideSlide") as Ref<boolean>;

const dataType: Ref<string> = ref("common");

const listArr = [
  { type: "common", text: "常見問題" },
  { type: "ui", text: "UI 設計師常見問題" },
  { type: "frontend", text: "前端工程師常見問題" },
  { type: "group", text: "團體組常見問題" },
];

window.addEventListener("mousewheel", (event: any) => {
  if (window.scrollY === 0 && event.wheelDelta > 0) {
    hideSlide.value = false;
  }
});

const chanheType = (type: string) => {
  dataType.value = type;
};
</script>

<template>
  <div id="qa-page">
    <h2 class="qa-title">Q&A</h2>

    <ul class="qa-list">
      <li class="qa-list-item" v-for="item in listArr" :key="item.type">
        <p
          @click="chanheType(item.type)"
          :class="['list-text', { active: item.type === dataType }]"
        >
          {{ item.text }}
        </p>
      </li>
    </ul>

    <TransitionGroup tag="div" name="list" class="qa-container">
      <div class="qa-inner" v-for="(item, index) in qaData[dataType]" :key="item">
        <h3 class="qa-h3-title">Q{{ index + 1 }}</h3>
        <div class="qa-text-box">
          <h3 class="qa-h3-title">{{ item.title }}</h3>
          <p class="qa-text">{{ item.text }}</p>
        </div>
      </div>
    </TransitionGroup>

    <button class="qa-btn">立即報名</button>
    <Sponsors />
  </div>
</template>

<style lang="scss" scoped>
#qa-page {
  @include flex();
  width: 100vw;
  flex-direction: column;
  background-color: $color-bg;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4% 24% 0 24%;
  > .qa-title {
    font-family: "Monument Extended";
    font-size: 2vw;
    font-weight: 700;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    color: #fff;
    letter-spacing: 0.4vw;
  }
}

.qa-list {
  @include flex(flex-start, center);
  padding: 4% 0;
  > .qa-list-item {
    padding: 0 1vw;
    > .list-text {
      @include flex(flex-start, center);
      flex-direction: column;
      font-family: "Noto Sans CJK";
      color: #858993;
      font-size: 0.8vw;
      letter-spacing: 0.1vw;
      cursor: pointer;
      &.active {
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
        color: #fff;
        &::after {
          @include size(4px, 12px);
          content: "";
          background-color: #55ffad;
          border-radius: 8px;
          margin: 12px auto 0;
        }
      }
    }
  }
}

.qa-container {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 8%;
  border-radius: 20px;
  > .qa-inner {
    @include flex(flex-start, flex-start);
    width: 100%;
    margin-bottom: 8%;
    .qa-h3-title {
      font-family: Monument Extended;
      color: #6e77e9;
      font-size: 1.2vw;
      font-weight: 700;
      padding-right: 2vw;
      line-height: 140%;
    }
    > .qa-text-box {
      @include flex(flex-start, flex-start);
      flex-direction: column;
      > .qa-h3-title {
        color: #06102b;
        padding-bottom: 2%;
        font-weight: 700;
      }

      > .qa-text {
        font-family: "Noto Sans CJK";
        font-size: 1vw;
        color: #06102b;
        line-height: 140%;
      }
    }
  }
}

.qa-btn {
  font-family: Noto Sans TC;
  background: #ffe34e;
  color: #000000;
  border-radius: 40px;
  padding: 2vh 2.8vw;
  border: none;
  font-size: 1vw;
  margin-top: 12%;
  cursor: pointer;
  font-weight: 700;
  transition: 0.5s;
  margin-bottom: 8%;
  &:hover {
    background: #fff385;
    box-shadow: 0px 0px 10px rgba(255, 243, 133, 0.6);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  // transform: translateX(30px);
}
</style>