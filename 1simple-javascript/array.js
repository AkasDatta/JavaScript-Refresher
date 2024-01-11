//array methods
const fruits = ["Banana", "apple", "mango"];

const result = fruits.find((f) => f === "Orange" || f === "Mango");
console.log(result);

// arrayIndex
const fruits = ["Banana", "apple", "mango"];

const result = fruits.findIndex((f) => f === "Orange" || f === "Mango");
console.log(result);


// filter
const fruits = ["Banana", "apple", "mango"];

const result = fruits.filter((f) => f === "Orange" || f === "Mango");
console.log(result);

// slice
const fruits = ["Banana", "apple", "mango"];

const result = fruits.slice(1, 4);
console.log(result);