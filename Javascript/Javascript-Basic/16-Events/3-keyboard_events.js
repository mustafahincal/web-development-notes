//! Keyboard Events

const input = document.querySelector("#txtTaskName");
const form = document.querySelector("form");
const select = document.querySelector("select");

// input.addEventListener("keydown", eventHandler);
// //? input'a klavyeden herhangi bir şey girdigimizde devreye girer.

// input.addEventListener("keyup", eventHandler);
// //? klavyeden elimi kaldırdığım an devreye girer.

// input.addEventListener("focus", eventHandler);
//? input içerisine tıkladığım zaman devreye girer.

// input.addEventListener("blur", eventHandler);
//? input içerisinden çıktığımız  zaman devreye girer.

// input.addEventListener("cut", eventHandler);
//? input içerisinde olan bir  metni kesersek devreye girer.

// input.addEventListener("paste", eventHandler);
//? input içerisine ctrl+v yaptığımız zaman gerçekleşir.

//input.addEventListener("select", eventHandler);
//? input içerisinde bir metni seçtiğimiz  zaman gerçekleşir.

//form.addEventListener("submit", eventHandler);
//? type'ı submit olan bir button'a tıkladığımız zaman olur.

//select.addEventListener("change", eventHandler);
//? select elementinde ki değiştirdiğimiz her secenekte devreye girer.


function eventHandler(e) {
    //console.log(`event type : ` + e.type);
    //console.log(`key code : ` + e.keyCode);
    //? key code ile kullanıcının hangi karaktere bastığını bulabiliriz.

    //console.log(`value : ` + e.target.value);
    //? e.target diyerek daha önce hangi elemente etki ettiğimizi görüyorduk , .value diyerek de içindeki degeri alabilioruz.

    //* e.target.style.backgroundColor = "Yellow"; diyerek input'a focus olduğu zaman arkaplan rengini değiştirtebiliriz.

    e.preventDefault();
}