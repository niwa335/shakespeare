// ヘッダーメニュー
Vue.createApp({})
  .component("header-area", {
    data() {
      return {
        count: 0,
      };
    },
    template: `
    <div class="bHeader">
      <!--グローバルナビゲーション-->
      <!--スマホ用-->
      <div class="gnav-hamburger">
        <div class="logo">
          <a class="logo-link" href="/">
            <img src="img/title.png" alt="シェイクスピアめも" width="171" height="63">
          </a>
        </div>
        <button class="hamburger-btn" aria-haspopup="true">
          <img src="img/hamburger-bt.png" alt="MENU">
        </button>
      </div>
      <!--共通ナビゲーション-->
      <div class="gnav">
        <div class="logo">
          <a class="logo-link" href="/">
            <img src="img/title.png" alt="シェイクスピアめも" width="171" height="63">
          </a>
        </div>
        <nav class="gnav-content">
          <ul class="gnav-list">
            <li class="gnav-item"><a class="gnav-link" href="fourGreatTragedies.html">四大悲劇</a></li>
            <li class="gnav-item"><a class="gnav-link" href="tragedies.html">他の悲劇</a></li>
            <li class="gnav-item"><a class="gnav-link" href="histories.html">歴史劇</a></li>
            <li class="gnav-item"><a class="gnav-link" href="comedies.html">喜劇</a></li>
            <li class="gnav-item"><a class="gnav-link" href="romances.html">ロマンス劇</a></li>
          </ul>
        </nav>
      </div>
      <div class="gnav-close" role="button" tabindex="1"></div>
    </div>
    `,
  })
  .mount(".bHeader-area");

// フッターメニュー
Vue.createApp({})
  .component("footer-area", {
    data() {
      return {
        count: 0,
      };
    },
    template: `
    <div class="bFooter">
      <nav class="footer-content">
        <ul class="footer-list">
          <li class="footer-item"><a class="footer-link" href="aboutUsage.html#aboutUsage">ご利用について</a></li>
          <li class="footer-item"><a class="footer-link" href="aboutUsage.html#aboutLink">リンクについて</a></li>
          <li class="footer-item"><a class="footer-link" href="aboutUsage.html#disclaimerPrecautions">免責・注意事項</a></li>
          <li class="footer-item"><a class="footer-link" href="aboutUsage.html#management">運営</a></li>
        </ul>
      </nav>
      <div class="copyright">
        &copy;2026 シェイクスピアめも
      </div>
    </div>
    `,
  })
  .mount(".bFooter-area");

// const { createApp, ref } = Vue;
// createApp({
//   setup() {
//     const message = ref("てすと");
//     return { message };
//   },
// }).mount("#test");
