<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";
import { useIntersectionObserver } from "@/composables/observer";
const { showAnimation, pageDOM, createObserver } = useIntersectionObserver();

const hideSlide = inject("hideSlide") as Ref<boolean>;

const scrollable = ref(false);

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};


const createTimer = (time: number, bool: boolean ) => {
  let timer = setTimeout(() => {
    scrollable.value = bool;
    clearTimeout(timer);
  }, time)
}


const activeCallback = () => {
  showAnimation.value = true;
  createTimer(2000, true);
};

const leaveCallback = () => {
  createTimer(100, false);
};

onMounted(() => {
  const observer = createObserver(options, activeCallback, leaveCallback);
  observer.observe(pageDOM.value);

  window.addEventListener("mousewheel", (event: any) => {
    if (event.wheelDelta < 0 && scrollable.value) {
      hideSlide.value = true;
    }
  });
});



</script>

<template>
  <div id="bonus" ref="pageDOM">
    <Transition name="main">
      <h2 v-show="showAnimation" class="bonus-title">
        區區修煉已經無法滿足了嗎？<span class="sub">還有比賽等著你！</span>
      </h2>
    </Transition>

    <div class="bouns-content">
      <Transition name="flag">
        <img
          v-show="showAnimation"
          class="bonus-img-flag"
          src="@/assets/images/bonus/flag.png"
          alt="旗子圖"
        />
      </Transition>
      <Transition name="car">
        <img
          v-show="showAnimation"
          class="bonus-img-car"
          src="@/assets/images/bonus/car.png"
          alt="車子圖"
        />
      </Transition>
    </div>

    <Transition name="main">
      <div v-show="showAnimation" class="bonus-cards">
        <div class="card card-book">
          <div class="card-wrap">
            <img class="card-img" src="@/assets/images/bonus/book.png" alt="" />
            <h3 class="card-title">評審機制</h3>
            <div class="bonus-texts">
              <h4 class="bonus-h4-title">初選：</h4>
              <p class="bonus-text">
                將由六角學院前端、UI 評審進行第一波篩選。
              </p>
              <h4 class="bonus-h4-title">決選：</h4>
              <p class="bonus-text">
                由六角學院與贊助廠商討論，進行最後篩選，<br />
                並於 12/30(五) 由評審進行直播公布名單！
              </p>
            </div>
          </div>
        </div>
        <div class="card card-coin">
          <div class="card-wrap">
            <img class="card-img" src="@/assets/images/bonus/coin.png" alt="" />
            <h3 class="card-title">獎金</h3>
            <h4 class="bonus-h4-title">
              初選佳作：<span class="default-text">共六十位 </span>
              <span class="green-text">數位獎狀</span>
            </h4>
            <p class="bonus-sub-text">每週主題個人組十位、團體組十組</p>

            <h4 class="bonus-h4-title">
              個人企業獎：<span class="default-text">共六位 </span>
              <span class="green-text">NTD 3,000/位</span>
            </h4>
            <p class="bonus-sub-text">每週主題個人組十位、團體組十組</p>

            <h4 class="bonus-h4-title">
              團體企業獎：<span class="default-text">共三組  </span>
              <span class="green-text">NTD 10,000/組</span>
            </h4>
            <p class="bonus-sub-text">每週主題各 1 組</p>

            <h4 class="bonus-h4-title">以上皆提供完賽數位獎狀</h4>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
#bonus {
  @include size(100vh, 100vw);
  @include flex(center, flex-start);
  flex-direction: column;
  background-color: $color-bg;
  padding: 4% 24%;

  > .bonus-title {
    font-size: 2vw;
    font-weight: 700;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    color: #fff;
    height: 4vh;
  }
}

.bouns-content {
  @include flex(flex-end, flex-start);
  width: 70%;
  border-bottom: solid 2px #fff;
  padding: 8% 0 0.2%;
  > .bonus-img-flag {
    transform: translate(-0.5vh, -1.2vw) rotate(-40deg);
    width: 2vw;
    margin-bottom: 0.8%;
  }
  > .bonus-img-car {
    width: 4vw;
  }
}

.bonus-cards {
  @include flex(center, space-between);
  width: 100%;
  padding-top: 8%;
  > .card {
    @include flex(center, flex-start);
    font-family: "Noto Sans CJK";
    flex-direction: column;
    width: 48%;
    background: linear-gradient(
      100.38deg,
      #313a65 3.95%,
      rgba(49, 58, 101, 0) 100%
    );
    height: 60vh;
    transition: 0.5s;
    padding: 2px;
    cursor: pointer;
    border-radius: 32px;

    &:hover {
      transition: 0.5;
      transform: translateY(-4%);
      background: linear-gradient(
        142.33deg,
        rgba(157, 164, 255, 0.8) -0.03%,
        rgba(85, 255, 173, 0.8) 99.97%
      );
    }

    > .card-wrap {
      @include flex(center, flex-start);
      font-family: "Noto Sans CJK";
      flex-direction: column;
      padding: 8%;
      background: #151f3f;
      width: 100%;
      height: 100%;
      border-radius: 32px;
      > .card-img {
        width: 20%;
        margin-bottom: 4%;
      }

      > .card-title {
        font-weight: 700;
        font-size: 1.6vw;
        color: #9da4ff;
        text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
        padding-bottom: 8%;
      }
    }
  }
  .card-book {
    .card-wrap {
      > .bonus-texts {
        > .bonus-h4-title,
        .bonus-text {
          color: #fff;
        }
        > .bonus-h4-title {
          font-size: 1.2vw;
          padding: 2% 0;
        }

        > .bonus-text {
          font-size: 1vw;
          line-height: 140%;
          padding: 2% 0 12%;
        }
      }
    }
  }

  .card-coin {
    .card-wrap {
      > .bonus-h4-title {
        width: 100%;
        text-align: left;
        font-family: "Noto Sans CJK";
        font-size: 1.2vw;
        color: #fff;
        > .default-text {
          font-size: 1vw;
        }
        > .green-text {
          font-size: 1vw;
          color: #55ffad;
        }
      }

      > .bonus-sub-text {
        width: 100%;
        text-align: left;
        color: #858993;
        font-size: 0.8vw;
        padding: 4% 0 8%;
      }
    }
  }
}

// 主動畫
.main-enter-active,
.main-leave-active {
  transition: all 1s ease-in-out;
}

.main-enter-from,
.main-leave-to {
  transform: translateY(20%);
  opacity: 0;
}

.main-enter-active .sub,
.main-leave-active .sub {
  transition: all 1s ease-in-out;
}
/* delay enter of main element */
.main-enter-active .sub {
  transition-delay: 0.5s;
}

.main-enter-from .sub,
.main-leave-to .sub {
  transform: translateX(40%);
  opacity: 0;
}

// 旗子動畫
.flag-enter-active {
  transition: all 0.2s ease-in-out 2.5s;
}

.flag-enter-from,
.flag-leave-to {
  transform: translate(0) rotate(0) !important;
}

// 車子動畫
.car-enter-active {
  transition: all 1s ease-in-out 1.5s;
}

.car-enter-from,
.car-leave-to {
  transform: translateX(760%);
}
</style>