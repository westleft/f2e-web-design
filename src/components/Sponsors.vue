<template>
  <div id="sponsors">
    <h2 class="sponsors-title">SPONSORS</h2>
    <h2 class="sponsors-title ch">鑽石級贊助商</h2>
    <ul class="sponsors-list">
      <li class="list-item">
        <a class="item-link" target="_blank" href="https://blockstudio.tw/">
          <img src="@/assets/images/sponsors/sponsors1.png" alt="板塊設計圖" />
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" target="_blank" href="https://titansoft.com/tw">
          <img src="@/assets/images/sponsors/sponsors2.png" alt="新加坡商鈦坦科技圖" />
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" target="_blank" href="https://www.kdanmobile.com/zh-tw">
          <img src="@/assets/images/sponsors/sponsors3.png" alt="凱鈿行動科技圖" />
        </a>
      </li>
    </ul>

    <div id="footer">
      <p class="footer-text">Copyright © 2022 HexSchool.All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#sponsors {
  @include flex();
  flex-direction: column;
  width: 100vw;
  background-color: #151f3f;
  padding: 8% 0 0;
  > .sponsors-title {
    font-size: 2vw;
    color: #fff;
    font-family: Monument Extended;
    letter-spacing: 0.2vw;
    &.ch {
      font-family: "Noto Sans CJK";
      font-size: 1.6vw;
      padding-top: 2%;
      letter-spacing: 0vw;
    }
  }
}

.sponsors-list {
  @include flex(center, space-between);
  width: 32%;
  padding: 4% 0;
  > .list-item {
    @include flex();
    width: 30%;
    background-color: #fff;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #9da4ff 0%, #55ffad 100%),
        linear-gradient(0deg, #ffffff, #ffffff);
    }
    > .item-link {
      @include size(100%, 100%);
      @include flex();
      padding: 4px;
      > img {
        width: 100%;
      }
    }
  }
}

#footer {
  @include flex();
  padding: 4% 0;
  background-color: #06102B;
  width: 100vw;
  > .footer-text {
    font-family: Montserrat;
    font-size: 1.2vw;
    color: #fff;
  }
}
</style>