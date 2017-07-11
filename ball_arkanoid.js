function Ball() {
  this.direction = 'down';
  this.position = {row: 13, column: 9};
}

Ball.prototype.moveBall = function(){
  if (this.direction === 'down') {
    this.position.row += 1
  }
  if (this.direction === 'up'){
    this.position.row -= 1
  }
  if (this.direction === 'up-right'){
    this.position.row -=1;
    this.position.column +=1
  }
  if (this.direction === 'up-left'){
    this.position.row -=1;
    this.position.column -=1
  }
  if (this.direction === 'down-right'){
    this.position.row +=1;
    this.position.column +=1
  }
  if (this.direction === 'down-left'){
    this.position.row +=1;
    this.position.column -=1
  }
}

Ball.prototype.detectCollision = function(base){

//--------------------WALLS COLLISION--------------------
  if (this.direction === 'up' && this.position.row === 0) {
    this.direction = 'down'
  }
  if (this.direction === 'up-right' && this.position.column === 19 && this.position.row > 0) {
    this.direction = 'up-left'
  }
  if (this.direction === 'up-right' && this.position.column < 19 && this.position.row === 0) {
    this.direction = 'down-right'
  }
  if (this.direction === 'up-left' && this.position.column > 0 && this.position.row === 0) {
    this.direction = 'down-left'
  }
  if (this.direction === 'up-left' && this.position.column === 0 && this.position.row > 0) {
    this.direction = 'up-right'
  }
  if (this.direction === 'down-left' && this.position.column === 0){
    this.direction = 'down-right'
  }
  if (this.direction === 'down-right' && this.position.column === 19){
    this.direction = 'down-left'
  }

//--------------------BASE COLLISION--------------------
  if (this.direction === 'down' && this.position.row === 18 && base.body[0].column === this.position.column) {
    this.direction = 'up-left'
  }
  if (this.direction === 'down' && this.position.row === 18 && base.body[1].column === this.position.column) {
    this.direction = 'up'
  }
  if (this.direction === 'down' && this.position.row === 18 && base.body[2].column === this.position.column) {
    this.direction = 'up-right'
  }
  if (this.direction === 'down-left' && this.position.row === 18 && base.body[0].column === this.position.column){
    this.direction = 'up-left'
  }
  if (this.direction === 'down-left' && this.position.row === 18 && base.body[1].column === this.position.column){
    this.direction = 'up'
  }
  if (this.direction === 'down-left' && this.position.row === 18 && base.body[2].column === this.position.column){
    this.direction = 'up-right'
  }
  if (this.direction === 'down-right' && this.position.row === 18 && base.body[0].column === this.position.column){
    this.direction = 'up-left'
  }
  if (this.direction === 'down-right' && this.position.row === 18 && base.body[1].column === this.position.column){
    this.direction = 'up'
  }
  if (this.direction === 'down-right' && this.position.row === 18 && base.body[2].column === this.position.column){
    this.direction = 'up-right'
  }
}
