// ===========================
// Part 1: JavaScript Basics
// ===========================
let name = "Yamkela";
let age = 20;
let isStudent = true;

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

let total = 5 + 10 * 2;
console.log("Total:", total);

// ===========================
// Part 2: Functions
// ===========================
function greet(userName) {
    return "Hello, " + userName + "! Welcome to JavaScript practice.";
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

document.getElementById("greet-btn").addEventListener("click", function() {
    let output = greet(name);
    document.getElementById("greet-output").textContent = output;
});

document.getElementById("calc-btn").addEventListener("click", function() {
    let output = calculateTotal(15, 4);
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

let countdownEl = document.getElementById("countdown");
let countdownText = "";
for (let i = 5; i > 0; i--) {
    countdownText += i + " ";
}
countdownEl.textContent = "Countdown: " + countdownText;

// ===========================
// Part 4: DOM Manipulation
// ===========================
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("dom-text").textContent = "The text has changed! ✅";
});

document.getElementById("toggle-btn").addEventListener("click", function() {
    let p = document.getElementById("toggle-text");
    p.style.color = (p.style.color === "red") ? "black" : "red";
});

document.getElementById("add-item-btn").addEventListener("click", function() {
    let ul = document.getElementById("item-list");
    let li = document.createElement("li");
    li.textContent = "New item added!";
    ul.appendChild(li);
});

// ===========================
// Part 5: Interactive Features
// ===========================
// Dark mode toggle
document.getElementById("mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Counter functionality
let counter = 0;
let counterEl = document.getElementById("counter-value");

document.getElementById("inc-btn").addEventListener("click", () => {
    counter++;
    counterEl.textContent = counter;
});

document.getElementById("dec-btn").addEventListener("click", () => {
    counter--;
    counterEl.textContent = counter;
});

document.getElementById("reset-btn").addEventListener("click", () => {
    counter = 0;
    counterEl.textContent = counter;
});

// ===========================
// Part 6: Form Validation
// ===========================
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    let valid = true;

    let nameInput = document.getElementById("name").value.trim();
    let emailInput = document.getElementById("email").value.trim();
    let passwordInput = document.getElementById("password").value.trim();

    // Reset errors
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("form-success").textContent = "";

    // Name validation
    if (nameInput.length < 3) {
        document.getElementById("name-error").textContent = "Name must be at least 3 characters.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput)) {
        document.getElementById("email-error").textContent = "Enter a valid email address.";
        valid = false;
    }

    // Password validation
    if (passwordInput.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Final success message
    if (valid) {
        document.getElementById("form-success").textContent = "✅ Form submitted successfully!";
    }
});
