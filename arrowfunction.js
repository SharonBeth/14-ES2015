// Regular Function Expression

[2, 3, 6, 78, 99, 104, 23 ].reduce(function(max, currNum){
    return Math.max(max, currNum);
});

//above function expression changed to an arrow function expression

[2, 3, 6, 78, 99, 104, 23 ].reduce((max, currNum) => {
    return Math.max(max, currNum);
});


//********************************************************** */
//**                                                        **//
//**            14.3 Arrow Function Homework                **//                                     
//**
//*********************************************************** *//

//refactor from ES5 to ES2015

//Original-as ES5

function double (arr) {
    return arr.map(function(val){
        return val * 2;
    });

// To ES2015
const double = arr => arr.map((val) => val * 2)

//refactor from ES5 to ES2015

//Original as ES5
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//To ES2015

const squareAndFindEvens = numbers => numbers.map (num => num ** 2).filter(square => square % 2 === 0)
