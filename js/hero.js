var Hero = {

  x: 0,
  y: 0,
  id: 0,
  row: 0,
  col: 0,
  width: 0,
  height: 0,
  bgColor: "white",

  create: function(_x, _y, _row, _col) {
    var obj = Object.create(this);
    this.x = _x;
    this.y = _y;
    this.row = _row;
    this.col = _col;

    return obj;
  },

  reset: function(_x, _y, _row, _col) {
    this.x = _x;
    this.y = _y;
    this.row = _row;
    this.col = _col;
  },

  draw: function() {
    canvas.context.fillStyle = settings.HERO_COLOR;
    canvas.context.fillRect(this.x, this.y, 40, 40);
    canvas.context.stroke();
  },

  update: function(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

};
