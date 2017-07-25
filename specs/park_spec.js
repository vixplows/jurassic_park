var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe("Park", function() {

  var dinosaur;
  var park;

  beforeEach(function() {
    dino1 = new Dinosaur("Allosaurus", 1);
    dino2 = new Dinosaur("Iguanadon", 2);
    dino3 = new Dinosaur("Stegosaurus", 3);
    dino4 = new Dinosaur("Allosaurus", 1);
    dino5 = new Dinosaur("T-Rex", 2);
    park = new Park();
  });

  it("should start with an empty enclosure", function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  it("should be able to add a dinosaur", function() {
    park.addDinosaur(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it("should be able to remove dinosaur by type", function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    park.removeDinoByType(dino1.type);
    assert.strictEqual(park.enclosure.length, 3)
  })

});