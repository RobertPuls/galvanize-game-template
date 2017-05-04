var levelManager = {

  currentLevelIndex: 0,

  buildStage: function(map) {

    global.map = map;
    var padding = 5;
    var brickIndex = 0;
    var gridIndex = 0;
    var coinIndex = 0;

    for (var i = 0; i < map.length; i++) {

      for (var j = 0; j < map[i].length; j++) {

        factory.gridArray[gridIndex].add(padding + (40 + 10) * j, padding + (40 + 10) * i, i, j);
        factory.gridArray[gridIndex].draw();
        gridIndex++;

        if (map[i][j] == 1) {

          factory.brickArray[brickIndex].add(padding + (40 + 10) * j, padding + (40 + 10) * i, 40, 40);
          factory.brickArray[brickIndex].draw();
          brickIndex++;

        }

        if (map[i][j] == 4) {

          factory.coinsArray[coinIndex].add(padding + (40 + 10) * j, padding + (40 + 10) * i, i, j);
          factory.coinsArray[coinIndex].draw();
          // console.log("adding coing");
          coinIndex++;
        }

        if (map[i][j] == 2) {

          hero = Hero.create(padding + (40 + 10) * j, padding + (40 + 10) * i, i, j);
          hero.draw();
        }


      }
    }

  },

  getMapIndex: function(_row, _col) {
    return global.map[_row][_col];
  },

  updateMapIndex: function(_row, _col, val) {
    global.map[_row][_col] = val;
  }

}
