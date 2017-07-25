var Park = function() {
  this.enclosure = [];
};

module.exports = Park;

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur)
};