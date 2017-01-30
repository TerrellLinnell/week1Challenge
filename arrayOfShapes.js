var shapes = ["circle", "ellipses", "stadium", "arch", "annulus", "equilateral", "parallelogram", "pentagon", "octagon"];
var colors = ["red", "blue", "yellow", "orange", "green", "purple", "green"];
var sides = [1, 3, 5, 7, 9, 11];


var sillyShapes = [];

function makeSillyShapes(){

  for (var i = 0; i < 10; i++) {
    // Use your shape constructor function to build 10 random shapes.
    var newShape = new sillyShapeConstructor(shapes[Math.random()*shapes.length], colors[Math.random()*colors.length], sides[Math.random()*sides.length]);

    // Figure out how to grab a random item from the array, in order to get a shape, color, and sides
    // for the constructor
    function getSillyShape(arr) {
      for (var i = 0; i < arr.length; i++) {
        return arr[i].getInfo();
      }
    }
    //Dont forget to push your newly made shape into your sillyShapes array.
    sillyShapes.push(newShape);
  }

  return sillyShapes
}
makeSillyShapes();
console.log(sillyShapes);


function renderShapesToHTML() {
  // You will need to loop through the sillyShapes array
  // and append the HTML to the UL.
  for (var i = 0; i < sillyShapes.length; i++) {
    $('#silly-shapes-list').append('<ul> <li>' + sillyShapeConstructor.getInfo + '</li> </ul>');
  }

};

renderShapesToHTML();
