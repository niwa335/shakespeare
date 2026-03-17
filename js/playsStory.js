let className = null;
let fileName = null;

const hamlet = document.querySelector(".hamlet-story");
const kingLear = document.querySelector(".kingLear-story");
const othello = document.querySelector(".othello-story");
const macbeth = document.querySelector(".macbeth-story");
const titusAndronicus = document.querySelector(".titusAndronicus-story");
const juliusCaesar = document.querySelector(".juliusCaesar-story");
const romeoAndJuliet = document.querySelector(".romeoAndJuliet-story");

let hamletCheckBox = document.querySelector(".checkbox-hamlet");
let kingLearCheckBox = document.querySelector(".checkbox-kingLear");
let othelloCheckBox = document.querySelector(".checkbox-othello");
let macbethCheckBox = document.querySelector(".checkbox-macbeth");
let titusAndronicusCheckBox = document.querySelector(
  ".checkbox-titusAndronicus",
);
let juliusCaesarCheckBox = document.querySelector(".checkbox-juliusCaesar");
let romeoAndJulietCheckBox = document.querySelector(".checkbox-romeoAndJuliet");

// テキストファイル外部読み込み
async function story(className, fileName) {
  let response = await fetch("txt/" + fileName + ".txt");
  let text = await response.text();
  className.innerText = text;
}

// ページごとに必要な分だけ読み込む
if (hamlet) {
  // 外部.txt
  story(hamlet, "hamlet");
  story(kingLear, "kingLear");
  story(othello, "othello");
  story(macbeth, "macbeth");

  // アコーディオン処理
  hamletCheckBox.addEventListener("change", {
    name: hamlet,
    handleEvent: accordion,
  });

  kingLearCheckBox.addEventListener("change", {
    name: kingLear,
    handleEvent: accordion,
  });

  othelloCheckBox.addEventListener("change", {
    name: othello,
    handleEvent: accordion,
  });

  macbethCheckBox.addEventListener("change", {
    name: macbeth,
    handleEvent: accordion,
  });
}

if (titusAndronicus) {
  story(titusAndronicus, "titusAndronicus");
  story(juliusCaesar, "juliusCaesar");
  story(romeoAndJuliet, "romeoAndJuliet");

  titusAndronicusCheckBox.addEventListener("change", {
    name: titusAndronicus,
    handleEvent: accordion,
  });
  juliusCaesarCheckBox.addEventListener("change", {
    name: juliusCaesar,
    handleEvent: accordion,
  });
  romeoAndJulietCheckBox.addEventListener("change", {
    name: romeoAndJuliet,
    handleEvent: accordion,
  });
}

// アコーディオンUI対応
function accordion(e) {
  if (!e.currentTarget.checked) {
    this.name.scrollIntoView();
  }
}
