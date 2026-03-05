let page = document.querySelector('.page');
let body = document.querySelector('.sbody');
let hamBtn = document.querySelector('.hamburger-btn');
let nav = document.querySelector('.glnav');
let navClose = document.querySelector('.glnav-close');

// グローバルナビゲーションの表示と非表示
function glnavShowing() {
    nav.classList.replace('glnav', 'glnav-showing');
    page.classList.add('no-scroll');
    body.classList.add('no-scroll');

    navClose.addEventListener("click", glnavclosing);
}

function glnavclosing() {
    nav.classList.replace('glnav-showing', 'glnav');
    page.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
}
hamBtn.addEventListener('click', glnavShowing);


// 画面幅が750px以下に変更された時、グローバルナビゲーションを閉じる
const mql = window.matchMedia('(max-width: 750px)');
const initNav = function () {
    glnavclosing();
};
mql.addEventListener('change', initNav);


// テスト用
// alert('ボタンがクリックされました');