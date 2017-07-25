var Park = function() {
  this.enclosure = [];
};

module.exports = Park;

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur)
};

Park.prototype.removeDinoByType = function(type) {

  for(var i = 0; i < this.enclosure.length; i++) {
    var dinosaur = this.enclosure[i];

    if(dinosaur.type === type) {
      this.enclosure.splice(i, 1);
      i--;
    };
  };
};