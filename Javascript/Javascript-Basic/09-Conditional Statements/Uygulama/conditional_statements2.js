let id;
let password;

id = prompt("Who's there?");

if (id === "Cancel") {
    alert("Canceled.");
} else if (id === "Admin") {
    password = prompt("Password?");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "Cancel") {
        alert("Canceled.");
    } else {
        alert("Wrong Password");
    }
} else {
    alert("I don't know you");
}