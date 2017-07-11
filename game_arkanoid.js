function Game(base, bricks, ball) {

  this.base = base; //Este this. es solo naming para referirse a la variable
  this.bricks = bricks;
  this.ball = ball;

  for (var rowIndex = 0; rowIndex < 20; rowIndex++ ){
    for (var columnIndex = 0; columnIndex < 20; columnIndex++){
      $('.container').append($('<div>')
        .addClass('cell')
        .attr('data-row', rowIndex)
        .attr('data-col', columnIndex)
      );
    }
  }
}

//--------------------BASE CODE----------------------

Game.prototype.drawBase = function() {
  this.base.body.forEach(function(position) {
    var selector = '[data-row=' + position.row + '][data-col=' + position.column + ']';
    $(selector).addClass('base');
  });
};

Game.prototype.clearBase =function(){
  $(".base").removeClass("base");
}

Game.prototype.assignControlsToKeys = function() {
  $("body").on("keydown", function(event){
    switch (event.keyCode) {
      case 65:
        this.base.goLeft();
        this.clearBase();
        this.drawBase();
        break;
      case 68:
        this.base.goRight();
        this.clearBase();
        this.drawBase();
        break;
    }
  }.bind(this));
};

//--------------------BRICKS CODE----------------------

Game.prototype.drawBricks = function() {
  this.bricks.forEach(function(brick){
    brick.body.forEach(function(position) {
      var selector = '[data-row=' + position.row + '][data-col=' + position.column + ']';
      $(selector).addClass('bricks');
    });
  })
};

Game.prototype.checkBricks = function(){
  var self = this;
  this.bricks.forEach(function(brick, index){
    brick.body.forEach(function(position) {
      var selector = '[data-row=' + position.row + '][data-col=' + position.column + ']';
      if(position.row === self.ball.position.row && position.column === self.ball.position.column){
        $(selector).removeClass('bricks');
        self.bricks.splice(index, 1);
        switch(self.ball.direction) {
          case 'up':
              self.ball.direction = 'down'
              break;
          // case 'down':
          //     self.ball.direction: 'up'
          //     break;
          case 'up-right':
              self.ball.direction = 'down-right'
              break;
          case 'up-left':
              self.ball.direction = 'down-left'
              break;
        }
      }
    })
  })
}

//--------------------BALL CODE----------------------

Game.prototype.drawBall = function(){
  var selector = '[data-row=' + this.ball.position.row + '][data-col=' + this.ball.position.column + ']';
  $(selector).addClass('ball');
};

Game.prototype.clearBall = function(){
  $(".ball").removeClass("ball");
};

Game.prototype.startGame = function(){
  this.intervalId = setInterval(this.update.bind(this), 100);
};

Game.prototype.update = function (){
  this.ball.moveBall();
  this.ball.detectCollision(this.base);
  this.checkBricks();
  this.clearBall();
  this.drawBall();
};

//--------------------GAME CODE----------------------

$(document).ready(function(){
  var base = new Base();
  var bricks = [];
  for (var r = 1; r < 9; r+=2){
    for (var c = 0 ; c < 20; c+=1){
      bricks.push(new Brick(r , c))
    }
  }

  var ball = new Ball();

  var game = new Game(base, bricks, ball);

  game.drawBase();
  game.assignControlsToKeys();
  game.drawBricks();
  game.drawBall();
  game.startGame();
})
