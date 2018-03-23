var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, newElement) {
  var newArray = [newElement, ...array]
  return newArray
};

function destructivelyAddElementToBeginningOfArray (array, newElement) {
  array.unshift(newElement)
  return array

  function addElementToBeginningOfArray (array, newElement) {
    var newArray = [...array, newElement]
    return newArray
  };

  function addElementToEndOfArray ( array, newElement) {
    array.push(newElement)
    return newArray
  };

  function accessElementInArray ( array, NewElement) {
    return array [index];
  };

  function destructivelyAddElementToBeginningOfArray (array) {
    array.shift ();
    return array;
  };

  function removeElementFromBeginningOfArray (array) {
    var newArray = array.slice(1);
    return newArray;
  };

  function destructivelyRemoveElementFromEndOfArray (array) {
    array.pop();
    return array;
  };

  function removeElementFromEndOfArray (array) {
    var newArray = array.slice(0, array.length -1);
    return newArray;
  };

}
