console.log('----------------- TYPES -----------------');

// Returns a string describing the type — handles the null and array edge cases
function getType(value) {
  // TODO: write your code here
  return typeof value;
}

console.log(getType(42)); // "number"
console.log(getType('hello')); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(undefined)); // "undefined"
console.log(getType(null)); // "null"       ← typeof null === "object"!
console.log(getType([])); // "array"      ← typeof [] === "object"!
console.log(getType({})); // "object"
console.log(getType(() => {})); // "function"

//----------------------------------------------------
console.log('\n');

// Returns true only if value is a number and not NaN
function isNumber(value) {
  // TODO: write your code here
  if (value !== value) {
    return false;
  }
  else if (getType(value) === "number") {
    return true;
  }
  else {
    return false;
  }
}

console.log(isNumber(5)); // true
console.log(isNumber(NaN)); // false  ← typeof NaN === "number"!
console.log(isNumber('5')); // false
console.log(isNumber(Infinity)); // true

//----------------------------------------------------
console.log('\n');

// Predict true or false before running each line, then explain why in a comment
console.log(Boolean(0)); // false, not bool
console.log(Boolean('')); // false, not bool
console.log(Boolean(null)); // false, not bool
console.log(Boolean(undefined)); // false, not bool
console.log(Boolean(NaN)); // false, not bool
console.log(Boolean(false)); // false, not bool
console.log(Boolean('0')); // true, string coerced as true  ← may surprise you
console.log(Boolean([])); // true, object exists  ← may surprise you
console.log(Boolean({})); // true, object exists  ← may surprise you

//----------------------------------------------------
console.log('\n');

// Predict the output, then add a comment explaining why
console.log(1 == '1'); // true, '1' coerced to 1
console.log(1 === '1'); // false, different type
console.log(null == undefined); // true, loose equality
console.log(null === undefined); // false, different type
console.log(0 == false); // true, coerced
console.log('' == false); // true, coerced
