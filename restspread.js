console.log("test")
// Rest & Spread 14.4 Exercise

//ES2015 Refactoring

///////????'s

//1. Read in english

const filterOutOdds = (...args) => nums.filter (v => v % 2 === 0)

const findMin = (...arg) => Math.min(...arg)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(ind+1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2]
}

const addKeyVal = (obj, key, val) => {
    return {...obj, key: val};
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    let combObj = {...obj1, ...obj2}
    return combObj;
}

const update = (obj, key, val) => {
    return {...obj, [key]:val};
}
