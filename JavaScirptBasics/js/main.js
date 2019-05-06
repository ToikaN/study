'use strict';

{
  const a = [1, 5 ,10]
  
  a.unshift(100); //先頭に追加
  a.push(200, 300); //末尾に追加

  console.log(a);

  a.shift(); //先頭から要素を削除
  a.pop(); //末尾から要素を削除

  console.log(a);
}
