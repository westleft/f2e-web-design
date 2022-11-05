<script setup lang="ts">
import { onMounted } from "vue";
import { useIntersectionObserver } from "@/composables/observer";
const { showAnimation, pageDOM, createObserver } = useIntersectionObserver();

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const activeCallback = () => {
  showAnimation.value = true;
};

onMounted(() => {
  const observer = createObserver(options, activeCallback);
  observer.observe(pageDOM.value);
});
</script>

<template>
  <div id="paint-points" ref="pageDOM">
    <Transition name="bounce">
      <section v-show="showAnimation" class="chat-section">
        <img class="chat-img img-p2" src="@/assets/images/pain/p2.png" alt="icon" />
        <img class="chat-img img-boom" src="@/assets/images/pain/p7.png" alt="icon" />
        <img class="chat-img img-question" src="@/assets/images/pain/p1.png" alt="icon" />
        <div class="chat-container">
          <img class="chat-container-img" src="@/assets/images/pain/chat1.png" alt="對話窗圖片" />
          <p class="chat-container-text">羨慕別人的酷酷網頁動畫？</p>
        </div>
      </section>
    </Transition>
    <Transition name="bounce2">
      <section v-show="showAnimation" class="chat-section">
        <img class="chat-img img-circle" src="@/assets/images/pain/p8.png" alt="" />
        <img class="chat-img img-exclamation" src="@/assets/images/pain/p3.png" alt="" />
        <div class="chat-container">
          <img class="chat-container-img" src="@/assets/images/pain/chat2.png" alt="對話窗圖片" />
          <p class="chat-container-text chat-green">滿足不了同事的許願？</p>
        </div>
      </section>
    </Transition>
    <Transition name="bounce3">
      <section v-show="showAnimation" class="chat-section">
        <img class="chat-img img-p5" src="@/assets/images/pain/p5.png" alt="icon" />
        <img class="chat-img img-rect" src="@/assets/images/pain/p6.png" alt="icon" />
        <img class="chat-img img-mouse" src="@/assets/images/pain/p4.png" alt="icon" />
        <div class="chat-container">
          <img class="chat-container-img" src="@/assets/images/pain/chat1.png" alt="對話窗圖片" />
          <p class="chat-container-text">動畫技能樹太雜無從下手？</p>
        </div>
      </section>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
#paint-points {
  @include flex(center, space-around);
  @include size(100vh, 100vw);
  background-color: $color-bg;
  padding: 8% 24%;
  flex-direction: column;
  box-sizing: border-box;
  > .chat-section {
    @include flex(center, flex-start);
    width: 100%;
    height: 20vh;
    position: relative;
    &:nth-child(1) {
      padding-top: 4%;
    }
    &:nth-child(2) {
      @include flex(center, flex-end);
      padding-bottom: 20%;
    }
    &:nth-child(3) {
      padding-top: 10%;
    }
    > .chat-img {
      position: absolute;
      &.img-p2 {
        width: 14vw;
        top: -16vh;
        left: 4vw;
      }
      &.img-boom {
        width: 3vw;
        left: 48vh;
        top: -12vh;
      }
      &.img-question {
        width: 10vw;
        right: 12vw;
        top: -8vh;
      }
      &.img-exclamation {
        width: 12vw;
        left: -4vw;
        top: 6vh;
      }
      &.img-circle {
        width: 2vw;
        top: 4vh;
        left: 16vw;
      }
      &.img-rect {
        width: 8vw;
        right: 4vw;
        top: -12vh;
      }
      &.img-mouse {
        width: 12vw;
        right: 0;
      }
      &.img-p5 {
        width: 16vw;
        top: -5vw;
        left: 20vw;
      }
    }
    > .chat-container {
      position: relative;
      display: inline-block;
      > .chat-container-img {
        width: 28vw;
      }
      > .chat-container-text {
        // @include translateCenter();
        font-family: Noto Sans TC;
        position: absolute;
        top: 28%;
        left: 50%;
        transform: rotate(-4deg) translate(-50%, -50%);
        color: #000;
        white-space: nowrap;
        font-size: 2vw;
      }
      .chat-green {
        top: 36%;
        left: 52%;
        transform: rotate(-12deg) translate(-50%, -50%);
      }
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 1s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.bounce2-enter-active {
  animation: bounce-in 1.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  75% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.bounce3-enter-active {
  animation: bounce-in 2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>