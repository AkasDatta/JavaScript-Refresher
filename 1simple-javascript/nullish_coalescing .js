// Nullish = null / undefined

let lang = null;
console.log(lang ?? "Javascript");

// difference logical or vs nullish
let lang = false;
console.log(lang || "Javascript");

// difference logical and
let lang = false;
console.log(lang && "Javascript");