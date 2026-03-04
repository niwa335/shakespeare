function buttonClick(){
    alert('ボタンがクリックされました');
    return;
}

let button = document.getElementById('testbt');
button.addEventListener('click', buttonClick);

// function hamburger() {
//   alert("クリックされました");
//   console.log("クリックされました");
//   return;
// };

// let glnavBtn = document.querySelector('.hamburger-btn');
// let glnavContent = document.querySelector('.glnav-content');

// function setAriaHidden(btn) {
//   // glnavContent.setAttribute("aria-hidden", "true");
//   return;
// }

// setAriaHidden(document.querySelector('.hamburger-btn'));

// function funcClose(btn) {
//       btn.setAttribute('aria-expanded', 'false');
//       btn.setAttribute('aria-hidden', 'true');
// }

// glnavBtn.addEventListener("click", setAriaHidden);

// // 背景クリック時
// glnavBtn.addEventListener('click', function () {

//   funcClose(glnavBtn);

//   if (!flgPc) {
//     funcClose(glnavBtn);
//     document.body.style.overflow = 'visible';
//   }
// });