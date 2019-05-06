'use strict';

{
  // オブジェクト

  const player = {
    name: "taguchi",
    score: 32,  //最後の行に,を付けとくと行の入れ替えや追加が楽
  };

  console.log(player.name);
  console.log(player["name"]);

  player.score = 100;
  console.log(player);

  player.email = "taguchi@gmail.com"; //上で宣言したものに新たに要素を追加することができる
  console.log(player);

  delete player.score;
  console.log(player);
  
}
