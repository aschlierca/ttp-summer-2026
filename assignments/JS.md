# Assignment: JavaScript Workshop

## Goal

Build fluency with JavaScript fundamentals before using JavaScript to control the browser. This workshop focuses on values, variables, functions, arrays, objects, array methods, equality, truthy/falsy values, copying data safely, and reading console output like an engineer.

## Objectives

You will practice:

- Running JavaScript in the browser console.
- Using `const` by default and `let` when reassignment is needed.
- Identifying primitive values and object values.
- Explaining `null` vs `undefined`.
- Using `typeof`, `Array.isArray()`, and strict equality.
- Writing function declarations, function expressions, and arrow functions.
- Working with arrays, objects, destructuring, rest, and spread.
- Using `map`, `filter`, `find`, `some`, `every`, `reduce`, and `includes`.
- Avoiding mutation when working with shared objects and arrays.
- Recognizing common JavaScript footguns.

## Problem

Create a small JavaScript data toolkit for a fictional bootcamp dashboard called **Cohort Metrics**. You will write functions that analyze student progress data, transform arrays, copy objects safely, and print useful summaries to the console.

Create a folder named `cohort-metrics` with the following files:

```text
cohort-metrics/
  index.html
  script.js
```

The HTML file only needs to load `script.js` with `defer` and include a heading. Most of your work will happen in `script.js`. You may test your functions in the browser console or with Node.

## Starter Data

Add this data to the top of `script.js`:

```js
const students = [
  {
    id: 1,
    name: 'Ada',
    track: 'frontend',
    score: 92,
    assignmentsCompleted: 9,
    lateSubmissions: 0,
    tags: ['leader', 'debugger'],
  },
  {
    id: 2,
    name: 'Grace',
    track: 'backend',
    score: 84,
    assignmentsCompleted: 7,
    lateSubmissions: 1,
    tags: ['api', 'collaborator'],
  },
  {
    id: 3,
    name: 'Lin',
    track: 'frontend',
    score: 76,
    assignmentsCompleted: 6,
    lateSubmissions: 2,
    tags: ['css', 'persistent'],
  },
  {
    id: 4,
    name: 'Katherine',
    track: 'data',
    score: 89,
    assignmentsCompleted: 8,
    lateSubmissions: 0,
    tags: ['math', 'mentor'],
  },
  {
    id: 5,
    name: 'Evelyn',
    track: 'backend',
    score: 68,
    assignmentsCompleted: 5,
    lateSubmissions: 3,
    tags: ['node', 'resilient'],
  },
];
```

## Assignment Tasks

Complete each part in `script.js`. Label each section with a comment.

---

### Part 1: Values, Types, and Equality

Copy this stub into your `script.js` and implement `describeValue` so every call produces the expected output when you uncomment and run it.

```js
function describeValue(value) {
  // TODO: return a string like "42 is a number"
  // Hint: typeof alone won't handle every case correctly
}

// console.log(describeValue(42));          // "42 is a number"
// console.log(describeValue('hello'));     // "hello is a string"
// console.log(describeValue(true));        // "true is a boolean"
// console.log(describeValue(undefined));   // "undefined is undefined"
// console.log(describeValue(null));        // "null is null"       ← typeof null === "object"!
// console.log(describeValue([]));          // "[] is an array"     ← typeof [] === "object"!
// console.log(describeValue({}));          // "{} is an object"
// console.log(describeValue(() => {}));    // "[Function] is a function"
```

Next, predict what each line below will print **before running it**. Add a comment next to each one explaining why:

```js
console.log(1 == '1'); // ?
console.log(1 === '1'); // ?
console.log(null == undefined); // ?
console.log(null === undefined); // ?
console.log(0 == false); // ?
console.log([] == false); // ?
```

Finally, fill in and verify the falsy values with a loop:

```js
const falsyValues = [
  /* all six falsy values */
];

for (const val of falsyValues) {
  console.log(val, Boolean(val)); // every line should log false
}

// Below this, log two values that look like they should be falsy but are actually truthy.
```

---

### Part 2: Variables and Copying

The function below is supposed to return a new student with a higher score — **without changing the original**. Run it and read the output carefully:

```js
function promote(student, bonusPoints) {
  student.score += bonusPoints;
  return student;
}

const original = students[0]; // Ada, score: 92
const promoted = promote(original, 5);

// console.log(promoted.score);  // expected: 97
// console.log(original.score);  // expected: 92  ← is this what you actually see?
```

