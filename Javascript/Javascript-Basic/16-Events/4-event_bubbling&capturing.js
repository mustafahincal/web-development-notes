//! Event Bubbling & Capturing

//* Event Bubbling

const formm = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// formm.addEventListener("click", function(e) {
//     console.log("form");
//     e.stopPropagation();
// });

// cardBody.addEventListener("click", function(e) {
//     console.log("cardBody");
//     e.stopPropagation();
// });

// card.addEventListener("click", function(e) {
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click", function(e) {
//     console.log("container");
//     e.stopPropagation();
// });

//? ben en dışa tıklasam sadece container gelir ama en iç e mesela input a tıklasam , sırasıyla hepsini tetiklemiş olurum.

//? stopPropagation() kullanarak sadece tıkladığımız yerin tetiklenmesini sağlarız.


//* Event Capturing

// formm.addEventListener("click", function(e) {
//     console.log("form");
// }, true);

// cardBody.addEventListener("click", function(e) {
//     console.log("cardBody");
// }, true);

// card.addEventListener("click", function(e) {
//     console.log("card");
// }, true);

// container.addEventListener("click", function(e) {
//     console.log("container");
// }, true);

//? ,true ekleyerek dışdan içe etki etmesini sağladık. Yani en içteki forma tıklarsam container den itibaren tetiklenecek.

//? eğer burada stopPropagation() kullanırsak forma tıklarız ve container i tetiklemiş oluruz sadece bu bir hatadır.

//* Bubbling olayını yani içden dışa doğru olanı kullanmak daha mantıklıdır.

const deleteItems = document.querySelectorAll(".fas fa-times");

deleteItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
        console.log(e.target);
    })
});

const ull = document.querySelector("ul");

ull.addEventListener("click", function(e) {

    if (e.target.className === "fas fa-times") {

        e.target.parentElement.parentElement.remove();
        //? böylece tıkladığımız her çarpı , dışındaki olan a etiketinden ve onun dışındaki li elementini silmemizi sağlar.

        e.preventDefault();
        //? her tıkladığımızda sayfa başına atmasın diye koyduk.
    }
})