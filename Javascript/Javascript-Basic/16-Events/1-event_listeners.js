//! Event Listeners

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");


btn.addEventListener("click", function(e) {
    //    console.log("btn clicked");

    //* kullanıcı delete all , a etiketine tıkladığı zaman sayfa en üste tekrar gider biz bunu engellemek için şöyle yapabiliriz.( e önemsiz bir parametre )
    e.preventDefault();

    //* ve bu e parametresini daha da kullanabiliriz

    let val;
    val = e;
    val = e.target; //? hangi elemente tıkladığımızı gösterir
    val = e.target.id; //? tıkladıgımız elementin id sini verir
    val = e.target.classList; //? class attribute'nun içindekileri liste olarak verir
    val = e.type; //? click mi mouseover mi yaptığımızı verir

    //console.log(val);
});
// kullanıcı button'a tıkladığı zaman olacak işlem


btn.addEventListener("click", btnClick);
btn.addEventListener("click", btnClick2);
// //? bir button için 2 tane event uygulayabilirim.

// btn2.addEventListener("click", btnClick);

function btnClick() {
    console.log("btn clicked");
};

function btnClick2() {
    console.log("btn 2 clicked");
};