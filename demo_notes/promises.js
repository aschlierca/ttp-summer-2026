
// ==========
// functions & callbacks
// ==========


// example 1 - call a function directly in another function declaration
// doSomeTask is restricted to calling eat()

function eat() {
  console.log('eating...')
}

function doSomeTask(name) {
  console.log(`hello, ${name}! Let's begin a task`)
  eat()
}

doSomeTask('abdul')
doSomeTask('abdul')
doSomeTask('abdul')
























// example 2 - pass a function inside another function so that it can be called later

// now doSomeTask is NOT restricted to a single function. you can pass ANY funtion to be called within doSomeTask

function run() {
  console.log('running...')
}

function eat() {
  console.log('eating...')
}

function doSomeTask(name, taskFn) {
  console.log(`hello, ${name}! Let's begin a task`)
  taskFn()
}

doSomeTask('abdul', run)
doSomeTask('abdul', eat)

// pass any function as the second arg
doSomeTask('abdul', function () { console.log('coding...')} ) 
doSomeTask('abdul', function () { console.log('laughing...')} ) 



























// example 3
// part 1 - pass a function inside another function so that it can be called later
// part 2 - the function being called inside doSomeTask can take an argument

// all the functions below are becoming more decoupled!

function run(distance) {
  console.log(`running... for ${distance} km`)
}

function eat(min) {
  console.log(`eating... for ${min} minutes`)
}

function doSomeTask(name, taskFn) {
  console.log(`hello, ${name}! Let's begin a task`)
  taskFn(100)
}

doSomeTask('abdul', run)
doSomeTask('abdul', eat)

// pass any function as the second arg
// doSomeTask('abdul', function (lines) {
//   console.log(`writing... ${lines} lines of code`)
// })

// doSomeTask('abdul', function (min) {
//   console.log(`sleeping... for ${min} minutes`)
// })




















// example 4
// part 1 - pass a function inside another function so that it can be called later
// part 2 - the function being called inside doSomeTask can take an argument
// part 3 - the function being called inside doSomeTask takes a callback itself - it also takes a function as an arg

// all the functions below are becoming more decoupled!

function run(cb) {
  console.log(`running...`)
  cb()
}

function eat() {
  console.log(`eating...`)
}

function doSomeTask(name, task1, task2) {
  console.log(`hello, ${name}! Let's begin a task`)
  task1(task2)
}

doSomeTask('abdul', run, eat)

//? abdul - running - eating
//?

// this sequence of calls introduced order of operations by having a function call another fucntion passed in


// pass any function as the second arg
doSomeTask(
  'abdul',
  function (anotherTask) {
    console.log(`writing...`)
    anotherTask()
  },
  function() {
    console.log(`boxing...`)
  }
)





















// ==========
// async
// ==========


// run the "someFunction" after ms have passed  
// setTimeout(someFunction, ms); - quick way to test/mock API calls, network requests, DB operations, etc.

// example 1 - call a function directly in another function declaration
// startDay is restricted to calling makeCoffee() & eatBreakfast()

function makeCoffee() {
  setTimeout(() => {
    console.log('coffee is ready!')
  }, 1000);
}

function eatBreakfast() {
  setTimeout(() => {
    console.log('finish eating breakfast!')
  }, 3000);
}

function startDay() {
  makeCoffee()
  eatBreakfast()
}

startDay() // undefined

// change makeCoffee ms to 4000 - what is the order? 






















// example 2 - pass a function inside another function so that it can be called later


// now startDay is NOT restricted to a single function. you can pass ANY funtion to be called within startDay

function makeCoffee() {
  setTimeout(() => {
    console.log('coffee is ready!')
  }, 1000);
}

function eatBreakfast() {
  setTimeout(() => {
    console.log('finish eating breakfast!')
  }, 3000);
}

function startDay(callback) {
  callback()
}

startDay(eatBreakfast)
startDay(makeCoffee)

// startDay(function() {
//   setTimeout(() => {
//     console.log('go to the gym!')
//   }, 3000);
// })
















// example 3 
// part 1 - pass a function inside another function so that it can be called later
// part 2 - the function being called inside startDay can take an argument
// part 3 - the function being called inside startDay itself takes a function as it's arg


function makeCoffee(cb) {
  setTimeout(() => {
    console.log('coffee is ready!')

    if (cb !== undefined) cb()
  }, 1000);
}

function eatBreakfast(cb) {
  setTimeout(() => {
    console.log('finish eating breakfast!')

    if (cb !== undefined) cb()
  }, 3000);
}

function startDay(callback1, callback2) {
  callback1(callback2)
}

startDay(eatBreakfast, makeCoffee) // notice the order!
startDay(makeCoffee, eatBreakfast)

