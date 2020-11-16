const readline = require('readline')
const getRandom = require('./randomMake.js')
const bikeModels = require('./bikeModels.js')
const bike = getRandom(bikeModels)
const newBike = getRandom(bikeModels)
const newerBike = getRandom(bikeModels)
const newestBike = getRandom(bikeModels)
const finalBike = getRandom(bikeModels)


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


let failTest = 0
const question = function (userInput) {
  if (userInput.toLowerCase() === bike.make) {
    console.log("That's correct.\n")
    interface.question(`Who makes the ${newBike.model}?\n`, question2)
    console.log(`Type your answer below:\n`)
  } else if (failTest === 2) {
    console.log(`Sorry. You have answered incorrectly 3 times. You have failed!`)
    interface.close()
  } else if (userInput.toLowerCase() !== bike.make) {
    interface.question(`That's not correct. Please try again.\n`, question)
    console.log(`Type your answer below:\n`)
    failTest++
  }
}

const question2 = function (userInput) {
  if (userInput.toLowerCase() === newBike.make) {
    console.log("That's correct.\n")
    interface.question(`ho makes the ${newerBike.model}?\n`, question3)
    console.log(`Type your answer below:\n`)
  } else if (failTest === 2) {
    console.log(`Sorry. You have answered incorrectly 3 times. You have failed!`)
    interface.close()
  } else if (userInput.toLowerCase() !== newBike.make) {
    interface.question(`That's not correct. Please try again.\n`, question2)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}

const question3 = function (userInput) {
  if (userInput.toLowerCase() === newerBike.make) {
    console.log("That's correct.\n")
    interface.question(`Who makes the ${newestBike.model}?\n`, question4)
    console.log(`Type your answer below:\n`)
  } else if (failTest === 2) {
    console.log(`Sorry. You have answered incorrectly 3 times. You have failed!`)
    interface.close()
  } else if (userInput.toLowerCase() !== newerBike.make) {
    interface.question(`That's not correct. Please try again.\n`, question3)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}

const question4 = function (userInput) {
  if (userInput.toLowerCase() === newestBike.make) {
    console.log(`That's correct.\n`)
    interface.question(`Final question! Who makes the ${finalBike.model}?\n`, question5)
    console.log(`Type your answer below:\n`)
  } else if (failTest === 2) {
    console.log(`Sorry. You have answered incorrectly 3 times. You have failed!`)
    interface.close()
  } else if (userInput.toLowerCase() !== newerBike.make) {
    interface.question(`That's not correct. Please try again.\n`, question4)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}

const question5 = function (userInput) {
 if (userInput.toLowerCase() === finalBike.make) {
    console.log("You passed the test!.\n")
    console.log(`Great Job! You're a natural!`)
    interface.close()
  } else if (failTest === 2) {
    console.log(`Sorry. You have answered incorrectly 3 times. You have failed!`)
    interface.close()
  } else if (userInput.toLowerCase() !== newerBike.make) {
    interface.question(`That's not correct. Please try again.\n`, question5)
    console.log(`Type your answer below:\n`)
    failTest++
  }

}

console.log(`Welcome all to a fun little quiz. You will be given 5 different modern dirt bike models. 
You must answer with the correct manufacturer for that model. If you fail to answer correctly 3 times you will be kicked
from the test and a curse shall be placed upon yee... If you happen to get all 3 correct well... good for you. Let's go ride!\n`)

interface.question(`Who makes the ${bike.model}?\n`, question)
console.log(`Type your answer below:\n`)














