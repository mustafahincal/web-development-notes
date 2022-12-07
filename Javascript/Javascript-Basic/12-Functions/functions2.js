//! Function Declarations

function sum1(a, b) {
    var c = a + b;
    return c;
}
console.log(sum1(10, 20));


//! Function Expression

let sum2 = function(a, b) {
    var c = a + b;
    return c;
}

console.log(sum2(10, 20));

//? console.log(sum2(10,20,50,40)); 50 ve 40 degerlerini görmez.
//? console.log(sum2(10)); NaN degeri döndürür , buna güzel bir ayar çekebiliriz.

let sum3 = function(a, b) {

    if (typeof a === "undefined") {
        a = 0;
    }
    if (typeof b === "undefined") {
        b = 0;
    }

    var c = a + b;
    return c;
}
console.log(sum3(10)); //? bu sefer NaN döndürmez b yi 0 alır ve  10 döndürür direk.

//* ES6 Default Parameters

//? Burda başlangıc da 0 a eşitliyoruz eğer fonsksiyon'a  a'nın yerine bi şey gönderirlerse 0'ı ezer ve o değer olur ama gönderilmezse a 0 kalır.

let sum4 = function(a = 0, b = 0) {
    var c = a + b;
    return c;
}
console.log(sum4(20));


//* Arguments

function args() {
    console.log(arguments);
}
args(10, 20, 50, 60, 25);

//? fonksiyona gönderdiğimiz değerler arguments adı altında bir dizi de toplanıyor aslında , eğer biz başta fonksiyon içine a ve b diye tanımlarsak ilk iki sayımız o sayılara yerleşiyor ve onlarla işlem yaparsak yapmış oluyoruz diğerleri devreye girmiyor.

//? biz arguments'i böyle kullanabiliriz , bellekde bir yerde duruyor o sayılar hep ama arguments ile onları ortaya cıkarıyoruz.


function sumAll() {
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(10, 20, 50, 30, 40));