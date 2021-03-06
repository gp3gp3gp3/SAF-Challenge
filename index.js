const fs = require('fs')

const findCumlativeReturn = array => {
  const amount = array
    .map(e => e / 100 + 1)
    .reduce((cul, cur) => cul * cur) - 1
  return convertDecimalToPercRound(amount)
}

const convertDecimalToPercRound = num => Math.round((num * 100) * 100) / 100

const findHighestValue = array => Math.max(...array)

const convertDecimalToPercRoundDown = num => Math.floor((num * 100) * 100) / 100

const findPositiveReturn = array => {
  const posiAryLen = array.filter(num => num > 0 || num === 0).length
  const percentage = posiAryLen / array.length
  return convertDecimalToPercRoundDown(percentage)
}

const readText = fileName => {
  fs.readFile(fileName, (err, file) => {
    const ary = file.toString().split('\n')
    console.log(ary[0])
    console.log('Year: ', ary[1])
    const returnValues = ary[2].split(', ')
    const cumlativeReturn = findCumlativeReturn(returnValues)
    const percentPositiveMonths = findPositiveReturn(returnValues)
    const highestValue = findHighestValue(returnValues)
    console.log(`Cumulative Return: ${cumlativeReturn}%`)
    console.log(`% Positive Months: ${percentPositiveMonths}%`)
    console.log(`Best Month: ${highestValue}%\n`)
  })
}

const runChallenge = () => {
  readText('./input_one.txt')
  readText('./input_two.txt')
}

module.exports = {
  runChallenge,
  readText,
  findHighestValue,
  findPositiveReturn,
  convertDecimalToPercRoundDown,
  findCumlativeReturn,
  convertDecimalToPercRound
}
