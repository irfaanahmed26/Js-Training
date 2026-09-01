 // Task 1 — var, let, const.
var studentName = "Irfaan";
let studentAge = 21;
const collegeName = "SIT College";
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

//Changing var value
studentName = "Ahmed";
console.log(studentName);

//Change the let value
studentAge = 22;
console.log(studentAge);

//Trying to change const value
// collegeName = "ABC College";
// console.log(collegeName);

//Redeclaring var
var studentName = "Irfaan Ahmed";
console.log(studentName);

//Redeclaring let variable
// let studentAge = 22;
// console.log(studentAge);

 // Task 2 — User Information
var name = prompt("Enter Your Name");
console.log("Name:",name);
var age = prompt("Enter Your Age");
console.log("Age:",age);
var city = prompt("Enter Your City");
console.log("City:",city);

 // Task 3 — Welcome Message
var name = prompt("Enter Your Name");
alert("Welcome "+name+"!");

 // Task 4 — Age Calculator
var birthYear = prompt("Enter Your Birth Year");
var currentYear = 2026;
var age = currentYear - birthYear;
console.log("Birth Year:",birthYear);
console.log("Age:",age);

 // Task 5 — Identify Data Types
var text = "Hello";
var number = 100;
var decimal = 25.5;
var value1 = true;
var value2 = false;
var value3 = undefined;
var value4 = null;
console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);

 // Task 6 — Student Data
var student = {
    name:"Naveen",
    age:22,
    city:"Trichy",
    qualification:"BE",
    isStudent: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.qualification);
console.log(student.isStudent);

 // Task 7 — Fruit Array
var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];
console.log("First fruit:",fruits[0]);
console.log("Second fruit:",fruits[1]);
console.log("Last fruit:",fruits[fruits.length-1]);
console.log("Total Number of Fruits:",fruits.length);

 // Task 8 — Basic Calculator
let a = 20;
let b = 5;
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Modulus:",a%b);
console.log("Exponentation:",a**b);

 // Task 9 — Shopping Bill
var shirt = 999;
var pant = 1499;
var Shoes = 1999;
var total = shirt + pant + Shoes;
console.log("Total=",total);

// Task 10 — Simple Marks Calculation
var tamil = 80;
var english = 75;
var maths = 90;
var total = tamil + english + maths;
var average = total/3;
console.log("Total marks=",total);
console.log("Average marks=",average);

 // Task 11 — Post Increment
//  Expected output:
//     11
//     10
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);

 // Task 12 — Pre Increment
//  Expected output:
//     11
//     11
// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b);

 // Task 13 — Post Decrement
//  Expected output:
    // 19
    // 20
// let a = 20;
// let b = a--;
// console.log(a);
// console.log(b); 

 // Task 14 — Pre Decrement
//  Expected output:
    // 19
    // 19
// let a = 20;
// let b = --a;
// console.log(a);
// console.log(b);

 // Task 15 — Find the Final Values
//Expected output:
    // 7
    // 4
    // 7
    // 5
// let a = 5;
// let b = a++;
// let c = ++a;
// let d = b--;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

 // Task 16 — Assignment Operators
let num = 10;
num += 5;
console.log(num);

num = 10;
num -= 5;
console.log(num);

num = 10;
num *= 5;
console.log(num);

num = 10;
num /= 5;
console.log(num);

num = 10;
num %= 5;
console.log(num);

num = 10;
num **= 5;
console.log(num);

 // Task 17 — Mini Student Profile
var name = "Irfaan";
var age = 22;
var city = "Trichy";
var college = "SIT College";
var subjects = ["Tamil", "English", "Maths", "Science", "Computer"];
var student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("City:", student.city);
console.log("First subject:", student.subjects[0]);
console.log("Last subject:", student.subjects[student.subjects.length - 1]);
console.log("Total subjects:", student.subjects.length);
console.log("Complete object:", student);

 // Task 18 — User + Calculator
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);









 










