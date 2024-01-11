/*
function hello(){
    console.log("hello world!");
}
*/
const button = document.getElementById("button");

// event handlier
function hello(){
    console.log("Hello world");
}

button.addEventListener("click", hello);