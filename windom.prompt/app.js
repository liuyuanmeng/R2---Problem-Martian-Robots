

// * Write your code below!
// window.alert('This is an alert')
const grid = window.prompt('What is your grid size (0, 0), make sure no > 50 have a space between two numbers')
const initialposition = window.prompt('What is your initialposition? have a space between two numbers and orientation (A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W)) ')
const intructions = window.prompt('What is your instruction? No need add a space between letters(A robot instruction is a string of the letters L, R, and F on one line)')
const inputString = '\n'
let userInput = grid + inputString + initialposition + inputString + intructions
console.log(userInput)


do {
  // code block to be executed
  const userOperation = window.prompt('Would like to add one more robot? (YES / NO)')
  const initialposition = window.prompt('What is your initialposition? have a space between two numbers and orientation (A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W)) ')
  const intructions = window.prompt('What is your instruction? No need add a space between letters(A robot instruction is a string of the letters L, R, and F on one line)')
  userInput = userInput + inputString + initialposition + inputString + intructions
} while (userOperation === 'YES')

console.log(userInput)

