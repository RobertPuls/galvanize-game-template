window.onload = function() {

  var keyCode = undefined;
  var xSpeed = 0;
  var ySpeed = 0;
  var gameState = 1;
  var allowMove = true;
  var targetX = 0;
  var targetY = 0;
  var clearEffectCounter = 0;
  var insaneMode = false;
  var statusMode = "normal";
  var timer = undefined;
  var timeToResetMessage = 0;
  var isChangeLevel = false;
  var consoleMessage = "Go go go!";

  factory.createGridEntities();
  factory.createBricks();
  factory.createCoins();

  canvas.init();
  levelManager.buildStage(stages[0]);

  reset();

  start();

  function start() {
    gameState = 1;
    timer = setInterval(update, settings.TIME_DELAY);
  }

  document.onkeydown = function myFunction() {

    if (allowMove) {

      if (event.keyCode == 38) {
        console.log("Up key is pressed");

        if (levelManager.getMapIndex(hero.row - 1, hero.col) != 1) {
          targetY = hero.y - 50;
          sound.playWhip();
          hero.row--;
        } else {
          dontMoveEffect();
        }

      }
      if (event.keyCode == 40) {
        console.log("Down key is pressed");
        sound.playWhip();
        if (levelManager.getMapIndex(hero.row + 1, hero.col) != 1) {
          targetY = hero.y + 50;
          hero.row++;
        } else {
          dontMoveEffect();
        }

      }
      if (event.keyCode == 37) {
        console.log("Left key is pressed");
        sound.playWhip();
        if (levelManager.getMapIndex(hero.row, hero.col - 1) != 1) {
          targetX = hero.x - 50;
          global.map[hero.row][hero.co1] == 0;
          hero.col--;
        } else {
          dontMoveEffect();
        }

      }
      if (event.keyCode == 39) {
        console.log("Right key is pressed");
        sound.playWhip();
        if (levelManager.getMapIndex(hero.row, hero.col + 1) != 1) {

          global.map[hero.row][hero.co1] = 0;
          targetX = hero.x + 50;
          hero.col++;
        } else {
          dontMoveEffect();
        }

      }
      if (event.keyCode == 80) {
        console.log("P key is pressed");
        pause();
      }
      if (event.keyCode == 88) {
          //console.log("Cool Mode activated/deactivated");
        if (insaneMode) {
          clearEffectCounter = 0;
          insaneMode = false;
          sound.stopMusic();
        } else {
          insaneMode = true;
          sound.playMusic();
        }
      }
    }

    keyCode = event.keyCode;
    //console.log("Keycode = " + keyCode);
  }

  function dontMoveEffect() {

    anim.shake(utility.getElement("canvas"));
    consoleMessage = "Shaking :)";
    sound.playError();
    timeToResetMessage = 50;

  }

  function updateInsanelMode() {

    if (insaneMode) {
      statusMode = "Insane";
      clearEffectCounter += 5;
      if (clearEffectCounter > canvas.width) {
        clearEffectCounter = 0;
      }
    } else {
      statusMode = "Normal";
      clearEffectCounter = canvas.width;
    }

  }

  function draw() {

    canvas.context.clearRect(0, 0, clearEffectCounter, clearEffectCounter);
    drawEntities();
    updateHeroPosition();
    hero.draw();

  }

  function drawEntities() {

    for (var i = 0; i < factory.gridArray.length; i++) {
      factory.gridArray[i].draw();


      if (factory.coinsArray[i] != null) {
        factory.coinsArray[i].draw();
      }

      // kind of a hack... no need to loop through brickArray, as its length is less than gridArray
      if (factory.brickArray[i] != null) {
        factory.brickArray[i].draw(insaneMode);
      }

    }
  }

  function updateHeroPosition() {

    // make sure movements are allowed
    if (Math.abs(targetX - hero.x) < 1 &&
      Math.abs(targetY - hero.y) < 1) {

      if (checkGridVal(3)) { // step on the target gridEntity,
        // then you can move on to the next level

        consoleMessage = "You win!"
        gotoNextLevel();
        timeToResetMessage = 100;
        sound.playWin();
        reset();


      } else
      if (checkGridVal(4)) {
        global.score++;
        levelManager.updateMapIndex(hero.row, hero.col, 0);
        utility.getCoin(hero.row, hero.col).isActive = false;
        consoleMessage = "Got a coin!"
        sound.playCollectCoin();
        timeToResetMessage = 100;
      }

      allowMove = true;
    } else {
      allowMove = false;
    }

    // to move the hero smoothly
    xSpeed = (targetX - hero.x) * 0.3;
    ySpeed = (targetY - hero.y) * 0.3;

    // update hero x,y positions on the grid
    hero.x += xSpeed;
    hero.y += ySpeed;

  }

  function updateTimeMessage() {

    if (timeToResetMessage > 0) {
      timeToResetMessage--;

      if (timeToResetMessage == 1) {
        timeToResetMessage = 0;
        consoleMessage = "Go go go!";
      }
    }

  }

  function reset() {
    global.score = 0;
    targetX = hero.x;
    targetY = hero.y;
  }

  function update() {

    if (gameState == 1) {
      draw();
      global.time++;
    }

    updateInsanelMode();
    updateTexts();
    updateTimeMessage();

  }

  function gotoNextLevel() {

    anim.fadeIn(utility.getElement("canvas"));
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    levelManager.currentLevelIndex++;
    levelManager.currentLevelIndex %= stages.length; // clearn expression to repeat levels once you exceed the final stage
    levelManager.buildStage(stages[levelManager.currentLevelIndex]);

  }

  function checkGridVal(gridVal) {
    return levelManager.getMapIndex(hero.row, hero.col) == gridVal;
  }


  function updateTexts() {
    utility.getElement("score-txt").innerHTML = "Score " + global.score;
    utility.getElement("time-txt").innerHTML = "Time: " + Math.round(global.time / 100);
    utility.getElement("console").innerHTML = consoleMessage;
    utility.getElement("status-txt").innerHTML = "Mode: " + statusMode;
  }

  function pause() {
    if (gameState == 0) {
      gameState = 1;
      anim.grow("canvas");
      consoleMessage = "Game is running";
    } else {
      gameState = 0;
      anim.shrink("canvas");
      consoleMessage = "Game is paused";
    }
  }

  function stop() {

  }

}
