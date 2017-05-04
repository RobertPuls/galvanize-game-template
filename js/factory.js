var factory = {

  gridArray: [],
  brickArray: [],
  coinsArray: [],

  createGridEntities: function() {
    for (var i = 0; i < 200; i++) {
      var gridEntity = new GridEntity();
      this.gridArray.push(gridEntity);
    }
  },

  createBricks: function() {
    for (var i = 0; i < 100; i++) {
      var brick = new Brick();
      this.brickArray.push(brick);
    }
  },

  createCoins: function() {
    for (var i = 0; i < 40; i++) {
      var coin = new Coin();
      this.coinsArray.push(coin);
    }
  }
}
