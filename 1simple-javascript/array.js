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


// splice
const fruits = ["Banana", "apple", "mango"];

// const result = fruits.splice(index, numberOfRemovedItems);
const result = fruits.splice(2, 2, "Pineapple", "Frout", "Frout2");
console.log(result);


// concat
const fruits = ["Banana", "apple", "mango"];

// const result = fruits.splice(index, addlasttwoItems);
const result = fruits.concat("Frout", "Frout2");
console.log(result);


// push
const fruits = ["Banana", "apple", "mango"];

const result = fruits.push("Frout");
console.log(result);

// map
const fruits = ["Banana", "apple", "mango"];

const result = fruits.map((f) => {
    if (f === "Apple"){
        return "Apple";
    }
    else{
        return "N/A";
    }
});
console.log(result);
console.log(fruits);