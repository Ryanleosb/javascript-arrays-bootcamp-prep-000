var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, newElement) {
  var newArray = [newElement, ...array]
  return newArray
};

function destructivelyAddElementToBeginningOfArray (array, newElementelement) {
  array.unshift()
};

function addElementToEndOfArray (array, newElement) {
  var newArray = [...array, newElement]
  return newArray
};
