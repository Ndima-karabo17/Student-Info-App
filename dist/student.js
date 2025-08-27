"use strict";
function displayStudentInfo(student) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = `Hi, my name is ${student.name}. I am ${student.age} years old and my grade is ${student.grade}.`;
    }
}
const stud1 = {
    name: "Ndima",
    age: 22,
    grade: "A"
};
const stud2 = {
    name: "Karabo",
    age: 21,
    grade: "B"
};
displayStudentInfo(stud1);
const greetButton = document.getElementById("greetBtn");
greetButton.addEventListener("click", () => {
    const input = document.getElementById("nameInput");
    const outptut = document.getElementById("output");
    const name = input.value;
    outptut.textContent = `Hello, ${name}!`;
});
function displayFruitInUpper(fruit) {
    for (const f of fruit) {
        console.log(f.toUpperCase());
    }
}
const fruitList = ["Banana", "Apple", "Strawberry", "Blueberry"];
displayFruitInUpper(fruitList);
const course1 = {
    title: "Learning TypeScript",
    duration: 24,
    isActive: true
};
function CourseInfo(course) {
    return `Course: ${course.title}, Duration: ${course.duration}, Active: ${course.isActive}`;
}
console.log(CourseInfo(course1));
const book = [
    {
        title: "The Subtle Ary of Not Giving a F*ck",
        author: "Mark Manson",
        year: 2016
    },
    {
        title: "Think Like a programmer",
        author: "V. Anton Spraul",
        year: 2012
    },
    {
        title: "Everything You Need to Ace",
        author: "Workman Publishing",
        year: 2015
    }
];
function showBookTitles(book) {
    for (const b of book) {
        console.log(b.title);
    }
}
showBookTitles(book);
function addNumber(num1, num2) {
    return num1 + num2;
}
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(addNumber(5, 10));
console.log(greet("Ndima"));
