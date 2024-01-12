const a = 6;
let result;

if(a % 2 === 0){
    result = "Even";
} else {
    result = "Odd";
}

console.log(result);

// sortest tarnary
const a = 6;

const result = a % 2 === 0 ? "Even" : "Odd";
console.log(result);

// 
const a = 6;

const result = 
    a % 2 === 0 ? "Even" : a % 3 === 0 ? "Divisible by 3" : "Simple Odd";
console.log(result);