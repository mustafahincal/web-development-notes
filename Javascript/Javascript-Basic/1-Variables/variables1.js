//! Değişkenler

var age;
console.log(age);
// console ' a undefined olarak ekrana bakar çünkü tanımlamadık.

age = 20;
console.log(age);

var fullName = "Mustafa Hıncal";
console.log(fullName);

fullName = "Hıncal Mustafa";
console.log(fullName);
//  fullName değişkenimizin değeri en son atadıgımız olur.

//! Değişken Tanımlama Kuralları

//* Sayısal ifade ile başlayamaz
// var 1yas;  olmaz
var yas1;
var _yas2;
var $yas3;

//* Komut isimleriyle tanımlama yapılamaz
// var for;        var switch;


//* Case sensitive (büyük küçük harf duyarlı)
var firstName = "Mustafa";
var Firstname = "Sadık"
    // ikiside farklı değişkenlerdir

//* var , let , const
let city = "Konya";
console.log(city);
// var gibi kullanabiliriz.

const email = "abc@gmail.com";
console.log(email);
// const ile tanımladıklarımız sabit olur bir daha değiştirelemez.
// email = "bcd@gmail.com"  dersek hata alırız.