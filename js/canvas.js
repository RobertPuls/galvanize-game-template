var canvas = {

  playGround: undefined,
  context: undefined,
  width: 0,
  height: 0,

  init: function() {

    this.playGround = document.getElementById("canvas");
    this.context = this.playGround.getContext("2d");
    this.playGround.setAttribute("width", settings.CANVAS_WIDTH);
    this.playGround.setAttribute("height", settings.CANVAS_HEIGHT);
    this.playGround.style.backgroundColor = settings.CANVAS_COLOR;
    this.width = this.playGround.width;
    this.height = this.playGround.height;

  },

  changeSize: function(_width, _height) {

    this.playGround.setAttribute("width", _width);
    this.playGround.setAttribute("height", _height);
    this.playGround.style.backgroundColor = settings.CANVAS_COLOR;
    this.width = this.playGround.width;
    this.height = this.playGround.height;
    
  },

  getDrawArea: function() {
    return playGround;
  },

  getContext: function() {
    return context;
  }

};
