let page = document.querySelector('.page');
let body = document.querySelector('.body');
let hamBtn = document.querySelector('.hamburger-btn');
let nav = document.querySelector('.gnav');
let navClose = document.querySelector('.gnav-close');

// let window = document.querySelector('window');
// let header = document.querySelector('.bHeader');
// let scrollHeight = header.outerHeight();
// let main = document.querySelector('.bMain');
// let headerTop = header.offset().top;

//   function handleScroll() {
//     var value = window.scrollTop();
//     if ( value > headerTop ) {
//       header.classList.add('hyde');
//       main.style.marginTop = scrollHeight + 'px';
//     } else {
//       header.classList.remove('hyde');
//       main.style.marginTop = '0';
//     }
//   }

//   handleScroll();
//   window.addEventListener('scroll', handleScroll);

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

