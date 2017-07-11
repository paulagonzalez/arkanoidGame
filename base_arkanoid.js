function Base() {
  this.direction = 'right'; // <-- Dirección por defecto
  this.body = [
    {row: 19, column: 8},
    {row: 19, column: 9},
    {row: 19, column: 10}
  ];
}

Base.prototype.moveBase = function() {
  var head = this.body[0];
  var last = this.body[2];

    switch(this.direction) {
      case "left":
        if (this.body[0].column > 0){
          this.body.unshift({
            row: head.row,
            column: head.column - 1
          });
          this.body.pop()}; //añade un elemento a la cola
          break;

      case "right":
        if (this.body[2].column < 19){
          this.body.push({
            row: this.body[2].row,
            column: last.column + 1
          });
          this.body.splice(0,1)}; //añade un elemento al principio
          break;
      }
  };

Base.prototype.goLeft = function() {
    this.direction = 'left';
    this.moveBase(); //Si no se llama a la función, no se ejecutará
  };

Base.prototype.goRight = function() {
      this.direction = 'right';
      this.moveBase();
  };
