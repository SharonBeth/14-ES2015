// ////////////////////////////////// 14.5-Object Enhancement Exercise////////////////////

// ******* #1 Same Keys and values  *******

//Original Code below, needs refactored 
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }


// Same Keys & Values... Refactored

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// ******* #2 Computed Property Names  *******

//Original Code below, needs refactored

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//Refactored code with ES2015 standard

//Wrote this first, definitely way wrong.
// let instructor = {
    // instructor[favoriteNumber] : 42,
    // instructor[firstName] : 'Colt',
    // 
// 
// }

// let favoriteNumber = 42;

// const instructor = {
    // firstName: "Colt",
    // [favoriteNumber]: "That is my favorite"
// };
// 
//******* #3 Object Methods  *******

//original Code Below 

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

//refactored code with ES2015

// const instructor = {
    // firstName: "Colt",
    // sayHi() {
        // return "hi"
    // },
    // sayBye() {
        // return this.firstname + " say bye!";
    // }
    // }

// ******* #4 Create Animal Function  *******

function createAnimal (species, verb, noise) {
    return {
        species, 
        [verb]() {
        return noise
        }
    }
}

