'use strict';

{

  const a = [10, 20];
  const b = [1, 2 ,...a];
  console.log(b);
  a[0] = 100;
  console.log(b);

  const sum = (a, b) => a + b;
  console.log(sum(...a));
}
