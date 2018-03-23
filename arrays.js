var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, Element) {
  var newArray = [newElement, ...array]
  return newArray
};

function destructivelyAddElementToBeginningOfArray (array, Elementelement) {
  array.unshift(newElement)
  return array
};
