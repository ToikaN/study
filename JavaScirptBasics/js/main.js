'use strict';

{
  // 配列

  const scores = [80, 90, 40]
  console.log(scores[1]);

  scores[2] = 100;
  console.log(scores);

  console.log(scores.length);

  // constは再代入ができない
  // しかし定義されたものが配列やオブジェクトなら
  // 中身の変更をすることができる
}
