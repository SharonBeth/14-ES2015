//////////////////////////////////////////////// 14.7.8-Maps & Sets: Homework//////////////////////////////////////////////

//      Quick Question #1          //


//What does the following Return?

new Set([1,1,2,2,3,4]) 

//returns set(4) {1,2,3,4} This is not an actual object or array, that is why it shows at the beginning that it is a set

//      Quick Question #2          //


//what does the following code return?

// [...new Set("referee")].join("")

//steps:
//1: set{r,e,f}     //as a set
//2: [r,e,f]        //spread to array
//3: "ref"          //array to a string

// "ref" //as final answer.

//      Quick Question #3           //


//What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// 
// m = map(2) {[1,2,3]: true, [1,2,3]: false}



//          hasDuplicates           //


const hasDuplicates = arr => new Set(arr).size !== arr.length

// is 'arr' a function name? It can't be a const variable because it is not defined otherwise. Why is the first 'arr' not in parenthesis? 

//          vowelCount              //

// had no idea how to start this. I thought with everything else being easier, this would also be shorter. Also, this is a great example to understand why are we not using arrow functions?

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
