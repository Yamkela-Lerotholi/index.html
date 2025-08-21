// ===========================
// Part 1: JavaScript Basics
// ===========================

// Variable declarations
let name = "Yamkela";
let age = 20;
let isStudent = true;

// Conditional example
if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

// Operator example
let total = 5 + 10 * 2;
console.log("Total:", total);

// ===========================
// Part 2: Functions
// ===========================

// Function 1: Greeting
function greet(userName) {
    return "Hello, " + userName + "! Welcome to JavaScript practice.";
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// DOM interaction: buttons for functions
document.getElementById("greet-btn").addEventListener("click", function() {
    let output = greet(name);
    document.getElementById("greet-output").textContent = output;
});

document.getElementById("calc-btn").addEventListener("click", function() {
    let output = calculateTotal(15, 4); // price 15, quantity 4
    document.getElementById("calc-output").textContent = "Total price: $" + output;
});

// ===========================
// Part 3: Loops
// ===========================

let fruits = ["Apple", "Banana", "Orange", "Mango"];
let list = document.getElementById("fruits-list");

fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
});

// Countdown using a for loop
let countdownEl = document.getElementById("countdown");
let countdownText = "";
for (let i = 5; i > 0; i--) {
    countdownText += i + " ";
}
countdownEl.textContent = "Countdown: " + countdownText;

// ===========================
// Part 4: DOM Manipulation
// ===========================

// Change text
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("dom-text").textContent = "The text has changed! ✅";
});

// Toggle color
document.getElementById("toggle-btn").addEventListener("click", function() {
    let p = document.getElementById("toggle-text");
    if (p.style.color === "red") {
        p.style.color = "black";
    } else {
        p.style.color = "red";
    }
});

// Add new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
    let ul = document.getElementById("item-list");
    let li = document.createElement("li");
    li.textContent = "New item added!";
    ul.appendChild(li);
});
