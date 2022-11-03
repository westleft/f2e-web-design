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
        <img class="chat-img img-boom" src="@/assets/images/pain/boom.png" alt="" />
        <img
          class="chat-img img-question"
          src="@/assets/images/pain/question.png"
          alt=""
        />
        <div class="chat-container">
          <img
            class="chat-container-img"
            src="@/assets/images/pain/chat1.png"
            alt="對話窗圖片"
          />
          <p class="chat-container-text">羨慕別人的酷酷網頁動畫？</p>
        </div>
      </section>
    </Transition>
    <Transition name="bounce2">
      <section v-show="showAnimation" class="chat-section">
        <img
          class="chat-img img-circle"
          src="@/assets/images/pain/circle.png"
          alt=""
        />
        <img
          class="chat-img img-exclamation"
          src="@/assets/images/pain/exclamation.png"
          alt=""
        />

        <div class="chat-container">
          <img
            class="chat-container-img"
            src="@/assets/images/pain/chat2.png"
            alt="對話窗圖片"
          />
          <p class="chat-container-text chat-green">滿足不了同事的許願？</p>
        </div>
      </section>
    </Transition>
    <Transition name="bounce3">
      <section v-show="showAnimation" class="chat-section">
        <img
          class="chat-img img-rect"
          src="@/assets/images/pain/rect.png"
          alt=""
        />
        <img
          class="chat-img img-mouse"
          src="@/assets/images/pain/mouse.png"
          alt=""
        />
        <div class="chat-container">
          <img
            class="chat-container-img"
            src="@/assets/images/pain/chat1.png"
            alt="對話窗圖片"
          />
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
  padding: 8% 20%;
  flex-direction: column;
  box-sizing: border-box;
  > .chat-section {
    @include flex(center, flex-start);
    width: 100%;
    height: 20vh;
    position: relative;
    &:nth-child(2) {
      @include flex(center, flex-end);
      padding-bottom: 20%;
    }
    > .chat-img {
      position: absolute;
      &.img-boom {
        right: 50vh;
        top: -12vh;
      }
      &.img-question {
        right: 12vw;
        top: 0;
      }
      &.img-exclamation {
        left: 4vw;
        top: 6vh;
      }
      &.img-circle {
        top: 4vh;
        left: 20vw;
      }
      &.img-rect {
        right: 4vw;
        top: -12vh;
      }
      &.img-mouse {
        right: 0;
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