// pass any function
// startDay(makeCoffee, function() {
//   setTimeout(() => {
//     console.log('finish working out!')
//   }, 2000);
// })

















// example 4 - wait, should we do it in order??
// part 1 - pass a function inside another function so that it can be called later
// part 2 - the function being called inside startDay can take an argument


function makeCoffee(cb) {
  setTimeout(() => {
    console.log('coffee is ready!')

    if (cb !== undefined) cb()
  }, 1000);
}

function eatBreakfast(cb) {
  setTimeout(() => {
    console.log('finish eating breakfast!')

    if (cb !== undefined) cb()
  }, 3000);
}

function commute(cb) {
  setTimeout(() => {
    console.log('commuting to work!')

    if (cb !== undefined) cb()
  }, 5000);
}

function startDay(callback) {
  callback()
}

// CALLBACK HELL!!!!
// --> we have a list of async calls, but we need to process them in order
// --> ex: airbnb:
// > check if user exists 
//  > books airbnb 
//   > makes a purchase
//    > purchase order completes
//     > user notification - you're booked!

startDay(function() {
  makeCoffee(function() {
    eatBreakfast(function() {
      commute(function() {
        console.log('made it to work!')
      })
    })
  })
})


// how do we avoid callback hell??






















// ==========
// Promises - 
// - eventual completion (or failure) of an asynchronous operation and its resulting value
// - if you want to leverage the event loop, wrap any value in a promise
// ==========

// Promise

// methods
// .all()
// .resolve()
// .reject()


// success
let p1 = new Promise(function(resolve, reject) {
  resolve(200)
})

// fail
let p2 = new Promise(function(resolve, reject) {
  reject(200)
})


// check both examples 3 from above ^
// although incorrect, you can think of the Promise function looking something like this
function myPromiseClone(callback) {
  const resolve = () => {} // some success function
  const reject = () => {} // some failure function

  // both of these functions are passed into your anonymous function as args
  callback(resolve, reject) 
}



















// mock longer async calls -- introduce some delay
let p3 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('made it after 1 sec')
  }, 1000);
})

p3.then(function (result) {
  console.log(result)
})






// promise chaining
// each .then() runs AFTER the previous one RESOLVES OR REJECTS
// whatever you RETURN inside a .then() becomes the input to the next .then()

p3.then(function(result) {
  console.log(result)           // 'made it after 1 sec'
  return 'task 1 done'          // pass a value to the next .then()
}).then(function(prev) {
  console.log(prev)             // 'task 1 done'
  return 'task 2 done'
}).then(function(prev) {
  console.log(prev)             // 'task 2 done'
})




// .catch() handles a rejected promise (like a try/catch for async)

let p4 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject('something went wrong!')
  }, 1000);
})

p4
  .then(function(result) {
    console.log(result)           // never runs - promise was rejected
  })
  .catch(function(error) {
    console.log('caught:', error) // 'caught: something went wrong!'
  })




// ==========
// answer to: "how do we avoid callback hell?"
// --> functions that RETURN a promise instead of accepting a callback
// ==========

// before: each function ACCEPTED a callback
// after: each function RETURNS a promise - the caller decides what happens next

function makeCoffee() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('coffee is ready!')
      resolve()
    }, 1000);
  })
}

function eatBreakfast() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('finish eating breakfast!')
      resolve()
    }, 3000);
  })
}

function commute() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('commuting to work!')
      resolve()
    }, 5000);
  })
}

// callback hell (what we had before):
// startDay(function() {
//   makeCoffee(function() {
//     eatBreakfast(function() {
//       commute(function() {
//         console.log('made it to work!')
//       })
//     })
//   })
// })

// promise chain: flat, readable, no nesting
// IMPORTANT: return the next promise inside each .then() so the chain waits for it
makeCoffee()
  .then(function() { return eatBreakfast() })
  .then(function() { return commute() })
  .then(function() { console.log('made it to work!') })
  .catch(function(error) { console.log('something went wrong:', error) })




// ==========
// async / await - the modern way to write async code
// syntactic sugar over promises - reads like synchronous code
// ==========

// async keyword = this function always returns a promise
// await keyword = pause HERE until this promise resolves, then continue

async function startMyDay() {
  await makeCoffee()    // wait until coffee is ready
  await eatBreakfast()  // then wait until breakfast is done
  await commute()       // then wait until commute is done
  console.log('made it to work!')
}

startMyDay()

// same result as the .then() chain above - just easier to read

// error handling with async/await uses try/catch (same pattern as synchronous code)
async function startMyDaySafe() {
  try {
    await makeCoffee()
    await eatBreakfast()
    await commute()
    console.log('made it to work!')
  } catch (error) {
    console.log('something went wrong:', error)
  }
}

startMyDaySafe()