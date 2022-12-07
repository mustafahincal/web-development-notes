//! Mouse Events

const bttn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");

//* click
// btn.addEventListener("click", eventHandler);
// ul.addEventListener("click", eventHandler);

//* doubleclick
// btn.addEventListener("dblclick", eventHandler);

//* mousedown
// btn.addEventListener("mousedown", eventHandler);
// //? button'a tıkladığımız an yazdırır.

//* mouseup
// btn.addEventListener("mouseup", eventHandler);
// //? button'a tıklayıp daha sonra çekerken yazdırır.

//* mouseenter
// ul.addEventListener("mouseenter", eventHandler);
// //? mouse ul cercevesi içine girerken devreye girer.

//* mouseleave
// ul.addEventListener("mouseleave", eventHandler);
// //? mouse ul cercevesinden çıkarken devreye girer.

//* mouseover
// ul.addEventListener("mouseover", eventHandler);
// //? mouseenter'den farkı sadece ul elementi değil ul elementinin içindeki elementlere de tek tek uygulanması.

//* mouseout
// ul.addEventListener("mouseout", eventHandler);
// //? mouseleave'den farkı sadece ul elementi değil ul elementinin içindeki elementlere de tek tek uygulanması.

//* mousemove
const h5 = document.querySelector("h5");
//? bunu mouse kordinatlarini yazdirmak için kullancaz.
ul.addEventListener("mousemove", eventHandler);
//? mouse'un cok kücük hareketine kadar sayar , üzerinde gezinmeleri.




function eventHandler(event) {
    //  console.log(`event type : ${event.type}`);

    //h5.textContent = `Mouse X : ${event.offSetX} Mouse Y : ${event.offSetY}`;
};