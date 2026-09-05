 // Task 1 — For Loop

 for(let i = 1; i<=10; i++){
    console.log(i);    
}

 // Task 2 — Reverse Number

for(let i = 10; i>=1; i--){
    console.log(i);    
}

 // Task 3 — Even Numbers

for(let i = 1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);        
    }
}

 // Task 4 — Odd Numbers

for(let i = 1; i <= 20; i += 2){
    console.log(i);    
}

 // Task 5 — Multiplication Table

// let num = prompt("Enter Your Number:");
// for(let i = 1; i <= 10; i++){
//     console.log(num + "x" + i + "=" + (num * i));    
// }

 // Task 6 — Countdown

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

 // Task 7 — Sum of Numbers

// let i = 1;
// let sum = 0;
// while(i <= 10){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

 // Task 8 — Print Numbers

let i = 1;
do{
    console.log(i);
    i++;
}while(i <= 5);

 // Task 9 — Do While Understanding

 console.clear();
// let a = 10;
// do{
//     console.log(a);
//     a++;
// }while(a <= 5);
// do...while runs once before checking the condition, so 10 gets printed even though the condition is false.

 // Task 10 — String Characters

let name = "javascript";
for(let char of name){
    console.log(char);    
}

 // Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(let fruit of fruits){
    console.log(fruit);    
}

 // Task 12 — Student Names

let students = ["Arun", "Priya", "Ramesh", "Suresh", "Dhanush"]
for(let student of students){
    console.log("Students:" + student);    
}

 // Task 13 — Employee Object

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// for(let key in employee){
//     console.log(key,employee[key]);    
// }

 // Task 14 — Product Object

 let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};
for (let key in product) {
    console.log(key, product[key]);
}

 // Task 15 — Simple Function

function welcome() {
    console.log("Welcome to Javascript!");    
}
welcome();
welcome();
welcome();

 // Task 16 — Function With Parameter

function greet(name){
    console.log("Hello " + name);    
}
greet("Naveen");
greet("Arun");
greet("Priya");

 // Task 17 — Multiple Parameters

function student(name, age, department) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}
student("Naveen", 20, "ECE");
student("Arun", 21, "CSE");
student("Priya", 22, "IT");

 // Task 18 — Addition Function

// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);

 // Task 19 — Salary

// function salary(amount) {
//     return amount;
// }
// let result = salary(25000);
// console.log(result);

 // Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}
let total = bonus(50000, 5000);
console.log(total);
console.clear();
 // Task 21 —  Default Parameter

function employee(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}
employee("Arun");
employee("Priya", "Designer");

 // Task 22 — Named Function

function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(4));
console.log(square(5));
console.log(square(7));
console.log(square(10));

 // Task 23 — Anonymous Function  

// let calculate = function(a, b) {
//     return a + b;
// };
// let result = calculate(10, 20);
// console.log(result);

 // Task 24 — Arrow Function

// let multiply = (a, b) => {
//     return a * b;
// };
// let result = multiply(10, 5);
// console.log(result);

 // Task 25 — Predict the Output

// function test() {

//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test();
// Inside the block: a, b, c → accessible.
// Outside the block: a → accessible, b and c → not accessible.
// var is function-scoped, while let and const are block-scoped.

 // Task 26 — Predict
//  Output : undefined
var a;
console.log(a); 
a = 10;

 // Task 27

//Predict: Cannot access 'b' before initialization
// console.log(b);
// let b = 20;

 // Task 28
// Predict: Cannot access 'c' before initialization
// console.log(c);
// const c = 30;

// Then explain the difference between the three - var is hoisted and gives undefined, while let and const give a ReferenceError because they cannot be accessed before declaration.

 // Task 29 — Self Invoking Function

(function () {
    console.log("Welcome to JavaScript");
})();
(function (product, discount) {
    console.log(product + " has a " + discount + "% discount");
})("Laptop", 10);

 // Task 30 — Callback / Higher-Order Function

function welcome() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcome);

 // Task 31 — Cashback

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let result = cashback();
for (let value of result) {
    console.log(value);
}
console.clear();
 // Task 32 — Employee Management Console

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];
// 1. for...of - Print every employee

for (let employee of employees) {
    console.log(employee);
}

// 2. for...in - Print keys and values

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + ": " + employee[key]);
    }
}

// 3 & 4. Function with parameters - Display employee information

function displayEmployee(name, age, department, role, salary) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
}

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}

// 5. Return - Return employee salary

function getSalary(employee) {
    return employee.salary;
}

console.log("Arun Salary: " + getSalary(employees[0]));

// 6. Condition - Salary >= 40000

for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary of 40000 or more");
    }
}

// 7. Arrow function - Simple calculation

let calculateBonus = (salary) => {
    return salary * 10 / 100;
};

console.log("Bonus: " + calculateBonus(40000));

// 8. Generator - Employee benefits

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}