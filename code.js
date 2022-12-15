// Helper-functions


// Robot - Orientation


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


const moveRobot = (x0, y0, orientation0, instructions) => {
  let x = x0
  let y = y0
  let orientation = orientation0
  const instructionArray = instructions.split('')
  instructionArray.forEach(instruction => {
    const newPosition = moveRobotByOne(x, y, orientation, instruction)
    x = newPosition.x
    y = newPosition.y
    orientation = newPosition.orientation
    console.log(x, y, orientation)
  }
  )

  return {
    x: x,
    y: y,
    orientation: orientation,
  }
}
// console.log(moveRobot(1, 1, 'E', 'RFRFRFRF'))

// const robotSmart = (orientation, direction) => {
//   if (direction === 'Left'){
//     return (orientation + 90) % 360
//   }
//   if (direction === 'Right'){
//     return (orientation - 90) % 360
//   }

// }
// console.log(robotSmart(90, 'Right'))