// スタイルを付与するための関数
// function paragraphColor() {
//   const paraColor = document.getElementsByTagName('p');
//   for (let p of paraColor) {
//     p.classList.add('paragraph'); // クラスを加える
//   }
// }
function paragraphColor() {
  const paraColor = document.getElementsByTagName('p');
  for (let p of paraColor) {
    p.classList.add('paragraph');
  }
}

// スタイルリセット関数
// function paragraphReset() {
//   const paraColor = document.getElementsByTagName('p');
//   for (let p of paraColor) {
//     p.classList.remove('paragraph'); // クラスを取り除く
//   }
// }
function paragraphReset(){
  const paraColor = document.getElementsByTagName('p');
  for (let p of paraColor) {
    p.classList.remove('paragraph');
  }
}
////// 今回実装した箇所 //////
// スタイル追加ボタン
// const paragraphAction = document.querySelectorAll('[data-action="addStyle"]');
const paragraphAction = document.querySelectorAll('[data-action="addStyle"]');

// for (let button of paragraphAction) {
//   button.addEventListener('click', evt => {
//     evt.preventDefault();
//     paragraphColor(); // 上記関数の呼び出し
//   });
// }
for (let button of paragraphAction) {
  button.addEventListener('click', evt => {
    evt.preventDefault();
    paragraphColor();
  });
}

// スタイルリセットボタン
// const paragraphResetAction = document.querySelectorAll('[data-action="resetStyle"]');

const paragraphResetAction = document.querySelectorAll('[data-action="resetStyle"]');
// for (let button of paragraphResetAction) {
//   button.addEventListener('click', evt => {
//     evt.preventDefault();
//     paragraphReset(); // 上記関数の呼び出し
//   });
// }
for (let button of paragraphResetAction) {
  button.addEventListener('click', evt => {
    evt.preventDefault();
    paragraphReset();
  });
}
const forLoggingEl = document.getElementById('for-logging');
forLoggingEl.innerHTML = `
	<p>${paragraphAction[0].dataset.action}</p>
`;
