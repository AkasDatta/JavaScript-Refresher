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



