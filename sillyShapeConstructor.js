function sillyShapeConstructor(name, color, sides) {
  this.name = name;
  this.color = color;
  this.sides = sides;
}
sillyShapeConstructor.prototype.getInfo = function () {
  return "I am a " + this.color + " " + this.name + " with " + this.sides + " sides!";
}
sillyShapeConstructor.prototype.updateColor = function (newColor) {
  this.color = newColor;
  return { name : this.name, color : this.color,  sides : this.sides };
}




module.exports = sillyShapeConstructor;
