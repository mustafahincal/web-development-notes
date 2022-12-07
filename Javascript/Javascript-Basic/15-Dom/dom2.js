//! Selecting Elements

//* Single Elements

//! document.getelementById()
let val;
val = document.getElementById("header");
val = document.getElementById("header").id; //? id'si header olan elementin id'sini atadık.
val = document.getElementById("header").className;

val = document.getElementById("header");
//? yaptıkdan sonra val'i kullanarak işlem yapabilirim.
// val = val.id;

val.style.fontSize = "60px";
val.style.color = "red";
val.style.fontWeight = "bold";
// val.style.display = "none";

//? id'si header olan h1 elementimin içeriğini innerText ile kontrol edebilirim.
document.getElementById("header").innerText = "My Todo List";
//* textContent'i de kullanabilirsin.

//? eğer my todo list içine b etiketi eklemek istersem bunu innerHTML kullanarak yapmam gerek.
document.getElementById("header").innerHTML = "<b>My ToDo List</b>";

//console.log(val);

//! docunment.querySelector()
let valo;

valo = document.querySelector("#header"); //? id'si header olanı aldık.
valo = document.querySelector(".classhncal"); //? class'ı classhncal olan ilk elemanı alır.
valo = document.querySelector("div");

document.querySelector("li").style.color = "red";
//? ilk bulduğu li elementinin rengini kırmızı yapar , hepsini yapmaz.

document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(2)").style.color = "green";

document.querySelector("li:nth-child(3)").textContent = "task item";

// document.querySelector("li").className = " "; böyle class ındaki değerleri boşaltabiliriz.

document.querySelector("li").className = "list-group-item list-group-item-warning";
//? burda olan klasları değiştirebiliriz.

document.querySelector("li").classList.add("active");
//? yeni bir class ekleyebiliriz.

//console.log(valo);