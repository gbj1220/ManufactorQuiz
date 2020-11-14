const bikesArr = require('./bikeModels.js')


const randomMake = function() {
  return bikesArr[Math.floor(Math.random() * bikesArr.length)];
}

module.exports = randomMake;

