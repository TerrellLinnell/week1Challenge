
var sillyShapes = require('./sillyShapeConstructor');

describe("Putting our shape constructor through the ringer", function(){

  it('the shape constructor exists', function(){
    var square = new sillyShapes('square', 4, 'blue');
    expect(square).toBeDefined();
  });

  it('A triangle can tell us its name!', function(){
    var tri = new sillyShapes('triangle', 'red', 3);
    expect(tri.name).toEqual("triangle");
  })

  it('A triangle can tell us about its self!', function(){
    var tri = new sillyShapes('triangle', 'red', 3);
    expect(tri.getInfo()).toEqual("I am a red triangle with 3 sides!");
  })

  it('A square can tell us about its self!', function(){
    var square = new sillyShapes('square', 'blue', 4);
    expect(square.getInfo()).toEqual("I am a blue square with 4 sides!");
  })

  it('A square can change color', function(){
    var square = new sillyShapes('square', 'blue', 4);
    expect(square.updateColor('orange')).toEqual({ name : 'square', color : 'orange',  sides : 4, });
  })

});
