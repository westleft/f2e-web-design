<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";

interface observerOptions {
  root: null | HTMLElement;
  rootMargin: string;
  threshold: number;
}

class ObserverUnit {
  private domArr: Ref;
  private imgDOM: Function;
  private options: observerOptions;
  private observer: IntersectionObserver;

  constructor() {
    this.domArr = ref([]);
    this.imgDOM = (el: HTMLElement) => {
      (this.domArr.value as Array<HTMLElement>).push(el); // 逐一將節點加進 imgDOM
    };

    this.options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.0,
    };
    this.observer = this.createObserver();
  }

  // 建立觀察器
  private createObserver() {
    return new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("front-animation");
          entry.target.addEventListener("animationend",() => {
              entry.target.classList.remove("front-animation");
              entry.target.classList.add("img-anima");
            }, { once: true });
        }
      });
    }, this.options);
  }

  // 開始觀察
  public startObserver() {
    this.domArr.value.forEach((item: HTMLElement) => {
      this.observer.observe(item);
    });
  }

  // 取消觀察
  public removeObserver() {
    this.domArr.value.forEach((item: HTMLElement) => {
      this.observer.unobserve(item);
    });
  }
}

onMounted(() => {
  observerUnit.startObserver();
});

onUnmounted(() => {
  observerUnit.removeObserver();
});

const observerUnit = new ObserverUnit();

const pageDOM = ref()

onMounted(() => {
    // console.log(pageDOM.value.offsetTop)
})


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
        <li class="list-item"><p class="list-item-text">關卡資訊</p></li>
        <li class="list-item"><p class="list-item-text">攻略資源</p></li>
        <li class="list-item"><p class="list-item-text">求職專區</p></li>
        <li class="list-item"><button class="list-item-btn">登入</button></li>
      </ul>
    </div>

    <section class="front-content">
      <img
        :ref="observerUnit.imgDOM"
        class="front-img-code"
        src="@/assets/images/front_code.png"
        alt=""
      />
      <img class="front-img-list" src="@/assets/images/front_list.png" alt="" />
      <img
        class="front-img-list2"
        src="@/assets/images/front_list2.png"
        alt=""
      />
      <div class="front_content_inner">
        <h1 class="front-title" :ref="observerUnit.imgDOM">THE F2E</h1>
        <p class="front-sub-title">互動式網頁設計</p>
        <button class="front-cta-btn">立即報名</button>
      </div>
      <p class="front-text-4th" :ref="observerUnit.imgDOM">4TH</p>
      <img
        :ref="observerUnit.imgDOM"
        class="front-img-dash"
        src="@/assets/images/front_dashboard.png"
        alt=""
      />
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
  @include size(101vh, 100vw);
  @include flex(center, flex-start);
  flex-direction: column;
  background-color: $color-bg;
  overflow-x: hidden;
  box-sizing: border-box;
  
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
          color: #858993;
          font-size: 0.8vw;
          cursor: pointer;
        }
        > .list-item-btn {
          background-color: $color-bg;
          border-radius: 40px;
          border: solid 2px #fff;
          padding: 0.5vh 1vw;
          color: #ffffff;
          cursor: pointer;
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
      }
    }

    > img {
      position: absolute;
      &.front-img-code {
        width: 12vw;
        left: 0;
        top: 16vh;
      }
      &.front-img-dash {
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

@keyframes front-img-anima {
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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