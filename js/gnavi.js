const page = document.querySelector(".page");
const body = document.querySelector(".body");
const nav = document.querySelector(".gnav");
// const navMobile = document.querySelector(".gnav-mobile");
const logo = document.querySelector(".logo");
const navCont = document.querySelector(".gnav-content");
const hamBtn = document.querySelector(".hamburger-btn");
const hamBtnClose = document.querySelector(".hamburger-btn-close");
const navClose = document.querySelector(".gnav-close");
const width = window.matchMedia("(max-width: 750px)");
let pos = 0;

// グローバルナビゲーションの表示と非表示
function gnavShowing() {
  page.classList.add("no-scroll");
  body.classList.add("no-scroll");

  nav.classList.add("showing");
  logo.classList.add("showing");
  navCont.classList.add("showing");

  hamBtnClose.addEventListener("click", gnavclosing);
  navClose.addEventListener("click", gnavclosing);
}

function gnavclosing() {
  page.classList.remove("no-scroll");
  body.classList.remove("no-scroll");

  nav.classList.remove("showing");
  logo.classList.remove("showing");
  navCont.classList.remove("showing");
}
hamBtn.addEventListener("click", gnavShowing);

// 画面幅が広くなったらナビを閉じる
width.addEventListener("change", gnavclosing);

// ナビ追従
function handleScroll() {
  // 上にスクロールしたとき
  if (window.scrollY < pos) {
    nav.classList.remove("hide");

    // トップ判定（0にならない誤差対策でひとまず2）
    if (window.scrollY > 2) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  } else if (window.scrollY > pos && window.scrollY > 64) {
    // 下にスクロールした時（トップ付近ではヘッダーを隠さない）
    nav.classList.add("hide");
    nav.classList.remove("shadow");
  }
  pos = window.scrollY;
}
window.addEventListener("scroll", handleScroll);
