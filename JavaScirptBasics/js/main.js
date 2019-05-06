'use strict';
/*
console.log('Hello\tworld \nfrom main.js!');

console.log("it's me!");
console.log('it\'s me!');
// '',""は同じ意味。ソース内では統一することが望ましい。
console.log("hello"+'world');
*/
/*
console.log(10 + 3); // たす
console.log(10 - 3); // ひく
console.log(10 * 3); // かける
console.log(10 / 3); // わる
console.log(10 % 3); // わったあまり
console.log(10 ** 3); // 10の三乗

console.log(2 + 10 * 3); // 演算子の優先度は数学と同じ
console.log((2 + 10) * 3);
*/

/*
定数 const
constで宣言された文字は再代入できない

const price = 150;

console.log(price * 150);
console.log(price * 170);
*/

// 変数 let (var)
// ころころ変わると分かりずらいので基本はconstで宣言する

// let price = 150;
// console.log(price * 150);
// console.log(price * 170);
//
// price = 140;
// console.log(price * 150);
// console.log(price * 170);

// let price = 500;
//
// price += 100; //price = price + 100;
// price++; //price += 1;
//
// console.log(price);

// データ型
// console.log(typeof "hello");
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// if文
// const score = 40;

// if (score >= 80) {
//   console.log("Great!");
// } else if (score >= 60) {
//   console.log("Good!");
// } else {
//   console.log("OK...!");
// }

// 条件式 ? trueの処理 : falseの処理
// score >= 60 ? console.log("Great!") : console.log("OK...!");

const score = 60;
const name = "taguchi";

if (score >= 50) {
  if (name == "taguchi") {
    console.log("Good job!");
  }
}

if (score >= 50 && name == "taguchi") {
  console.log("Good job!");
}
