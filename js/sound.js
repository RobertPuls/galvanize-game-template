var sound = {

  errorSoundPath: "assets/sounds/error.wav",
  coinSoundPath: "assets/sounds/coin.wav",
  whipSoundPath: "assets/sounds/whip.wav",

  playError: function () {
    var snd = new Audio(this.errorSoundPath);
    snd.play();
  },

  playCollectCoin: function () {
    var snd = new Audio(this.coinSoundPath);
    snd.play();
  },

  playWhip: function () {
    var snd = new Audio(this.whipSoundPath);
    snd.play();
  }
}
