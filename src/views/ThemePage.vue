<script setup lang="ts">
import { useIntersectionObserver } from "@/composables/observer";
import { onMounted, reactive, ref } from "vue";
import type { Ref } from "vue";
import { rejects } from "assert";

const showCard2: Ref<boolean> = ref(false);
const showCard3: Ref<boolean> = ref(false);

const { showAnimation, pageDOM, createObserver } = useIntersectionObserver();

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

const activeCallback = () => {
  showAnimation.value = true;
  createTimer(600, showCard2);
  createTimer(1200, showCard3);
};

onMounted(() => {
  const observer = createObserver(options, activeCallback);
  observer.observe(pageDOM.value);
});

const createTimer = (time: number, showValue: Ref<boolean>) => {
    let timer = setTimeout(() => {
      showValue.value = true
      clearTimeout(timer)
    }, time)
}
</script>

<template>
  <div id="theme-page" ref="pageDOM">
    <!-- <button @click="flip = true">test</button> -->
    <h2 class="theme-title">年度最強合作 三大主題來襲</h2>
    <p class="theme-text">
      各路廠商強強聯手<br />
      共同設計出接地氣的網頁互動挑戰關卡
    </p>

    <div class="theme-cards">
      <div :class="['card','card1', { 'flip-card': showAnimation }]">
        <div class="front-card">
          <p class="card-text">Week 1</p>
          <img
            class="card-img"
            src="@/assets/images/theme/locked.png"
            alt="鎖頭圖"
          />
        </div>

        <div v-if="showAnimation" class="back-card">
          <p class="back-card-tag"># 板塊設計</p>
          <h3 class="back-card-title">The F2E 活動網站設計</h3>
          <p class="back-card-theme">視覺滾動</p>
          <img
            class="back-card-img"
            src="@/assets/images/theme/theme_card1.png"
            alt=""
          />
          <div class="back-card-container">
            <p class="back-card-text-week">Week 1</p>
            <p class="back-card-text-detail">查看關卡細節</p>
          </div>
        </div>
      </div>
      <div :class="['card', { 'flip-card': showCard2 }]">
        <div class="front-card">
          <p class="card-text">Week 2</p>
          <img
            class="card-img"
            src="@/assets/images/theme/locked.png"
            alt="鎖頭圖"
          />
        </div>

        <div v-if="showCard2" class="back-card">
          <p class="back-card-tag"># 凱鈿行動科技</p>
          <h3 class="back-card-title">今晚，我想來點點簽</h3>
          <p class="back-card-theme">CANVAS</p>
          <img
            class="back-card-img"
            src="@/assets/images/theme/theme_card2.png"
            alt=""
          />
          <div class="back-card-container">
            <p class="back-card-text-week">Week 2</p>
            <p class="back-card-text-detail">查看關卡細節</p>
          </div>
        </div>
      </div>
      <div :class="['card', { 'flip-card': showCard3 }]">
        <div class="front-card">
          <p class="card-text">Week 3</p>
          <img
            class="card-img"
            src="@/assets/images/theme/locked.png"
            alt="鎖頭圖"
          />
        </div>

        <div v-if="showCard3" class="back-card">
          <p class="back-card-tag"># 鈦坦科技</p>
          <h3 class="back-card-title">Scrum 新手村</h3>
          <p class="back-card-theme">JS Draggable</p>
          <img
            class="back-card-img"
            src="@/assets/images/theme/theme_card3.png"
            alt=""
          />
          <div class="back-card-container">
            <p class="back-card-text-week">Week 3</p>
            <p class="back-card-text-detail">查看關卡細節</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#theme-page {
  @include size(100vh, 100vw);
  @include flex();
  background-color: $color-bg;
  flex-direction: column;

  > .theme-title {
    font-family: Noto Sans CJK;
    color: #55ffad;
    font-size: 2vw;
    font-weight: 700;
    border-radius: 40px;
    border: solid 4px #55ffad;
    padding: 1vh 2vw;
    line-height: 140%;
  }
  > .theme-text {
    font-family: Noto Sans CJK;
    color: #fff;
    line-height: 140%;
    padding: 8vh 0;
    letter-spacing: 0.2vw;
    text-align: center;
  }
}

.theme-cards {
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4%;
  -webkit-perspective: 700;
  -moz-perspective: 700;
  perspective: 700;
  > .card {
    @include flex();
    border-radius: 32px;
    width: 100%;
    transition: all 0.6s ease;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: relative;
    background: linear-gradient(180deg, #9da4ff 0%, #6e77e9 100%);
    // height: 32vh;
  }
}

.front-card {
  @include flex();
  border-radius: 32px;
  width: 100%;
  height: 100%;
  padding: 6% 4% 12%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  flex-direction: column;

  > .card-text {
    font-family: Monument Extended;
    font-size: 1.6vw;
    letter-spacing: 0.1vw;
    color: #fff;
    padding: 6% 0 12%;
  }
  > .card-img {
    width: 70%;
  }
}

.back-card {
  @include flex();
  border-radius: 32px;
  background-color: #fff;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 6% 8% 8%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
  color: red;
  //   display: none;
  .back-card-tag {
    display: inline-block;
    font-size: 0.8vw;
    background-color: #83fac1;
    color: #06102b;
    border-radius: 8px;
    padding: 0.8vh 0.4vw;
    line-height: 140%;
    font-weight: 700;
  }

  .back-card-img {
    height: 8vh;
    padding: 2% 0;
  }

  .back-card-title {
    font-family: "Noto Sans CJK";
    color: #6e77e9;
    font-weight: 700;
    padding: 2vh 0;
    letter-spacing: 0.1vw;
    font-size: 1.2vw;
  }

  .back-card-theme {
    font-family: "Noto Sans CJK";
    color: #6e77e9;
    font-size: 0.8vw;
  }

  .back-card-img {
    width: 60%;
    height: auto;
    margin-bottom: 4%;
  }

  .back-card-container {
    @include flex(center, space-between);
    width: 100%;
    
    > .back-card-text-week {
      font-family: Monument Extended;
      color: #c4c8ff;
      font-size: 0.6vw;

    }
    > .back-card-text-detail {
      @include flex();
      font-family: "Noto Sans CJK";
      color: #6e77e9;
      font-weight: 700;
      font-size: 0.6vw;
      &::after {
        @include flex();
        content: "";
        width: 1vw;
        height: 12px;
        background-image: url("@/assets/images/theme/arrow.png");
        background-position: center;
        background-size: cover;
      }
    }
  }
}

.flip-card {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
  > .front-card {
    display: none;
  }
  > .back-crad {
    display: flex;
    backface-visibility: inherit !important;
  }
}

.card:hover {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
  > .front-card {
    display: none !important;
  }
  > .back-crad {
    display: flex !important;
  }
}
</style>