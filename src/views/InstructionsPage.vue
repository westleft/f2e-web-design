<script setup lang="ts">
</script>
<template>
  <div id="InstructionsPage">
    <div class="title-box">
      <img
        class="title-img"
        src="@/assets/images/instructions/title_left.png"
        alt=""
      />
      <h2 class="page-title">活動說明</h2>
      <img
        class="title-img"
        src="@/assets/images/instructions/title_right.png"
        alt=""
      />
    </div>

    <ul class="setps">
      <li class="step step1">
        <img
          class="step-img"
          src="@/assets/images/instructions/step1.png"
          alt=""
        />
        <div class="step-content">
          <h3 class="step-title">開放報名</h3>
          <p class="step-text"><span>10/13 </span>(四) 早上 11:00</p>
          <div class="line"></div>
          <p class="step-text"><span>10/30 </span>(日) 晚上 23:59</p>
          <p class="step-sub">截止前可修改報名組別</p>
        </div>
      </li>
      <li class="step step2">
        <div class="step-content">
          <h3 class="step-title">各組別開賽</h3>
          <p class="step-text"><span>10/31 </span>UI組、團體組開賽</p>
          <p class="step-text"><span>11/07 </span>前端組開賽</p>
          <p class="step-sub">
            前端工程師可採用<br />
            UI 設計師的設計稿產出完<br />整作品
          </p>
        </div>
        <img
          class="step-img"
          src="@/assets/images/instructions/step2.png"
          alt=""
        />
      </li>
      <li class="step step3">
        <img
          class="step-img"
          src="@/assets/images/instructions/step3.png"
          alt=""
        />
        <div class="step-content">
          <h3 class="step-title">登錄作品</h3>
          <p class="step-text"><span>10/31 </span>(一) 中午 12:00</p>
          <div class="line"></div>
          <p class="step-text"><span>11/28 </span>(一) 中午 12:00</p>
          <p class="step-sub">依賽程登錄作品</p>
        </div>
      </li>
      <li class="step step4">
        <div class="step-content">
          <h3 class="step-title">線上直播</h3>
          <p class="step-text"><span>11/03 - 11/24 </span>每週四</p>
        </div>
        <img
          class="step-img"
          src="@/assets/images/instructions/step4.png"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
#InstructionsPage {
  @include flex(center, flex-start);
  @include size(100vh, 100vw);
  flex-direction: column;
  background-color: $color-bg;
  padding: 2% 16% 2%;
  > .title-box {
    @include flex();
    > .page-title {
      font-family: "Noto Sans CJK";
      font-size: 2vw;
      color: #ffffff;
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
      line-height: 140%;
      padding: 0 2vw;
    }
    > .title-img {
      width: 6vw;
    }
  }
}

.setps {
  width: 100%;
  // background-color: #fff;
  height: 100%;
  display: grid;
  grid-template-areas:
    "step1 step2"
    "step1 step2"
    "step4 step3"
    "step4 step3";
  gap: 8% 6%;
  padding-top: 4vh;
  .step {
    @include flex(center, space-around);
    border: solid 2px #fff;
    border-radius: 20px;
    padding: 8% 4%;
    height: 36vh;
    transition: 0.2s;
    cursor: pointer;
    > .step-img {
      width: 20%;
    }

    > .step-content {
      @include flex(flex-start, space-around);
      flex-direction: column;
      height: 100%;
      > .step-title {
        transition: 0.2s;
        font-family: Noto Sans CJK;
        font-size: 1.6vw;
        color: #fff;
        font-weight: 700;
        letter-spacing: 0.1vw;
      }

      > .step-text {
        @include flex();
        font-family: Noto Sans CJK;
        font-size: 1.2vw;
        color: #fff;
        padding: 1vh 0;
        > span {
          color: #55ffad;
        }
      }

      > .line {
        width: 1px;
        height: 12px;
        border-right: solid 2px #fff;
        padding-left: 60%;
      }

      > .step-sub {
        font-size: 1.2vw;
        color: #fff;
        line-height: 140%;
      }
    }

    &:hover {
      border: 2px solid #9da4ff;
      box-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
      .step-title {
        color: #9da4ff;

        /* Shadow/Purple */

        text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
      }
    }
  }
  .step1 {
    grid-area: step1;
  }
  .step2 {
    grid-area: step2;
    padding: 4%;
  }
  .step3 {
    grid-area: step3;
  }
  .step4 {
    grid-area: step4;
    > .step-content {
      @include flex(flex-start, center);
      > .step-text {
        padding-top: 4vh;
      }
    }
  }
}
</style>