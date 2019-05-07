(function() {
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;

  start.addEventListener('click', function() {
    startTime = Date.now();
  });

  stop.addEventListener('click', function() {
    var elapsedTime;
    var diff;
    elapsedTime = (Date.now() - startTime) / 1000;
    // elapsedTime = 4; //確認用
    // result.textContent = elapsedTime; ↓で小数点以下の000を表す
    result.textContent = elapsedTime.toFixed(3);
    diff = elapsedTime - 5.0;
    // if (diff > -1.0 && diff < 1.0) {
    if (Math.abs(diff) < 1.0) { //Math.ads(diff)でdiffの絶対値をとる
      result.className = 'perfect';
    }
  });
})();
