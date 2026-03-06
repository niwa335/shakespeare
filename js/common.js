let pos = 0;
let headerBar = document.querySelector('.bHeader');
let page = document.querySelector('.page');
let body = document.querySelector('.body');
let hamBtn = document.querySelector('.hamburger-btn');
let nav = document.querySelector('.gnav');
let navClose = document.querySelector('.gnav-close');

// グローバルナビゲーション追従
function handleScroll() {
    if(window.scrollY < pos ){
        // 上にスクロールしたとき
        headerBar.classList.remove('hide');
    }else{
        // 下にスクロールしたとき
        headerBar.classList.add('hide');
    }
    pos = window.scrollY;
}
window.addEventListener('scroll', handleScroll);

// グローバルナビゲーションの表示と非表示
function gnavShowing() {
    nav.classList.replace('gnav', 'gnav-showing');
    page.classList.add('no-scroll');
    body.classList.add('no-scroll');

    navClose.addEventListener("click", gnavclosing);
}

function gnavclosing() {
    nav.classList.replace('gnav-showing', 'gnav');
    page.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
}
hamBtn.addEventListener('click', gnavShowing);


// 画面幅が広くなったらＧナビを閉じる
const mql = window.matchMedia('(max-width: 650px)');
const initNav = function () {
    gnavclosing();
};
mql.addEventListener('change', initNav);

