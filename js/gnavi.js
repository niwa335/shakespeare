const page = document.querySelector(".page");
const body = document.querySelector(".body");
const headerBar = document.querySelector(".bHeader");

const nav = document.querySelector(".gnav");
const navClose = document.querySelector(".gnav-close");

const hamBtn = document.querySelector(".hamburger-btn");
const hamBtnClose = document.querySelector(".hamburger-btn-close");

const width = window.matchMedia("(max-width: 600px)");
let pos = 0;

// グローバルナビゲーションの表示と非表示
function gnavShowing() {
  nav.classList.replace("gnav", "gnav-showing");
  page.classList.add("no-scroll");
  body.classList.add("no-scroll");

  hamBtnClose.addEventListener("click", gnavclosing);
  navClose.addEventListener("click", gnavclosing);
}

function gnavclosing() {
  nav.classList.replace("gnav-showing", "gnav");
  page.classList.remove("no-scroll");
  body.classList.remove("no-scroll");
}
hamBtn.addEventListener("click", gnavShowing);

// 画面幅が広くなったらナビを閉じる
width.addEventListener("change", gnavclosing);

// ナビ追従
function handleScroll() {
  // 上にスクロールしたとき
  if (window.scrollY < pos) {
    headerBar.classList.remove("hide");

    // トップ判定（0にならない誤差対策でひとまず2）
    if (window.scrollY > 2) {
      headerBar.classList.add("shadow");
    } else {
      headerBar.classList.remove("shadow");
    }
  } else if (window.scrollY > pos && window.scrollY > 70) {
    // 下にスクロールした時（トップ付近ではヘッダーを隠さない）
    headerBar.classList.add("hide");
    headerBar.classList.remove("shadow");
  }
  pos = window.scrollY;
}
window.addEventListener("scroll", handleScroll);
