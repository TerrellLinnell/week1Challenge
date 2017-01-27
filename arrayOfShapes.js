var shapes = ["circle", "ellipses", "stadium", "arch", "annulus", "equilateral", "parallelogram", "pentagon", "octagon"];
var colors = ["red", "blue", "yellow", "orange", "green", "purple", "green"];
var sides = [1, 3, 5, 7, 9, 11];


var sillyShapes = [];

function makeSillyShapes(){

  for (var i = 0; i < 10; i++) {
    // Use your shape constructor function to build 10 random shapes.
    var circle = new sillyShapeConstructor(shapes[math.random()*shapes.length], colors[math.random()*colors.length], sides[math.random()*sides.length]);

    // Figure out how to grab a random item from the array, in order to get a shape, color, and sides
    // for the constructor
    function getSillyShape(arr) {
      for (var i = 0; i < arr.length; i++) {
        return arr[i].getInfo();
      }
    }
    //Dont forget to push your newly made shape into your sillyShapes array.
    sillyShapes.push()
  }

  return sillyShapes
}

console.log(makeSillyShapes());


function renderShapesToHTML() {
  // You will need to loop through the sillyShapes array
  // and append the HTML to the UL.
  for (var i = 0; i < sillyShapes.length; i++) {
    $('#silly-shapes-list').append('<ul> <li>' + this.name + '</li> <li>' + this.color + '</li> <li>' + this.sides '</li> </ul>')
  }

};

renderShapesToHTML();
