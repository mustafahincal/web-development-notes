//?  Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

//?  Müşteri adı
//?  Müşteri soyadı
//?  Müşteri tc kimlik
//?  Müşteri sipariş toplamı
//?  Müşteri cinsiyet
//?  Müşteri adres bilgisi
//?  Müşteri hobiler

let customerName = "Mustafa";
let customerLastName = "Hıncal";
let customerId = "123456789";
let total = 205.6;
let gender = "true"; // erkek true
let address = { // object
    city: "konya",
    district: "karatay",
    body: "fetih mahallesi",
}
let hobbies = ["Sinema", "Yüzme", "Kitap"]; // array



//? Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1 = "150";
var order2 = "100";

var totalOrder = Number(order1) + Number(order2);
console.log(totalOrder);


//? Aşağıdaki siparişlerin toplamını hesaplayınız.

var order3 = Number("100.2");
var order4 = Number("150.5");

var totalOrder2 = order3 + order4;
console.log(totalOrder2);


//? Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order5 = parseInt("100.2");
var order6 = parseInt("150.5");

var totalOrder3 = order5 + order6;
console.log(totalOrder3);


//? Aşağıda verilen doğum yılına göre yaş hesaplayınız.

const yearOfBirth = 1986;
// ilerde yanlışlıkla başka değer atanmasına karşın değişkenimi const ile tanımladım.

console.log(new Date().getFullYear() - yearOfBirth);
//* new Date().getFullYear()  diyerek bugünün yılını aldık.


//? Aşağıdaki string ifadenin karakter sayısını bulunuz.

var course = "Modern Javascript Kursu";

console.log(course.length);