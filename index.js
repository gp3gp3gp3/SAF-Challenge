const fs = require('fs')

const readText = fileName => {
  fs.readFile(fileName, (err, file) => {
    const ary = file.toString().split('\n')
    console.log(ary[0])
    console.log('Year: ', ary[1])
  })
}

const runChallenge = () => {
  readText('./input_one.txt')
  readText('./input_two.txt')
}

const findHighestValue = array => array

runChallenge()

module.exports = {
  runChallenge,
  readText,
  findHighestValue
}
