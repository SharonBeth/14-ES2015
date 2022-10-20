console.log("test")
// Rest & Spread 14.4 Exercise

//ES2015 Refactoring

///////????'s

//Overall- Reading all problems from Code to english.

//individually, see below each problem.

const filterOutOdds = (...args) => nums.filter (v => v % 2 === 0)

//question: Why don't you have to have the word function. And why is V acceptable 

const findMin = (...arg) => Math.min(...arg)//no questions

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//I thought that you can't have two arguments when using arrow functions???

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(ind+1)];
}

//if 'removeRandom' is a constant? is 'items' the function???

const extend = (array1, array2) => {
    return [...array1, ...array2]
}

//I thought that when there are two arguments you can't use an arrow function.
//Why move the line down? could it have also been on the same line without the return?
const addKeyVal = (obj, key, val) => {
    return {...obj, key: val};
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

//Same question, 2 arguments? not supposed to use arrow function?

const combine = (obj1, obj2) => {
    let combObj = {...obj1, ...obj2}
    return combObj;
}

//same question

const update = (obj, key, val) => {
    return {...obj, [key]:val};
}

//same question
