var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = [1]

function addElementToBeginningOfArray (array, element) {
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, "foo"]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return array
}

var array2 = [1, 2, 3]

function accessElementInArray(array, index) {
  return array[1]
}