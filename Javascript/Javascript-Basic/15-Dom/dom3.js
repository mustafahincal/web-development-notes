//! Selecting Elements

//* Multiple Elements

//! class name
//! document.getElementByClassName()

let one;
one = document.getElementsByClassName("list-group-item"); //? böyle tüm elemanları HTMLCollection içinde bir dizi olarak gönderir.
console.log(one);
// one = document.getElementsByClassName("list-group-item")[0];
// one = one[2];

one[2].style.color = "purple";
one[1].style.fontSize = "22px";
one[0].textContent = "new item"

for (let i = 0; i < one.length; i++) {
    //console.log(one[i].style.color = "green");
}

// console.log(one);

//! document.getElementsByTagName()

let two;

two = document.getElementsByTagName("li");

two = document.getElementById("task-list").getElementsByTagName("a");
// two = document.getElementById("task-list");
// two = two.getElementsByTagName("a");
//? önce id'si task-list olan elementi aldık daha sonra o elementin içindeki a elemetlerini aldık.

// console.log(two);

//! document.querySelectorAll()

let tree;

tree = document.querySelectorAll("li");
console.log(tree)
    //? böyle tüm li elemanları NodeList içinde bir dizi olarak gönderir.

tree.forEach(function(item, a) {
    item.innerHTML = `${a} - Hello ${item}`;
    // console.log(item);
});
//? tüm li elemanlarını tek tek yazdırcaktır.

tree = document.querySelectorAll("li:nth-child(odd)");

tree.forEach(function(item) {
    item.style.background = "yellow"
});

//* burda bir diziyi NodeList olarak oluşturuyor yani foreach kullanarabiliriz ama yukarda getElements.. ile aldıklarımız da HTMLcollection olarak oluşturur orda kullanamayız.

//console.log(tree);