let pos = 0;
let headerBar = document.querySelector(".bHeader");
let page = document.querySelector(".page");
let body = document.querySelector(".body");
let hamBtn = document.querySelector(".hamburger-btn");
let nav = document.querySelector(".gnav");
let navClose = document.querySelector(".gnav-close");

// グローバルナビゲーションの表示と非表示
function gnavShowing() {
  nav.classList.replace("gnav", "gnav-showing");
  page.classList.add("no-scroll");
  body.classList.add("no-scroll");

  navClose.addEventListener("click", gnavclosing);
}

function gnavclosing() {
  nav.classList.replace("gnav-showing", "gnav");
  page.classList.remove("no-scroll");
  body.classList.remove("no-scroll");
}
hamBtn.addEventListener("click", gnavShowing);

// 画面幅が広くなったらナビを閉じる
const mql = window.matchMedia("(max-width: 650px)");
const initNav = function () {
  gnavclosing();
};
mql.addEventListener("change", initNav);

// ナビ追従
function handleScroll() {
  var currentPos = window.pageYOffset; // スクロール量を取得

  // 上にスクロールしたとき
  // ページ底ではGナビ出さない
  if (window.scrollY < pos && getBottomPoint() >= currentPos + 128) {
    headerBar.classList.remove("hide");

    // トップ判定（0にならない誤差対策でひとまず2）
    if (window.scrollY > 2) {
      headerBar.classList.add("shadow");
    } else {
      headerBar.classList.remove("shadow");
    }
  } else {
    // 下にスクロールしたとき
    // TOPでは消さない
    if (window.scrollY > 64) {
      headerBar.classList.add("hide");
      headerBar.classList.remove("shadow");
    }
  }
  pos = window.scrollY;
}

// ページ最下部判定
function getBottomPoint() {
  var bodyHeight = document.body.clientHeight; // bodyの高さ
  var windowHeight = window.innerHeight; // windowの高さ
  var bottomPoint = bodyHeight - windowHeight;
  return bottomPoint;
}

window.addEventListener("scroll", handleScroll);
