<script setup lang="ts">
import { useIntersectionObserver } from "@/composables/observer";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";

const { createObserver } = useIntersectionObserver();

const showAnimation: Ref<Boolean> = ref(false);
const pageDOM: Ref = ref();

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const callback = (entries: IntersectionObserverEntry[]): void => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showAnimation.value = true;
    }
  });
};

onMounted(() => {
  const observer = createObserver(callback, options);
  observer.observe(pageDOM.value);
});
</script>

<template>
  <div id="introduce-page" ref="pageDOM">
    <div class="page-fake-bar"></div>
    <div class="page-bar">
      <div
        :class="['page-bar-container', { 'scroll-to-left': showAnimation }]"
        v-for="i in 8"
        :key="i"
      >
        <div class="page-bar-circle"></div>
        <p class="page-bar-text">Monument Extended</p>
      </div>
    </div>

    <div class="page-main-content">
      <div class="main-text-box">
        <img
          :class="['main-img', { 'main-img-animation': showAnimation }]"
          src="@/assets/images/introduce/title_img.png"
          alt="主標題圖片"
        />
        <!-- <h2 :class="['main-title', { 'main-title-animation': showAnimation }]">互動式<br /> 網頁設計</h2> -->
      </div>
      <p :class="['sub-text', { 'sub-text-animation': showAnimation }]">
        前端工程師 <span>✕</span> UI設計師
      </p>
      <img
        :class="['main-img-left-hand', { 'left-hand-animation': showAnimation }]"
        src="@/assets/images/introduce/left_hand.png"
        alt="左手圖"
      />

      <img
        :class="['main-img-right-hand',{ 'right-hand-animation': showAnimation }]"
        src="@/assets/images/introduce/right_hand.png"
        alt="右手圖"
      />

      <img
        :class="['main-img-purple-coin',{ 'pruple-coin-animation': showAnimation }]"
        src="@/assets/images/introduce/purple_coin.png"
        alt="紫色硬幣圖"
      />
      <img
        :class="['img-yellow-coin', { 'yellow-coin-animation': showAnimation }]"
        src="@/assets/images/introduce/yellow_coin.png"
        alt="黃色硬幣圖"
      />
    </div>

    <div class="page-bar">
      <div
        :class="['page-bar-container', { 'scroll-to-right': showAnimation }]"
        v-for="i in 8"
        :key="i"
      >
        <div class="page-bar-circle"></div>
        <p class="page-bar-text">Monument Extended</p>
      </div>
    </div>
    <div class="page-fake-bar"></div>
  </div>
</template>

<style lang="scss" scoped>
#introduce-page {
  @include size(100vh, 100vw);
  @include flex();
  background-color: $color-bg;

  overflow-x: hidden;
  flex-direction: column;
  > .page-bar {
    @include flex();
    z-index: 2;
    width: 100%;
    padding: 1% 0;
    background: linear-gradient(90deg, #9da4ff 0%, #55ffad 100%);
    > .page-bar-container {
      @include flex();
      transition: 2.5s ease-in-out;
      > .page-bar-circle {
        @include flex(center, flex-start);
        @include size(20px, 20px);
        background-color: #fff;
        border-radius: 100%;
      }
      > .page-bar-text {
        font-family: Monument Extended;
        white-space: nowrap;
        font-size: 2.4vw;
        color: #fff;
        padding: 0 4vw;
      }

      &.scroll-to-left {
        transform: translateX(-200%);
      }

      &.scroll-to-right {
        transform: translateX(200%);
      }
    }
  }

  > .page-fake-bar {
    background-color: $color-bg;
    width: 100%;
    padding: 4vh 0;
    z-index: 2;
  }

  > .page-main-content {
    @include flex(center, space-around);
    @include size(84vh, 100%);
    position: relative;
    flex-direction: column;
    background-color: #fff;
    background-image: linear-gradient(#c4c8ffa6 1px, transparent 0),
      linear-gradient(90deg, #c4c8ffa6 1px, transparent 0);
    background-size: 40px 40px, 40px 40px;
    > .main-text-box {
      position: relative;

      > .main-img {
        width: 28vw;
      }
      > .main-title {
        @include translateCenter();
        position: absolute;
        font-family: Noto Sans CJK;
        font-size: 4vw;
        text-align: center;
        color: #000;
        font-weight: 700;
        line-height: 140%;
        white-space: nowrap;
      }
    }

    > .sub-text {
      @include flex();
      position: absolute;
      bottom: 8vh;
      font-family: Noto Sans CJK;
      font-size: 1.2vw;
      color: #000;
      > span {
        font-size: 0.8vw;
        font-weight: 700;
        padding: 0 0.8vw;
      }
    }

    > .main-img-right-hand {
      position: absolute;
      width: 16vw;
      right: 24%;
    }
    > .main-img-left-hand {
      position: absolute;
      width: 16vw;
      left: 24%;
    }
    > .main-img-purple-coin {
      position: absolute;
      width: 6vw;
      top: 0vh;
      right: 32vw;
      z-index: 1;
    }
    > .img-yellow-coin {
      position: absolute;
      width: 14vw;
      bottom: -8vh;
      left: 20%;
      z-index: 1;
    }
  }
}

.main-img-animation {
  animation: 2s ease-in-out main-img-animation;
}

.main-title-animation {
  animation: 2s ease-in-out main-title-animation;
}

.sub-text-animation {
  animation: 2s ease-in-out sub-text-animation;
}

.right-hand-animation {
  animation: 2s ease-in-out right-hand-animation;
}

.left-hand-animation {
  animation: 2s ease-in-out left-hand-animation;
}

.pruple-coin-animation {
  animation: 2s ease-in-out purple-coin-animation;
}

.yellow-coin-animation {
  animation: 2s ease-in-out yellow-coin-animation;
}

@keyframes main-img-animation {
  0% {
    opacity: 0;
    width: 0vw;
  }
  100% {
    opacity: 1;
    width: 28vw;
  }
}

@keyframes main-title-animation {
  0% {
    opacity: 0;
    font-size: 0vw;
  }
  100% {
    opacity: 1;
    font-size: 4vw;
  }
}

@keyframes sub-text-animation {
  0% {
    opacity: 0;
    font-size: 0vw;
  }
  100% {
    opacity: 1;
    font-size: 1.2vw;
  }
}

@keyframes right-hand-animation {
  0% {
    transform: rotate(-20deg);
    opacity: 0;
    right: 40%;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
    right: 24%;
  }
}

@keyframes left-hand-animation {
  0% {
    transform: rotate(20deg);
    opacity: 0;
    left: 40%;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
    left: 24%;
  }
}

@keyframes purple-coin-animation {
  0% {
    transform: rotate(120deg);
    top: -12vh;
    right: 28vw;
  }
  100% {
    transform: rotate(0);
    top: 0vh;
    right: 32vw;
  }
}

@keyframes yellow-coin-animation {
  0% {
    transform: rotate(-120deg);
    bottom: -28vh;
    left: 4%;
  }
  100% {
    transform: rotate(0);
    bottom: -8vh;
    left: 20%;
  }
}
</style>