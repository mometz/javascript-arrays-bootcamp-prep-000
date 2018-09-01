var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = [1]

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

var array2 = [1, 2, 3]

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array2.slice(-2)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array2 === array2.pop()
  return array2
}