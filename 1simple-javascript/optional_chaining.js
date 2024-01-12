const user = {
    id: 223,
    name: "Akas",
    age: 23,
    education: {
        degree: "Graduate",
        school:{
            name: "Feni Central High School, Feni",
        }
    }
};

console.log(user.education.school.name);
console.log(user?.education?.school?.name);