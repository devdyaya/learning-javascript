var game = {
  startTime: null,
  disprayArea: document.getElementById('display-area'),

  start: function() {
    game.startTime = Date.now();
    document.body.onkeydown = game.stop;
  },

  stop: function() {
    var currentTime = Date.now();
    var seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
      game.disprayArea.innerText = seconds + '秒でした。すごい！';
    } else {
      game.disprayArea.innerText = seconds + '秒でした。残念...';
    }
  }
};

if(confirm('OKを押して10秒だと思ったら何かのキーを押してください')) {
  game.start();
}

