const fs = require('fs')

const findHighestValue = array => Math.max(...array)

const readText = fileName => {
  fs.readFile(fileName, (err, file) => {
    const ary = file.toString().split('\n')
    console.log(ary[0])
    console.log('Year: ', ary[1])
    const returnValues = ary[2].split(', ')
    console.log(`Best Month: ${findHighestValue(returnValues)}%`)
  })
}

const runChallenge = () => {
  readText('./input_one.txt')
  readText('./input_two.txt')
}


runChallenge()

module.exports = {
  runChallenge,
  readText,
  findHighestValue
}
