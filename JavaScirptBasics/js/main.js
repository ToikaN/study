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

// const score = 60;
// const name = "taguchi";
//
// if (score >= 50) {
//   if (name == "taguchi") {
//     console.log("Good job!");
//   }
// }
//
// if (score >= 50 && name == "taguchi") {
//   console.log("Good job!");
// }

//条件分岐
// const signal = "pink";
//
// switch (signal) {
//   case "red":
//     console.log("stop!");
//     break;
//   case "yellow":
//     console.log("caution!");
//     break;
//   case "blue":
//   case "green": //blueもしくはgreenという書き方
//     console.log("go!");
//     break;
//   default: //どれにも当てはまらない
//    console.log("wrong signal!");
//    break;
// }

//while文

// let hp = 200;
//
// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let i = 10;
// while ( i > 0) {
//   // if (i == 4) {
//   if (i % 3 == 0) {
//     i--;
//     continue;
//   }
//   console.log(i);
//   i--;
// }

//関数
// function showAd(message = "AD"){ //仮引数
//   console.log("--------");
//   console.log(`---${message}---`);
//   console.log("--------");
// }
//
// showAd("Header AD"); //実引数
// console.log("Tom is great!");
// console.log("Bob is great!");
// showAd();
// console.log("Steve is great!");
// console.log("Rich is great!");
// showAd("Fooder AD");


// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c
// }
//
// // sum(1, 2, 3);
// // sum(3, 4, 5);
// const total = sum(1, 2, 3) + sum(3, 4, 5);
//
// console.log(total);

//関数式
// function sum(a, b, c) {
//   return a + b + c
// };
//
// const total = sum(1, 2, 3) + sum(3, 4, 5);
//
// console.log(total);

//アロー関数

// const sum = (a, b, c) => {
//   return a + b + c;
// };
// // const sum = (a, b, c) => a + b + c; // 一行でreturnするならこの書き方でOK
// const total = sum(1, 2, 3) + sum(3, 4, 5);
//
// console.log(total);

// const double = a => a * 2; //変数1文字ならこのように書くことができる
// console.log(double(12));


//scope

// function f() {
//   const x = 1;
//   console.log(x);
// }
//
// f();
// console.log(x); //　エラーになる。関数内で定義されてるから外には持ち出せない
