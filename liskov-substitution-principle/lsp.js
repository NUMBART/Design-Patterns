class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  get width() { return this._width; }
  get height() { return this._height; }
  set width(val) { this._width = val; }
  set height(val) { this._height = val; }

  getArea() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width} x ${this._height}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(val) { this._width = this._height = val; }
  set height(val) { this._height = this._width = val; }

}

clientMethod = (rc) => {
  rc.width = 5;
  rc.height = 4;
  if(rc.getArea() == 20) {
    //some code
  }
  else{
    throw new Error ("Object not of type Rectangle");
  }
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());

let sq = new Square(5);
console.log(sq.toString());
sq.width = 10;
console.log(sq.toString());
clientMethod(sq);