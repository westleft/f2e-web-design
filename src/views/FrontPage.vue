<script setup lang="ts">
import { onMounted, } from "vue";
import { useIntersectionObserver } from "@/composables/observer";
const { showAnimation, pageDOM, createObserver } = useIntersectionObserver();

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.0,
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
  <div id="front-page" ref="pageDOM">
    <div id="header">
      <img
        src="@/assets/images/f2e_logo.png"
        alt="F2E logo"
        class="header-logo"
      />
      <ul class="header-list">
        <li class="list-item">
          <a class="list-item-text" target="_blank" href="https://2022.thef2e.com/news">關卡資訊</a>
        </li>
        <li class="list-item">
          <a class="list-item-text" target="_blank" href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w">攻略資源</a>
        </li>
        <li class="list-item">
          <a class="list-item-text" target="_blank" href="https://2022.thef2e.com/jobs">求職專區</a>
        </li>
        <li class="list-item"><button class="list-item-btn">登入</button></li>
      </ul>
    </div>

    <section class="front-content">
      <Transition>
        <img
          v-if="showAnimation"
          class="front-img-code"
          src="@/assets/images/front_code.png"
          alt=""
        />
      </Transition>
      <img class="front-img-list" src="@/assets/images/front_list.png" alt="" />
      <img
        class="front-img-list2"
        src="@/assets/images/front_list2.png"
        alt=""
      />
      <div class="front_content_inner">
        <Transition>
          <h1 v-if="showAnimation" class="front-title">THE F2E</h1>
        </Transition>
        <p class="front-sub-title">互動式網頁設計</p>
        <button class="front-cta-btn">立即報名</button>
      </div>
      <Transition>
        <p v-if="showAnimation" class="front-text-4th">4TH</p>
      </Transition>
      <Transition>
        <img
          v-if="showAnimation"
          class="front-img-dash"
          src="@/assets/images/front_dashboard.png"
          alt=""
        />
      </Transition>
    </section>

    <section class="front-marquee">
      <div class="front-marquee-container" v-for="i in 8" :key="i">
        <p class="marquee-text">JOIN US</p>
        <img
          class="marquee-star"
          src="@/assets/images/marquee_star.png"
          alt="跑馬燈星星"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#front-page {
  @include size(100vh, 100vw);
  @include flex(center, flex-start);
  flex-direction: column;
  background-color: $color-bg;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
  #header {
    @include flex(center, space-between);
    width: 100vw;
    padding: 0 2vw;
    box-sizing: border-box;
    > .header-logo {
      width: 8vw;
      cursor: pointer;
    }

    > .header-list {
      @include flex(center, flex-end);
      width: 100%;
      padding: 1% 0;
      > .list-item {
        padding: 0 1vw;
        > .list-item-text {
          @include flex();
          position: relative;
          flex-direction: column;
          color: #858993;
          font-size: 1vw;
          cursor: pointer;
          transition: 0.5s;
          text-decoration: none;
          &::after {
            @include size(4px, 12px);
            position: absolute;
            content: "";
            background-color: #55ffad;
            border-radius: 8px;
            bottom: -2vh;
            opacity: 0;
          }
          &:hover {
            color: #FFFFFF;
            text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
            &::after {
              opacity: 1;
            }
          }
        }
        > .list-item-btn {
          background-color: $color-bg;
          border-radius: 40px;
          border: solid 1px #fff;
          padding: 0.8vh 1.2vw;
          color: #ffffff;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            border: 1px solid #55FFAD;
            color: #55FFAD;
            box-shadow: 0px 0px 10px rgba(85, 255, 173, 0.6);
            background: rgba(85, 255, 173, 0.2);
          }
        }
      }
    }
  }

  > .front-content {
    @include flex();
    position: relative;
    height: 100%;
    width: 80%;
    > .front_content_inner {
      @include flex();
      flex-direction: column;
      > .front-title {
        @include flex();
        font-size: 6vw;
        font-family: Monument Extended;
        color: #9da4ff;
        position: relative;
        white-space: nowrap;
        letter-spacing: 1.6vw;
        &::after,
        &::before {
          letter-spacing: 1.6vw;
          content: "THE F2E";
          position: absolute;
        }
        &::after {
          right: 1%;
          bottom: 4%;
          color: #ffffff;
        }
        &::before {
          right: 1.5%;
          bottom: 10%;
          color: #55ffad;
        }
      }

      > .front-sub-title {
        font-family: Noto Sans TC;
        font-size: 2vw;
        font-weight: 700;
        letter-spacing: 1.6vw;
        color: #ffffff;
        padding-top: 4%;
      }

      > .front-cta-btn {
        font-family: Noto Sans TC;
        background: #ffe34e;
        color: #000000;
        border-radius: 40px;
        padding: 1.2vh 2.4vw;
        border: none;
        font-size: 1.2vw;
        margin-top: 12%;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          background: #FFF385;
          box-shadow: 0px 0px 10px rgba(255, 243, 133, 0.6);
        }
      }
    }

    > img {
      position: absolute;
      &.front-img-code {
        animation: img-anima 4s infinite ease-in-out;
        width: 12vw;
        left: 0;
        top: 16vh;
      }
      &.front-img-dash {
        animation: img-anima 4s infinite ease-in-out;
        width: 16vw;
        right: 4vw;
        bottom: 12vh;
      }
      &.front-img-list {
        width: 16vw;
        left: 12vw;
        bottom: 18vh;
      }
      &.front-img-list2 {
        width: 12vw;
        right: -4vw;
        top: 12vh;
      }

      // 常駐動畫
      &.img-anima {
        animation: img-anima 4s ease-in-out infinite;
      }
    }

    > .front-text-4th {
      @include flex();
      position: absolute;
      top: 12vh;
      right: 10vw;
      font-size: 2.4vw;
      font-family: "Pilot Command Italic";
      color: #9da4ff;
      white-space: nowrap;
      letter-spacing: 0.5vw;
      font-style: italic;
      &::after,
      &::before {
        position: absolute;
        content: "4TH";
        letter-spacing: 0.5vw;
        font-style: italic;
      }
      &::after {
        right: 1%;
        bottom: 4%;
        color: #ffffff;
      }
      &::before {
        right: 0.8%;
        bottom: 10%;
        color: #55ffad;
      }
    }
    .front-animation {
      animation: front-img-anima 0.5s ease-in-out;
    }
  }

  > .front-marquee {
    @include flex(flex-start, flex-end);
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 4%;
    > .front-marquee-container {
      @include flex();
      animation: marquee 4s linear infinite;
      > .marquee-text {
        font-family: Monument Extended;
        font-size: 4vw;
        font-weight: 400;
        text-transform: uppercase;
        background: -webkit-linear-gradient(-86deg, #9fa6ff 5%, #55ffad 91%);
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        color: #232d2d;
        letter-spacing: 0.1vw;
        padding-right: 4vw;
        white-space: nowrap;
      }

      > .marquee-star {
        width: 2vw;
        margin-right: 4vw;
      }
    }
  }
}

.v-enter-active {
  transition: all 1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(4vh);
  opacity: 0;
}

// 常駐動畫
@keyframes img-anima {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4%);
  }
  100% {
    transform: translateY(0%);
  }
}

// 跑馬燈動畫
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>