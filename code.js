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


const moveRobot = (x0, y0, orientation0, instructions, xMax, yMax) => {

  let x = x0
  let y = y0
  let orientation = orientation0
  const instructionArray = instructions.split('')

  for (let i = 0; i < instructionArray.length; i++) {
    // console.log('aa', x, y, orientation,  instructionArray[i])
    if ((y === yMax && orientation === 'N' || x === xMax && orientation === 'E' || y === 0 && orientation === 'S' || x === 0 && orientation === 'W') && (instructionArray[i] === 'F')) {
      return {
        x: x,
        y: y,
        orientation: orientation,
        lost: 'LOST',
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
// console.log(moveRobot(3, 2, 'N', 'FRRFLLFFRRFLL', 5, 3))

const moveAllRobots = (input) => {
  const inputArray = input.split('\n')
  const robotArray = []
  for (let i = 1 ; i < inputArray.length - 1; i += 2) {
    const robot = inputArray[i] + ' ' + inputArray[i + 1]
    robotArray.push(robot)

  }
  const xMax = inputArray[0][0]
  const yMax = inputArray[0][2]
  
  



}

const sampleInput = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'
// console.log(sampleInput)

console.log(moveAllRobots(sampleInput))
