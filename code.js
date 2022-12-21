// Helper-functions


// Robot - Orientation


// const robotSmart = (orientation, direction) => {
//   if (direction === 'Left'){
//     return (orientation + 90) % 360
//   }
//   if (direction === 'Right'){
//     return (orientation - 90) % 360
//   }

// }
// console.log(robotSmart(90, 'Right'))


const robotOrientation = (orientation, instruction) => {

  if (orientation === 'N' && instruction === 'L') {
    return 'W'
  }
  if (orientation === 'N' && instruction === 'R') {
    return 'E'
  }
  if (orientation === 'S' && instruction === 'L') {
    return 'E'
  }
  if (orientation === 'S' && instruction === 'R') {
    return 'W'
  }
  if (orientation === 'W' && instruction === 'L') {
    return 'S'
  }
  if (orientation === 'W' && instruction === 'R') {
    return 'N'
  }
  if (orientation === 'E' && instruction === 'L') {
    return 'N'
  }
  if (orientation === 'E' && instruction === 'R') {
    return 'S'
  }


}
// console.log(robotOrientation('North','Left'))



// Robot- Movement

// Robot - Forward
const robotForward = (x, y, orientation) => {
  if (orientation === 'N') {
    return {
      x: x,
      y: y + 1,
      orientation: orientation,
    }

  }

  if (orientation === 'S') {
    return {
      x: x,
      y: y - 1,
      orientation: orientation,
    }
  }

  if (orientation === 'W') {
    return {
      x: x - 1,
      y: y,
      orientation: orientation,
    }

  }

  if (orientation === 'E') {
    return {
      x: x + 1,
      y: y,
      orientation: orientation,
    }
  }

}
// console.log(robotForward(1,1,'North'))


const moveRobotByOne = (x, y, orientation, instruction) => {
  if (instruction === 'F') {
    return robotForward(x, y, orientation)
  }
  if (instruction === 'L' || instruction === 'R') {
    return {
      x: x,
      y: y,
      orientation: robotOrientation(orientation, instruction),
    }

  }
}


const moveRobot = (x0, y0, orientation0, instructions, xMax, yMax, lostPositionArray) => {

  let x = x0
  let y = y0
  let orientation = orientation0
  const instructionArray = instructions.split('')

  for (let i = 0; i < instructionArray.length; i++) {
    if ((y === yMax && orientation === 'N' || x === xMax && orientation === 'E' || y === 0 && orientation === 'S' || x === 0 && orientation === 'W') && (instructionArray[i] === 'F')) {
      if (!lostPositionArray.some(position => position.x === x && position.y === y && position.orientation === orientation)) {
        return {
          x: x,
          y: y,
          orientation: orientation,
          lost: 'LOST',
        }
      } else {
        continue
      }

    }

    const newPosition = moveRobotByOne(x, y, orientation, instructionArray[i])
    x = newPosition.x
    y = newPosition.y
    orientation = newPosition.orientation


  }

  return {
    x: x,
    y: y,
    orientation: orientation,
  }

}
// console.log(moveRobot(0, 3, 'W', 'LLFFFLFLFL', 5, 3, [{ x: 3, y: 3, orientation: 'N' }]))

const moveAllRobots = (input) => {
  const inputArray = input.split('\n')
  const robotArray = []
  for (let i = 1; i < inputArray.length - 1; i += 2) {
    const robot = inputArray[i] + ' ' + inputArray[i + 1]
    robotArray.push(robot)
  }
  const xMax = Number(inputArray[0][0])
  const yMax = Number(inputArray[0][2])

  const lostPositionArray = []
  const finalPositionArray = []


  const robotArrayCleaned = robotArray.map(element => element.split(' '))
  // console.log(robotArrayCleaned)
  for (let i = 0; i < robotArrayCleaned.length; i++) {
    if (Number(robotArrayCleaned[i][0]) > 50 || Number(robotArrayCleaned[i][1]) > 50 || robotArrayCleaned[i][3].length > 99) {
      return 'Please make sure all coordinates are 50 or below and instruction strings are less than 100'
    }
    // console.log(robotArrayCleaned[i][0] )

  }

  for (let i = 0; i < robotArray.length; i++) {
    const robot = robotArrayCleaned[i]
    const x0 = Number(robot[0])
    const y0 = Number(robot[1])
    const orientation0 = robot[2]
    const instructions = robot[3]

    // console.log(robot)
    const finalPosition = moveRobot(x0, y0, orientation0, instructions, xMax, yMax, lostPositionArray)

    if (finalPosition.lost === 'LOST') {
      lostPositionArray.push(finalPosition)
    }

    finalPositionArray.push(finalPosition)



  }

  const intermediateDataArray = []
  
  for (let i = 0; i < finalPositionArray.length; i++) {
    if (finalPositionArray[i].lost === 'LOST') {
      const newString = String(finalPositionArray[i].x) + ' ' + String(finalPositionArray[i].y) + ' ' + finalPositionArray[i].orientation + ' ' + finalPositionArray[i].lost
      intermediateDataArray.push(newString)
      
    } else {
      const newString = String(finalPositionArray[i].x) + ' ' + String(finalPositionArray[i].y) + ' ' + finalPositionArray[i].orientation
      intermediateDataArray.push(newString)

    }

  }

  const userOutputFinal = intermediateDataArray.join('\n')

  return userOutputFinal
 


}


console.log(moveAllRobots('5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'))
