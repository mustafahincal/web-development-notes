//! Traversing the Dom : Dom Elementleri üzerinde Gezinme

let val;

let list = document.querySelector(".list-group");
console.log(list)

val = list;

val = list.childNodes;
//? dersek NodeList olarak dizi gelir. Ve dizi içine satır boşlukları (text node)'larda dahil edilir.
//* val=list.children dersek HTMLCollection dizi olarak gelir.

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // 3 döndürür -> text node
val = list.childNodes[1].nodeType; // 1 döndürür -> element


val = list.children;
val = list.children[0];
val = list.children[2];
val = list.children[2].textContent = "new item";
val = list.children[3].children;
//? böylece ulaşmış olduğumuz li elementinin içindeki elemenlere de ulaşabiliriz.

val = list.firstChild; //* ilk eleman gelir.
val = list.firstElementChild; //* ilk element gelir.

val = list.lastChild; //* son eleman gelir.
val = list.lastElementChild; //* son element gelir.

val = list.childElementCount; //* sectigimiz elementin içinde kaç tane element var onu sayar.

val = list.parentNode; //* sectigimiz ul elementini kapsayan diğer element parent olur. parentNode'larda text node lar felan da dahil olduğu için ; parentNode ile parentElement eşit olmayabilir.
val = list.parentElement;

val = list.parentElement.parentElement; //* böylece parent'in parent'ine gitmiş oluruz.

val = list.children[0].nextSibling; //* aynı seviyede ki bir sonraki eleman.
val = list.children[0].nextElementSibling; //* aynı seviyede ki bir sonraki element. Eger yoksa öyle bir element veya eleman , null degeri döndürür.

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;

for (let i = 0; i < list.children.length; i++) {
    //console.log(list.children[i]);
}

for (let i = 0; i < list.childNodes.length; i++) {
    if (list.childNodes[i].nodeType === 1) {
        console.log(list.childNodes[i]);
    }
}
//? ===1 deyip sadece li elemanlarını yazdırdık , ===3 dersek sadece text node'ları yazdırırdık.


// console.log(val);