'use strict';

{
  const a = [1, 5 ,10]
  a.splice(2, 0, 6, 7);
  console.log(a); //1,5,6,7,10

  const removed = a.splice(1,2);
  console.log(a); //1,7,10
  console.log(removed);
}
