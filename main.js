const readline = require('readline')
const getRandom = require('./randomMake.js')
const bikeModels = require('./bikeModels.js')
const randomNess = getRandom(bikeModels)
const randomModel = randomNess.model
const randomMake = randomNess.make
let newBike = getRandom(bikeModels)
let newModel = newBike.model
let newMake = newBike.make
let newerBike = getRandom(bikeModels)
let newerModel = newerBike.model
let newerMake = newerModel.make

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


let passTest = 0
let failTest = 0
const question = function (userInput) {
  if (failTest === 2) {
    console.log(`You suck!! Bye Bye!`)
    interface.close()
  } else if (userInput === newMake) {
    console.log("That's correct.")
    interface.question(`Who makes the ${newModel}?\n`, question2)
    passTest++
  } else if (userInput !== newMake) {
    interface.question(`That's not correct. Please try again.\n`, question)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}

const question2 = function (userInput) {
  if (passTest === 2) {
    console.log(`You passed the test!`)
    interface.close()
  } else if (failTest === 2) {
    console.log(`You suck!! Bye Bye!`)
    interface.close()
  } else if (userInput === randomMake) {
    console.log("That's correct.")
    interface.question(`Who makes the ${newerModel}?\n`, question3)
    passTest++
  } else if (userInput !== randomMake) {
    interface.question(`That's not correct. Please try again.\n`, question2)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}

const question3 = function (userInput) {
  if (passTest === 2) {
    console.log(`You passed the test!`)
    interface.close()
  } else if (failTest === 2) {
    console.log(`You suck!! Bye Bye!`)
    interface.close()
  } else if (userInput === newerMake) {
    console.log("That's correct.")
    passTest++
  } else if (userInput !== newerMake) {
    interface.question(`That's not correct. Please try again.\n`, question3)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}











interface.question(`Who makes this bike ${randomModel}?\n`, question)
console.log(`Type your answer below:\n`)



