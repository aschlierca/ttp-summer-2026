console.log('----------------- HIGHER ORDER METHODS -----------------');

const students = [
  { id: 1, name: 'Ada', score: 92, track: 'frontend' },
  { id: 2, name: 'Grace', score: 84, track: 'backend' },
  { id: 3, name: 'Lin', score: 76, track: 'frontend' },
  { id: 4, name: 'Katherine', score: 89, track: 'data' },
  { id: 5, name: 'Evelyn', score: 68, track: 'backend' },
];

// Use .map()
function getNames(students) {
  // TODO: write your code here
  const names = students.map((student) => student.name);
  return names;
}

console.log(getNames(students));
// ['Ada', 'Grace', 'Lin', 'Katherine', 'Evelyn']

//----------------------------------------------------
console.log('\n');

// Use .filter()
function getPassingStudents(students) {
  // TODO: write your code here
  const passers = students.filter((student) => student.score >= 70);
  return passers;
}

console.log(getPassingStudents(students).map((s) => s.name));
// ['Ada', 'Grace', 'Lin', 'Katherine']

//----------------------------------------------------
console.log('\n');

// Use .find()
function findById(students, id) {
  // TODO: write your code here
  return students.find((student) => student.id === id);
}

console.log(findById(students, 3)?.name); // 'Lin'
console.log(findById(students, 99)); // undefined

//----------------------------------------------------
console.log('\n');

// Use .reduce()
function getTotalScore(students) {
  // TODO: write your code here
  const totalScore = students.reduce((sum, student) => {
    return sum + student.score;
  }, 0);
  return totalScore;
}

console.log(getTotalScore(students)); // 409

//----------------------------------------------------
console.log('\n');

// Use .some() — true if any student scored above 90
function hasHighScorer(students) {
  // TODO: write your code here
  const isAbove = students.some((student) => student.score > 90);
  return isAbove;
}

// Use .every() — true if all students are passing (score >= 70)
function allPassing(students) {
  // TODO: write your code here
  const isAllPass = students.every((student) => student.score >= 70);
  return isAllPass;
}

console.log(hasHighScorer(students)); // true
console.log(allPassing(students)); // false
console.log(allPassing(students.slice(0, 4))); // true
