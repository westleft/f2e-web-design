<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div id="bonus">
    <h2 class="bonus-title">區區修煉已經無法滿足了嗎？還有比賽等著你！</h2>

    <div class="bonus-cards">
      <div class="card card-book">
        <img class="card-img" src="@/assets/images/bonus/book.png" alt="" />
        <h3 class="card-title">評審機制</h3>
        <div class="bonus-texts">
          <h4 class="bonus-h4-title">初選：</h4>
          <p class="bonus-text">將由六角學院前端、UI 評審進行第一波篩選。</p>
          <h4 class="bonus-h4-title">決選：</h4>
          <p class="bonus-text">
            由六角學院與贊助廠商討論，進行最後篩選，<br />
            並於 12/30(五) 由評審進行直播公布名單！
          </p>
        </div>
      </div>
      <div class="card card-coin">
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
</template>

<style lang="scss" scoped>
#bonus {
  @include size(100vh, 100vw);
  @include flex(center, flex-start);
  flex-direction: column;
  background-color: $color-bg;
  padding: 4% 20%;

  > .bonus-title {
    font-size: 2vw;
    font-weight: 700;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    color: #fff;
  }
}

.bonus-cards {
  @include flex(center, space-between);
  width: 100%;
  > .card {
    @include flex(center, flex-start);
    font-family: "Noto Sans CJK";
    flex-direction: column;
    width: 48%;
    background: #151f3f;
    border-radius: 32px;
    padding: 4% 2%;
    height: 72vh;
    > .card-img {
      width: 20%;
      margin-bottom: 4%;
    }

    > .card-title {
            font-weight: 700;
      font-size: 2vw;
      color: #9da4ff;
      text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
      padding-bottom: 8%;
    }
  }
  .card-book {
    > .bonus-texts {
      > .bonus-h4-title,
      .bonus-text {
        color: #fff;
      }
      > .bonus-h4-title {
        font-size: 1.6vw;
        padding: 2% 0;
      }

      > .bonus-text {
        font-size: 1.2vw;
        line-height: 140%;
        padding-bottom: 12%;
      }
    }
  }

  .card-coin {
    > .bonus-h4-title {
        width: 100%;
        text-align: left;
      font-family: "Noto Sans CJK";
      font-size: 1.3vw;
      color: #fff;
      > .default-text {
        font-size: 1.1vw;
      }
      > .green-text {
        font-size: 1.1vw;
        color: #55FFAD;
      }
    }

    > .bonus-sub-text {
        width: 100%;
        text-align: left;
        color: #858993;
        font-size: 1vw;
        padding: 4% 0 8%;
    }
  }
}
</style>