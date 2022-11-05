<div align="center">
<samp>

![](https://i.imgur.com/b465Rdx.png)

# 2022 F2E Week 1 | 活動網站設計

<img src="https://img.shields.io/badge/-Vite-646CFF?logo=Vite&logoColor=white&logoWidth=24" alt="vite勳章"/> <img src="https://img.shields.io/badge/-Vue.js-4FC08D?logo=Vue.js&logoColor=white&logoWidth=24" alt="vue.js勳章"/> <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&logoWidth=24">

</samp>
</div>

## 程式架構

將每個區塊拆成不同的 view，並使用 [Swiper 輪播套件](https://swiperjs.com/) 來達到滾動時向上或向下滾動 `100vh`。

動畫以 `IntersctionObserver` 這個 Web API 來判斷是否觸發動畫，並配合 `Vue Transition` 來實現。

![](https://i.imgur.com/I5IqbIu.gif)

不過動畫、字型、圖片位置等並沒有 100% 還原設計稿上的樣貌，網頁上的內容幾乎都以 %、vw、vh 來呈現，因此在某些地方會有落差，完美呈現這件事就交給其他大神吧。
