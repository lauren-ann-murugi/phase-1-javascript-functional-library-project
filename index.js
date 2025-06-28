// Helper to standardize array vs object
const standardizeInput = function (collection) {
  return Array.isArray(collection) ? collection.slice() : Object.values(collection);
};

// myEach: iterates over a collection (array or object), applying a callback
function myEach(collection, callback) {
  const values = standardizeInput(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection; // Must return original collection
}

// myMap: returns a new array with the results of calling the callback on each element
function myMap(collection, callback) {
  const values = standardizeInput(collection);
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    newArr.push(callback(values[i]));
  }
  return newArr;
}

// myReduce: reduces a collection to a single value by combining elements using a callback
function myReduce(collection, callback, acc) {
  const values = standardizeInput(collection);
  let startIdx = 0;

  if (acc === undefined) {
    acc = values[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }

  return acc;
}

// myFind: returns the first element that satisfies the callback condition
function myFind(collection, predicate) {
  const values = standardizeInput(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i];
    }
  }
  return undefined;
}

// myFilter: returns a new array with all elements that pass the predicate test
function myFilter(collection, predicate) {
  const values = standardizeInput(collection);
  const filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}

// mySize: returns the number of elements in a collection
function mySize(collection) {
  const values = standardizeInput(collection);
  return values.length;
}

// myFirst: returns the first element or first `n` elements in a collection
function myFirst(array, n = false) {
  return n === false ? array[0] : array.slice(0, n);
}

// myLast: returns the last element or last `n` elements in a collection
function myLast(array, n = false) {
  return n === false ? array[array.length - 1] : array.slice(-n);
}

// myKeys: returns an array of an object's own keys
function myKeys(object) {
  return Object.keys(object);
}

// myValues: returns an array of an object's own values
function myValues(object) {
  return Object.values(object);
}