//! Removing & Changing Nodes : Element silme & Güncelleme

const tasklist = document.querySelector("#task-list");

//* removing element
// tasklist.remove();  direk ul elementini siler
// tasklist.childNodes[1].remove();  ul elementi içindeki 1.indisli elemanı siler yani li'yi.
// tasklist.children[0].remove();
// tasklist.removeChild(tasklist.children[3]);

//* removing attribute
// tasklist.children[0].removeAttribute("class");
/*
for (let i = 0; i < tasklist.children.length; i++) {
    tasklist.children[i].removeAttribute("class");
}
*/

//* Replacing element
// const cardHeader = document.querySelector(".card-header");

//? create element
// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);

// console.log(cardHeader);

//* Classes

let valo;

link = tasklist.children[0];
link = tasklist.children[0].firstElementChild; // tasklist.children[0].children[0];

valo = link.className; // class'ın içeriğini verir.
valo = link.classList; // class'ı bir dizi içerisinde getirir.

link.classList.add("new");
//? böylece yeni bir class ekleyebiliriz.

link.classList.remove("new");
//? böylece var olan bir class'ı kaldırabiliriz.

//* Attributes
link.setAttribute("data-id", "5");
valo = link.getAttribute("data-id");
valo = link.getAttribute("href");
link.setAttribute("href", "http://mustafahincal.com");
valo = link.getAttribute("href");

valo = link.hasAttribute("href");
//? href diye bir attribute var mı ? yok mu ? var ise true değer döndürür.

console.log(valo);



//console.log(tasklist);