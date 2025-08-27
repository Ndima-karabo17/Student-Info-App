type Grade = ["A", "B", "C", "D", "F"];
interface Student{
    name: string,
    age: number,
    grade: Grade[number]
}

function displayStudentInfo(student: Student):void{
const greetingElement = document.getElementById("greeting");

  if (greetingElement) {
    greetingElement.innerHTML = `Hi, my name is ${student.name}. I am ${student.age} years old and my grade is ${student.grade}.`;
  }
  
}
 const stud1: Student ={
    name: "Ndima",
    age: 22,
    grade: "A"
 }
const stud2: Student = {
    name: "Karabo",
    age: 21,
    grade: "B"
}
 displayStudentInfo(stud1);



const greetButton = document.getElementById("greetBtn") as HTMLButtonElement;


greetButton.addEventListener("click",() =>{
    const input = document.getElementById("nameInput") as HTMLInputElement;
    const outptut = document.getElementById("output") as HTMLParagraphElement;
    const name = input.value;
    outptut.textContent =`Hello, ${name}!`
})


function displayFruitInUpper(fruit: string[]):void{
    for(const f of fruit){
        console.log(f.toUpperCase());
    }
}
const fruitList=["Banana", "Apple","Strawberry", "Blueberry"];
displayFruitInUpper(fruitList);


type Course ={
    title: string,
    duration: number,
    isActive: Boolean
}
const course1: Course ={
    title: "Learning TypeScript",
    duration: 24,
    isActive: true
};

function CourseInfo(course: Course): string{
    return `Course: ${course.title}, Duration: ${course.duration}, Active: ${course.isActive}`;
}
console.log(CourseInfo(course1));



interface Book{
    title: string,
    author: string,
    year: number
}

const book: Book[] = [
    {
        title: "The Subtle Ary of Not Giving a F*ck",
        author: "Mark Manson",
        year: 2016
    },
     {
        title:"Think Like a programmer",
        author: "V. Anton Spraul",
        year: 2012
     } ,
     {
        title: "Everything You Need to Ace",
        author: "Workman Publishing",
    year: 2015}
];

function showBookTitles(book: Book[]): void{
    for(const b of book){
        console.log(b.title);
    }
}
showBookTitles(book);


function addNumber(num1:number, num2: number){
    return num1 + num2;
}
function greet(name: string){
    return `Hello, ${name}!`;
}
console.log(addNumber(5, 10));
console.log(greet("Ndima"));