- [ ] Fix `promote()` so it returns a new object using spread syntax instead of mutating the original.
- [ ] Add a comment explaining why `const` didn't prevent `original` from being changed.

---

### Part 3: Functions

Write these functions. The commented lines show what each call should return — uncomment them to verify your work:

```js
// getStudentNames(students)
// → ['Ada', 'Grace', 'Lin', 'Katherine', 'Evelyn']

// getStudentsByTrack(students, 'frontend')
// → [{ id: 1, name: 'Ada', ... }, { id: 3, name: 'Lin', ... }]

// findStudentById(students, 3)
// → { id: 3, name: 'Lin', track: 'frontend', score: 76, ... }

// isPassing({ score: 72 })  → true
// isPassing({ score: 65 })  → false

// getAverageScore(students)  → 81.8

// createStudentSummary(students[0])
// → 'Ada is in frontend and has a 92% average.'
```

- [ ] `getStudentNames(students)` — returns an array of names.
- [ ] `getStudentsByTrack(students, track)` — returns students in that track.
- [ ] `findStudentById(students, id)` — returns one matching student.
- [ ] `isPassing(student)` — returns `true` if score is at least 70.
- [ ] `getAverageScore(students)` — returns the average score.
- [ ] `createStudentSummary(student)` — returns a formatted string.

Use at least:

- [ ] One function declaration.
- [ ] One function expression.
- [ ] One arrow function.
- [ ] One function that uses an implicit return.

---

### Part 4: Array Methods

Use array methods to answer these questions. Log each result:

- [ ] What are all student names?
- [ ] Which students are in the frontend track?
- [ ] Which students have a score below 70?
- [ ] Is at least one student missing more than two submissions?
- [ ] Has every student completed at least five assignments?
- [ ] What is the total number of completed assignments?
- [ ] Does any student's tags include `"mentor"`?

Use `map`, `filter`, `find`, `some`, `every`, `reduce`, and `includes` at least once.

---

### Part 5: Destructuring, Rest, and Spread

- [ ] Destructure one student's `name`, `track`, and `score`.
- [ ] Use array destructuring to get the first student and the rest of the students separately.
- [ ] Write a function named `logTags(name, ...tags)` that uses rest parameters.
- [ ] Create a new student object by spreading an existing student and changing the score.
- [ ] Create a new students array with one additional student without mutating the original array.

---

### Part 6: Mini Report

Write a function named `printCohortReport(students)` that logs:

- [ ] Total number of students.
- [ ] Average score.
- [ ] Number of passing students.
- [ ] Number of students per track.
- [ ] The name of the highest-scoring student.
- [ ] A warning message for each student below 70.

Call the function at the bottom of your file.

---

## Common Gotchas

- `typeof null` returns `"object"`. This is a famous JavaScript quirk.
- `typeof []` also returns `"object"`. Use `Array.isArray()` for arrays.
- `==` allows type coercion. Use `===` unless you have a specific reason not to.
- Empty arrays and empty objects are truthy.
- `const` prevents reassignment of the variable name. It does not make objects immutable.
- `push`, `pop`, `sort`, and direct property assignment mutate existing data.
- If a function does not explicitly return a value, it returns `undefined`.
- Arrow functions with `{}` need an explicit `return`.

## Industry Standards

- Prefer `const`; use `let` only when the variable needs to be reassigned.
- Avoid `var`.
- Prefer strict equality.
- Keep functions small and named by what they return or do.
- Prefer array methods for transformations and filtering.
- Avoid mutating data you did not create inside the function.
- Use `console.table()` when inspecting arrays of objects.

## Stretch Challenges

If you finish early:

- [ ] Add a `status` field to each student without mutating the original array.
- [ ] Sort a copied array by score from highest to lowest.
- [ ] Group students by track into an object using `reduce`.
- [ ] Write a `curveScores(students, points)` function that returns a new array.
- [ ] Use `setTimeout()` to log `"Report complete"` after one second.
- [ ] Research why `0.1 + 0.2` does not equal exactly `0.3`.

## Finished Checklist

Before submitting, verify:

- [ ] Your page loads `script.js` correctly.
- [ ] The console has no unexpected errors.
- [ ] Every required function is called at least once.
- [ ] Your original `students` array is not accidentally mutated in the copy/spread tasks.
- [ ] Your code is formatted and readable.
- [ ] Your work has been committed and pushed to GitHub.
