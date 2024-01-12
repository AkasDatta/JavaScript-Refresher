//Spread Operator
const fruits = ["banana", "Orange"];
const result = [...fruits];

console.log(result);


//
const fruits = ["banana", "Orange"];

const result = [...fruits];

result.push("Apple");
console.log(result);
console.log(fruits);

//array of object spread
const fruits = [
    {
        name: "Golap"
    },{
        name: "Joba"
    }
];

const result = [...fruits];
console.log(result);

//object spread
const fruits = [
    {
        name: "Golap",
        year: 1886,
        creator: "Vogoban"
    }
];

const result = {
    ...fruits,
};
console.log(result);
/////////////


// rest
function sum (...rest){
    console.log(rest);
}
sum(5, 6, 8, 9);

// 
function sum (...rest){
    return rest.reduce((sum, cur) => sum + cur, 0);
}
console.log(sum(5, 6, 8, 9));

// 
function sum (text, ...rest){
    const result = rest.reduce((sum, cur) => sum + cur, 0);
    console.log(`${text} ${result}`);
}
sum("The sum is: ", 5, 6, 8, 9);