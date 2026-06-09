console.log('----------------- CONTROL FLOW -----------------');

// Grade scale:
// A: 90 – 100
// B: 80 – 89
// C: 70 – 79
// D: 60 – 69
// F: below 60
function grade(score) {
  // TODO: write your code here
  if (score >= 90) {
    return 'A';
  }
  else if (score >= 80) {
    return 'B';
  }
  else if (score >= 70) {
    return 'C';
  }
  else if (score >= 60) {
    return 'D';
  }
  else {
    return 'F';
  }
}

console.log(grade(95)); // "A"
console.log(grade(83)); // "B"
console.log(grade(74)); // "C"
console.log(grade(61)); // "D"
console.log(grade(50)); // "F"

//----------------------------------------------------
console.log('\n');

function fizzBuzz(n) {
  // TODO: write your code here
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
      console.log('Fizz')
    }
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz(16);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16

//----------------------------------------------------
console.log('\n');

function sumTo(n) {
  // TODO: write your code here
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  console.log(sum);
}

console.log(sumTo(5)); // 15   (1+2+3+4+5)
console.log(sumTo(10)); // 55
console.log(sumTo(1)); // 1

//----------------------------------------------------
console.log('\n');

function countdown(n) {
  // TODO: write your code here
  for (let i = n; i > 0; i--){
    console.log(i);
  }
}

countdown(5);
// 5
// 4
// 3
// 2
// 1

//----------------------------------------------------
console.log('\n');

// A leap year has 366 days instead of 365 — it gets an extra Feb 29th.
// The rule has three parts:
//   1. A year IS a leap year if it is divisible by 4
//   2. EXCEPT: years divisible by 100 are NOT leap years
//   3. UNLESS: the year is also divisible by 400 — those ARE leap years
//
// Walk through the examples:
//   2024 → divisible by 4, not by 100        → leap year ✓
//   1900 → divisible by 100, but not by 400  → NOT a leap year ✗
//   2000 → divisible by 400                  → leap year ✓
//   2023 → not divisible by 4                → NOT a leap year ✗
//
// Hint: use % (modulo) to check divisibility. Example: 12 % 4 === 0 → true
function isLeapYear(year) {
  // TODO: write your code here
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    }
    else if (year % 100 === 0) {
      return false
    }
    return true;
  }
  else {
    return false;
  }
}

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
