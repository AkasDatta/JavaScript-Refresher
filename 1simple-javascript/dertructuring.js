const user = {
    id: 223,
    name: "Akas",
    age: 23,
    educatation: {
        degree: "Graduate",
        school:{
            name: "Feni Central High School, Feni",
        }
    }
};

// const name = user.name;
// const age = user.age;

const {name, age} = user;
const {educatation} = user;
const 
    {educatation: {degree},
} = user;
const 
    {educatation: {school: name} = {},
} = user;

console.log(name, age);
console.log(educatation);
console.log(degree);
console.log(name);