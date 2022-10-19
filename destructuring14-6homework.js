///////// 14.6 Destructuring Homework   //////////////////////////////



// Object Destructuring 1 //

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 

//return 8

console.log(yearNeptuneDiscovered);

// return 1846





// Object Destructuring 2  //

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);

//return 
//  {  yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
//  }




// Object Destructuring 3  //

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})

//return `Your name is Alejandro and you like purple`

getUserData({firstName: "Melissa"})

//return `Your name is Melissa and you like green`

getUserData({})
//return `Your name is  and you like `




//  Array Destructuring 1  //

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); 
//return  "Maya"

console.log(second); 
//return "Marisa"

console.log(third);
//return "Chi" 



//  Array Destructuring 2  //

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops);
  //return     "Raindrops on roses"
  console.log(whiskers); 
  //return  "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings);
  //return 
    [   "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"
    ]




//  Array Destructuring 3  //

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers)
//  [20, 30]=[30, 20]
//return [20, 30] ************************************very unsure about this one




////////////////  Refactoring from ES5 to ES2015-Refactoring  ///////////////////////////////////

//  ES5 Assigning Variables to Object Properties    //

//Original as ES5
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

//Refactored to ES2015

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {numbers: {a, b}} = obj
// based on my notes from class, I truely thought this was correct. Is there more than one way to write the new ES2015?


//  ES5 Array Swap  // Original Code
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//  Refactored to ES2015    //Homework

const arr = [1, 2];

[2,1] = [2, 1]; /// but I am betting on this one first.

// or 

[arr[1], arr[0]] = [arr [0], arr[1]];


//  raceResults()   //

function raceResults ([first, second, third, ...rest ]) => {first, second, third, ...rest}

//******* This was very unclear for how to write this. I had a lot of trouble doing this one. I wasn't sure if this one was supposed to start as a constant 'const' or as a function  */







