// only two Integers 
// two Integers + oritations (W,N,S,E)
// only F,R,L are valid instructions. 
// Make sure everything is in the right order.
// ('5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL')

// const isInteger = (str) => {
//   return /^\d+$/.test(str)
// }

function isValidRobot(robot) {

  return robot.length === 4 && Number(robot[0]) <= 50 && Number(robot[1]) <= 50 && ['N', 'S', 'W', 'E'].includes(robot[2]) && robot[3].length < 100 && robot[3].split('').every(element => ['F', 'L', 'R'].includes(element))

}

module.exports.isInputValid = function isInputValid(input) {

  const inputArray = input.split('\n')

  const gridSpecs = inputArray[0]
  
  const gridSpecsArray = gridSpecs.split(' ')

  const isGridValid = gridSpecsArray.every(element => Number(element) <= 50) && gridSpecsArray.length === 2
  
  const robotArray = []
  for (let i = 1; i < inputArray.length - 1; i += 2) {
    const robot = inputArray[i] + ' ' + inputArray[i + 1]
    robotArray.push(robot)
  }

  const robotArrayCleaned = robotArray.map(element => element.split(' '))

  const isRobotArrayValid = robotArrayCleaned.every(isValidRobot)

  return isGridValid && isRobotArrayValid

}



// const sampleInput = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'

// console.log(isInputValid(sampleInput))

// const testForLoop = (instructionArray) => {
//   for (let i = 0; i < instructionArray.length; i++) {
//     if (!['F', 'L', 'R'].includes(instructionArray[i])) {
//       return false
//     }
//   }
//   return true


// }
// console.log(testForLoop(['F', 'P', 'F']))
