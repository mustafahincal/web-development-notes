var num = 15.563234;

//? toplamda 3 basamaklı kullan
console.log(num.toPrecision(3));

//? ondalık kısmı 4 basamakta sınırla
console.log(num.toFixed(4));

//? en yakın sayiya yuvarla
console.log(Math.round(num));

//? aşağıya yuvarla
console.log(Math.floor(num));

//? yukarıya yuvarla
console.log(Math.ceil(num));

//? 1,3,6,8,9,16,34 sayılarından en kücüğü ve en büyüğünü bul
console.log(Math.min(1, 3, 6, 8, 9, 16, 34));
console.log(Math.max(1, 3, 6, 8, 9, 16, 34));

//? sayi aralığını kullacının belirleyeceği rastgele bir sayı üretin.
var min = 50;
var max = 100;
console.log(Math.floor(min + Math.random() * (max - min)));

//? Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
//?   ** Brüt maaş  : 3700 TL
//?  ** Brüt mesai : 10.3 TL 
//?  Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
//?  Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?

var brutMaas = 3700;
var brutMesai = 10.3;
var mesaiSuresi = 42;
var topBrutMaas;
var netMaas;

topBrutMaas = brutMaas + (brutMesai * mesaiSuresi);
netMaas = topBrutMaas - (topBrutMaas * 0.25);

console.log("Toplam Brüt Maaş : " + topBrutMaas.toFixed(2));
console.log("Net Maaş : " + netMaas.toFixed(2));