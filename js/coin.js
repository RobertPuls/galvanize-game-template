function Coin() {

  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.col = 0;
  this.id = 0;
  this.isActive = false;

  this.draw = function() {
    
    if (this.isActive) {
      //var gridSize = canvas.width / global.map[0].length ;
      canvas.context.fillStyle = settings.COIN_COLOR;
      canvas.context.fillRect(this.x + 10, this.y + 10, 20, 20);
      canvas.context.stroke();
    }

  };

  this.add = function(_x, _y, _row, _col, _id) {
      this.x = _x;
      this.y = _y;
      this.row = _row;
      this.col = _col;
      this.isActive = true;
    };

}
