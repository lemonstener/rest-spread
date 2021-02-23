// ****************************************
// PART ONE
// ****************************************


const filterOutOdds = (...nums) => {
    return nums.filter(n => {
        return n % 2 === 0;
    })
}

const findMin = (...nums) => {
    return Math.min(...nums);
}

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map(n => n * 2)];
}

// ****************************************
// PART TWO
// ****************************************


const removeRandom = (items) => {
    const random = Math.floor(Math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
};

const removeKey = (obj, key) => {
    const copy = { ...obj };
    delete copy[key];
    return copy;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}

const update = (obj, key, val) => {
    const copy = { ...obj }
    copy[key] = val;
    return copy;
}
