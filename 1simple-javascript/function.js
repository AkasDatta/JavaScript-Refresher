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

// 
const hello = () => console.log("Hello world!");
//simple way
const hello = () => return 5;
// too shortest
const hello = () =>  5;
// parameter return
const hello = (a, b) =>  a + b;
//
const hello = (a, b) => {
    return a + b;
};
//
const hello = (a, b) => {
    a++;
    return a + b;
};
// object return
const hello = (a, b) => {
    return{
        a: 5,
        b: 6,
    }
};
//
const hello = (a, b) => ({
    return{
        a: 5,
        b: 6,
    }
});
//
const hello = () => ({
        a: 5,
        b: 6,
});
console.log(hello());

// anonymous function
function hello() {
    return () => {
        console.log("Hello world!");
    }
}
//
function hello() {
    return function() {
        console.log("Hello world!");
    }
}