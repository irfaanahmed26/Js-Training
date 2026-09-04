 // Task 1 — Variables

// var name = "Irfaan";
// let age = 22;
// const city = "Madurai";
// var college = "SIT";
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(college);

//changing the var value
// name = "Ahmed";
// console.log(name);

//changing the let value
// age =23;
// console.log(age);

//changing the const value //const cannot be changed
// city = "Chennai";
// console.log(city);

//Try redeclaring each variable and observe what happens

//var
// var name = "Irfaan";
// var name = "Ahmed";
// console.log(name);

//let
// let age = 22;
// let age = 23;
// console.log(age);

//const
// const city = "Madurai";
// const city = "Chennai";
// console.log(city);

 // Task 2 — Printing Statements

 //console.log()
// console.log("Hello World!");

//alert()
// alert("Welcome to javascript");

//confirm()
// confirm("Are you ready to continue");

//prompt()
// var name =prompt("Enter Your Name:");
// console.log(name);

//document.writeln()
// document.writeln("Hello "+name);

 // Task 3 — User Details

// var name = prompt("Enter Your Name");
// console.log("Name:",name);
// var age = prompt("Enter Your Age");
// console.log("Age:",age);
// var city = prompt("Enter Your City");
// console.log("City:",city);
// var qualification = prompt("Enter Your Qualification");
// console.log("Qaulification:",qualification);

 // Task 4 — Find Data Types

let language = "javascript";
console.log(typeof language,language);
let number = 100;
console.log(typeof number,number);
let decimal = 99.5;
console.log(typeof decimal,decimal);
let value1 = true;
console.log(value1, typeof value1);
let value2 = false;
console.log(value2, typeof value2);
let value3 = undefined;
console.log(value3, typeof value3);
let value4 = null;
console.log(value4, typeof value4);

 // Task 5 — Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log(students[0]);
console.log(students[1]);
console.log(students[students.length-1]);
console.log(students.length);

 // Task 6 — Employee Object

let employee = {
    name : "Irfaan",
    age : 22,
    role : "Full Stack Developer",
    skills : ["Python","Html","css","javascript"],
    isWorking : true,
    qualification : ["BE","ME"]
};
console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.isWorking);
console.log(employee.qualification[employee.qualification.length-1]);

 // Task 7 — Calculator

// let a = 20;
// let b = 5;
// console.log("Addition:",a+b);
// console.log("Subtraction:",a-b);
// console.log("Multiplication:",a*b);
// console.log("Division:",a/b);
// console.log("Modulus:",a%b);
// console.log("Exponentation:",a**b);

// Task 8 — Shopping Bill

// let pant = 1499;
// let Shoes = 1999;
// let shirt = 999;
// let bag = 799;
// let total = shirt + pant + Shoes + bag;
// console.log("Total=",total);

 // Task 9 — Increment & Decrement

 //A:
 //  Expected output:
//     11
//     10
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);

//B:
//  Expected output:
//     11
//     11
// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b);

//C:
//  Expected output:
//     09
//     10
// let a = 10;
// let b = a--;
// console.log(a);
// console.log(b);

//D:
//  Expected output:
//     09
//     09
// let a = 10;
// let b = --a;
// console.log(a);
// console.log(b);

 //Task 10 — Assignment Operator Tasks

let num = 10;

num += 5;
console.log(num);

num = 10;
num -= 3;
console.log(num);

num = 10;
num *= 2;
console.log(num);

num = 10;
num /= 4;
console.log(num);

num = 10;
num %= 3;
console.log(num);

num = 10;
num **= 2;
console.log(num);

 // Task 11 — Find Output

// console.log(10>5);        //true
// console.log(10 < 5);      //false
// console.log(10 >= 10);    //true
// console.log(10 <= 9);     //false
// console.log(5 == "5");    //true
// console.log(5 === "5");   //false
// console.log(10 != "10");  //false
// console.log(10 !== "10"); //true

 // Task 12 — AND

// console.log(true && true);   //true
// console.log(true && false);  //false
// console.log(false && true);  //false
// console.log(false && false); //false

 // Task 13 — OR

// console.log(true || true);   //true
// console.log(true || false);  //true
// console.log(false || true);  //true
// console.log(false || false); //false

 // Task 14 — NOT

// console.log(!true);     //false
// console.log(!false);    //true
// console.log(!(5 > 10)); //true
// console.log(!(10 > 5)); //false

 // Task 15 — Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);   //false
console.log(10 > 5 && 8 < 12 || 4 === "4");     //true
console.log(7 === 7 && 10 != "10" || 5 >= 5);   //true
console.log(15 < 10 || 20 > 15 && 5 == "5");    //true

// Task 16 — Voting

// let age = 20;
// let result = age >= 18 ? "Eligible to vote" : "Not Eligible";
// console.log(result);

 // Task 17 — Password

let password = true;
console.log(password ? "Login Successful" : "Wrong Password");

// Task 18 — User Introduction

//Using +
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// console.log("My name is " + name +". I am " + age + " years old.I live in " + city + ".");

// Using template literals `${}`
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);

 // Task 19 — String Conversion

 let a = String(100);
let b = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

 // Task 20 — Number Conversion

 console.log(Number());           //0
console.log(Number(""));         //0
console.log(Number("123"));      //123
console.log(Number("a1"));       //NaN
console.log(Number(true));       //1
console.log(Number(false));      //0
console.log(Number(undefined));  //NaN
console.log(Number(null));       //0

 // Task 21 — Boolean Conversion

console.log(Boolean());             //false
console.log(Boolean(""));           //false
console.log(Boolean("hello"));      //true
console.log(Boolean(123));          //true
console.log(Boolean(true));         //true
console.log(Boolean(false));        //false
console.log(Boolean(undefined));    //false
console.log(Boolean(null));         //false
console.log(Boolean([]));           //true
console.log(Boolean({}));           //true

 // Task 22 — Voting Eligibility

// let age = prompt("Enter Your Age:");
// if (age>=18){
//     console.log("You Can Vote");
// }else{
//     console.log("You Can't vote");
// }

//  // Task 23 — Positive or Negative

let Num = prompt("Enter Your Number:");
if(Num>0){
    console.log("Positive");
}else if(Num<0){
    console.log("Negative");    
}else{
    console.log("Zero");    
}

 //Task 24 — Grade System

// let marks = prompt("Enter your marks:");
// if (marks >= 90 && marks <= 100) {
//     console.log("A Grade");
// } else if (marks >= 80) {
//     console.log("B Grade");
// } else if (marks >= 70) {
//     console.log("C Grade");
// } else if (marks >= 60) {
//     console.log("D Grade");
// } else {
//     console.log("Fail");
// }

 // Task 25 — Job Eligibility

 // let age = prompt("Enter your age:");
// let height = prompt("Enter your height:");
// let weight = prompt("Enter your weight:");
// if (age >= 18) {
//     if (height >= 160) {
//         if (weight >= 60) {
//             console.log("Congratulations! You are selected");
//         } else {
//             console.log("You are not selected because your weight is below 60");
//         }
//     } else {
//         console.log("You are not selected because your height is below 160");
//     }
// } else {
//     console.log("You are not selected because your age is below 18");
// }

 // Task 26 — Traffic Light

let color = prompt("Enter traffic light color:");
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

 // Task 27 — Day

let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

 // Task 28 — Student Result System

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));
let total = tamil + english + maths;
let average = total / 3;
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}
let voting;
if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}
console.log(`Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}`);