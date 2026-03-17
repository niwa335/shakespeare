let className = null;
let fileName = null;

const hamlet = document.querySelector(".hamlet-story");
const kingLear = document.querySelector(".kingLear-story");
const othello = document.querySelector(".othello-story");
const macbeth = document.querySelector(".macbeth-story");
const titusAndronicus = document.querySelector(".titusAndronicus-story");
const juliusCaesar = document.querySelector(".juliusCaesar-story");
const romeoAndJuliet = document.querySelector(".romeoAndJuliet-story");

let hamletCheckBox = document.querySelector(".readmore-checkbox-hamlet");
let kingLearCheckBox = document.querySelector(".readmore-checkbox-kingLear");

// テキストファイル外部読み込み
async function story(className, fileName) {
  let response = await fetch("txt/" + fileName + ".txt");
  let text = await response.text();
  className.innerText = text;
}

// ページごとに必要なファイルだけ読み込む
if (hamlet) {
  story(hamlet, "hamlet");
  story(kingLear, "kingLear");
  story(othello, "othello");
  story(macbeth, "macbeth");
}

if (titusAndronicus) {
  story(titusAndronicus, "titusAndronicus");
  story(juliusCaesar, "juliusCaesar");
  story(romeoAndJuliet, "romeoAndJuliet");
}

// アコーディオンUI対応
function accordion(e) {
  if (!e.currentTarget.checked) {
    this.name.scrollIntoView();
  }
}

hamletCheckBox.addEventListener("change", {
  name: hamlet,
  handleEvent: accordion,
});

kingLearCheckBox.addEventListener("change", {
  name: kingLear,
  handleEvent: accordion,
});
