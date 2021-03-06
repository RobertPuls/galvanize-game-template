var factory = {

  gridArray: [],
  brickArray: [],
  coinsArray: [],

  createGridEntities: function(numberOfGridEntites = 200) {
    for (var i = 0; i < numberOfGridEntites; i++) {
      var gridEntity = new GridEntity();
      this.gridArray.push(gridEntity);
    }
  },

  createBricks: function(numBricks = 100) {
    for (var i = 0; i < 100; i++) {
      var brick = new Brick();
      this.brickArray.push(brick);
    }
  },

  createCoins: function(numberOfCoins = 40) {
    for (var i = 0; i < numberOfCoins; i++) {
      var coin = new Coin();
      this.coinsArray.push(coin);
    }
  }
}
