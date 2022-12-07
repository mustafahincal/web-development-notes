//! LOCAL STORAGE

let val;
let hobbies = ["sinema", "araba", "kitap"];

//* setItem
const firstName = localStorage.setItem("firstName", "Mustafa");
const lastName = localStorage.setItem("lastName", "Hıncal");

//* getItem
val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");
//? val değişkenine key'i lastName olan veriyi atadık.

//* removeItem
localStorage.removeItem("firstName");
localStorage.removeItem("lastName");

//* clear
localStorage.clear();
//? yaparsak eğer bütün bilgiler silinmiş olur.

//* set array to storage
localStorage.setItem("hobbies", hobbies);
//? böyle yaparsak normal bir string bilgi gibi yazar.

localStorage.setItem("hobbiess", JSON.stringify(hobbies));
//? bunu bir object şeklinde yazdırır storage'ye bir dizi şeklinde.

val = JSON.parse(localStorage.getItem("hobbiess"));
//? bir dizi şeklinde geri aldık.

console.log(val);
//console.log(window.localStorage)
console.log(localStorage);

//* localStorage içine gönderdiğimiz belli URL'ler ilişkilendirilmiş olan yapıları tarayıcı kapansa bile saklıyor , bilincli olarak silmemiz gerekiyor.


//! SESSION STORAGE

const city = sessionStorage.setItem("city", "Konya");
const country = sessionStorage.setItem("country", "Türkiye");


//console.log(window.sessionStorage)
console.log(sessionStorage);

//* sessionStorage içine attığımız bilgiler tarayıcı açıp kapanınca gider , tarayıcı acık kaldığı sürece saklanmasını istediğimiz bilgileri session storage içine atabiliriz.