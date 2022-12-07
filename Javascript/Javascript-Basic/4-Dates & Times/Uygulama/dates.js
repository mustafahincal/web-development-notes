//? Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

let dt = new Date();
console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getMonth() + 1);
console.log(dt.getDate());


//? Tarih ve Saat bilgisini içeren bir date objesi oluşturunuz.

let dtA = new Date("28/10/2001 14:58:21");
let dtB = new Date(2010, 7, 24, 14, 50, 10);
console.log(dtA);
console.log(dtB);

//? 1/1/1990 tarihinden bir gün öncesini gösteriniz.

var dtC = new Date(1990, 1, 1);
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1)
console.log(dtC);


//? İki tarih arasındaki geçen zamanı bulunuz.

var start = new Date(1990, 1, 1);
var end = new Date(1991, 1, 1);

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gün = saat / 24;
var ay = gün / 30;
var yıl = ay / 12;


console.log("milisecond : " + milisecond);
console.log("saniye: " + saniye);
console.log("dakika: " + dakika);
console.log("saat: " + saat);
console.log("gün: " + gün);
console.log("ay: " + ay);
console.log("yıl: " + yıl);

//? Yaş hesaplama nasıl yapılır?

var birthday = new Date(2001, 9, 28);

// console.log(birthday.getTime()); diyerek milisaniye cinsinden 1970 den o tarihe kadar olan zamanı alırız.
// console.log(Date.now());  diyerek de 1970 den şimdiki zamana kadar olan toplam zamanı milisecond cinsinden alırız.

var ageDifMs = Date.now() - birthday.getTime();
console.log(ageDifMs); // milisaniye olarak sonucu verir.
// var ageDate = new Date(ageDifMs);  dersek bizim için otomatik tarihe cevirir.

var ageDate = new Date(ageDifMs);
console.log(ageDate.getFullYear() - 1970);
// 1970 i cıkarmayı unutmuyoruz.

//? Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?

var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1);
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);