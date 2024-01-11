// regular function
function hello() {
    console.log("hello world");
    // return undefined;
}

let msg = hello();
console.log(msg);


//function expression type

const hello = function (){
    console.log("Hello world!");
};

//named function expression type
const hello = function hello(){
    console.log("Hello world!");
};

// arrow function
const hello = () => {
    console.log("Hello world!");
}