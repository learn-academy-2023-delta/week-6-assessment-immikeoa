// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("capAndConcat", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]  
    expect(capAndConcat(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Pseudo code:
// create a function name capAndConcat the input is array of objects and the parameter will be named characters.
// inside the function block map the array and capitalized the name by spliting by space.
// map that array returned from the string and capitalized that first letter and join it with the rest.
// string interpolate the name name capitalized with the occupation

// b) Create the function that makes the test pass.
const capAndConcat = (characters) => {
  return characters.map(character => {
    const capitalized = character.name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    return `${capitalized} is ${character.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("dividedBy3", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(dividedBy3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(dividedBy3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// Pseudo code:
// create a function named dividedBy3 it takes an array and named the the parameter array.
// in the function block create that is going hold the return of the array filtered by only the items that are tipeof 'number'.
// map that array and only the numbers that are divisible by 3.
// return that result

// b) Create the function that makes the test pass.
const dividedBy3 = (array) => {
  const numbers = array.filter(item => typeof item === 'number')
  return numbers.map(number => number % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// Pseudo code:
// create an array named sumCubed that takes an array of numbers.
// name the parameter numbers. 
// inside the function block use the reduce HOF to return the sum. 
// use Math.pow to calcute the cubed part


// b) Create the function that makes the test pass.
const sumCubed = (numbers) => {
  return numbers.reduce((sum, number) => sum + Math.pow(number, 3), 0)
}



