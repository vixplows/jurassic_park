var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe("Dinosaur", function() {

  var dinosaur;

  beforeEach(function() {
    dino1 = new Dinosaur("Allosaurus", 1);
    dino2 = new Dinosaur("Iguanadon", 2);
    dino3 = new Dinosaur("Stegosaurus", 3);
  });

  it("should have a type", function() {
    assert.strictEqual(dino1.type, "Allosaurus");
  });

  it("should have a yearly offspring number", function() {
    assert.strictEqual(dino2.yearlyOffspring, 2);
  });

});