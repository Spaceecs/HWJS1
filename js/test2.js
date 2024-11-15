const currentYear = 2024;
let birthYear = prompt("Enter your year of birth");
birthYear = parseInt(birthYear);

if (!isNaN(birthYear) && birthYear > 0 && birthYear <= currentYear) {
    let age = currentYear - birthYear;
    alert(`You are ${age} years old.`);
} else {
    alert("Invalid year of birth. Please enter a valid number.");
}
