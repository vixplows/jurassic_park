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

Park.prototype.getDinoByBabiesCount = function(number) {
  var dinosByBabies = [];

  for(var i = 0; i < this.enclosure.length; i++) {
    var dinosaur = this.enclosure[i];

    if(dinosaur.yearlyOffspring > number) {
      dinosByBabies.push(dinosaur.type);
    };
  };
  return dinosByBabies.toString();
};

Park.prototype.doNotPanicItsUnix = function() {
  return "It's a unix system, I know this!"
}

// wrong calcuation, logic error
Park.prototype.futureDinoNumbersOneDinoStart = function(dinosaur, years) {

  if (years === 1) {
    return 1 + dinosaur.yearlyOffspring;
  }
  if (years === 2) {
    var yearOneTotal = 1 + dinosaur.yearlyOffspring;
    var yearTwoTotal = (yearOneTotal * dinosaur.yearlyOffspring) + yearOneTotal;
    return yearTwoTotal
  }
}

// logic error
// Park.prototype.futureDinoNumbersTwoDinoStart = function(dinosaur1, dinosaur2, year) {
//   var futureDinoNumbers = ((1 + dinosaur1.yearlyOffspring) * year) + ((1 + dinosaur2.yearlyOffspring) * year);

//   return futureDinoNumbers;
// }