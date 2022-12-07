//! Numbers

let val;
// val = 10;
// val = Number("10");
// val = parseInt("10");
// val = parseInt("10a"); dersek a yı almaz , 10 u integer olarak yazdırır.
// val = parseInt("a10"); dersek NaN döndürür yani integer yapamaz.

// val = isNaN("10");  isNaN  not a number demek. burda false döndürür.
// val = isNaN("a10"); burda true döndürür çünkü number değil.

// let num;
// num = 10.124365

//val = num.toPrecision(); 
// string'e dönüştürür ve hepsini yazdırır.
// val = num.toFixed(2);
// .toFixed ile .toPrecision arasındaki fark biri hepsi için biri sadece noktadan sonrası için kaç rakam olacağını belirliyor.

val = Math.PI;
val = Math.round(5.2);
// sonuc = 5 .round en yakın sayıya yuvarlar.
val = Math.ceil(2.2);
// sonuc = 3 .ceil her zaman yukarıya yuvarlar.
val = Math.floor(2.8);
// sonuc = 2 . floor her zaman aşağıya yuvarlar.
val = Math.sqrt(64);
// sonuc = 8 . sqrt bir sayının karakökünü alır.
val = Math.pow(2, 5);
// sonuc = 32 . pow üs alır.
val = Math.abs(-100);
// sonuc = 100 . abs sayının mutlak değerini alır.
val = Math.min(1, 2, 6, 8, 3, 2, -6);
// sonuc = -6 . min dizinin en kücük elemanını bulur.
val = Math.max(1, 2, 6, 8, 3, 2, -6);
// sonuc = 8 . min dizinin en buyuk elemanını bulur.
val = Math.random();
// random 0 ile 1 arasında rastgele bir sayı üretir.
val = Math.random() * 10;
// artık bana gelecek random sayı 0 ile 10 arasında rastgele bir sayıdur.
val = Math.floor(Math.random() * 100);
// böyle iki methodu da kullanabiliriz , örneğin random sayımız 37.4 ise floor onu 37 yapacak.


console.log(val);
console.log(typeof val);