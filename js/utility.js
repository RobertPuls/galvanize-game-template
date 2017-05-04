var utility = {

  getElement: function (_id) {
    return document.getElementById(_id);
  },

  getCoin: function (_row, _col) {
    for(var i = 0; i < factory.coinsArray.length; i ++) {
      if(factory.coinsArray[i].row == _row && factory.coinsArray[i].col == _col){

        return factory.coinsArray[i];
      }
    }
  },

  getRandomColor: function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

};
