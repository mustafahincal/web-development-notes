//! Demo : Strings

var sentence = " Template literals or template strings is the ability have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye ü ö ş";

//? cümle kaç karakterlidir?
console.log(sentence.length);


//? cümle kaç kelimeden oluşuyor?
// var uzunluk = sentence.trim().split(' ')
// console.log(uzunluk.length);
// uzunluk artık bir dizi ve biz onun uzunluğunu bulabiliriz.

console.log(sentence.trim().split(' ').length);


//? tüm cümleyi kücük harfe cevirin
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

//? cümlenin başındaki ve sonundaki boşlukları siliniz
console.log(sentence.trim());

//? '-' karakterini silin
console.log(sentence.replace('-', ''));
// yerine getireceğimiz karakter boşlukda olabilir ama ben hiçbir şey gelsin istemedim.


//? url'nin içinden str kısmını cıkarınız
var str = "http://";
// console.log(url.replace("http://", ''));
console.log(url.slice(str.length));
// str nin karakter uzunluğunu bulup , ordan başlangıc degerini slice yaparsam http kısmını almaz.


//? url hangi protocol'u kullanmaktadır? (http,https)
console.log(url.startsWith("http"));
// http ile başladığı için true değeri döndürür.
console.log(url.startsWith("https"));
// false değer döndürür.

//? url , '.com' ifadesini içeriyor mu ?
console.log(url.indexOf('.com'));
// eğer bize -1 sonucu vermezse içeriyor demektir.
console.log(url.includes(".com"));
// includes methodu bir index göndermek yerine true false gönderir.


//? url string idafesini geçerli bir url olarak düzenleyiniz
console.log(url.toLowerCase()
    .replace(/ /g, '-')
    .replace(/ı/g, 'i')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
);

//* replace(' ','-') dersek sadece 1.boşluğu - yapar ama biz hepsini yapmasını istiyoruz.Onuda
//* replace(/ /g , '-') ile yapabiliriz.