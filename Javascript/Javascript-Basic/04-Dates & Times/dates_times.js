//! Date Object

let d = new Date();
// dediğimiz zaman şuanın tarihi ve zamanı içeren bir object tanımlamış oluyoruz.
let birthday = new Date(2001, 9, 28);
// dediğimiz zaman kendi istediğimiz vakti oluşturuyoruz.
console.log(d);
console.log(typeof d);

//* --- Get Methods ---

console.log(d.getDate());
// getDate methoduyla sadece günü aldık.
console.log(d.getDay());
// getDate methoduyla bugünün haftanın kaçıncı günü olduğunu aldık.
console.log(d.getFullYear());
// getFullYear metoduyla yıl bilgisini aldık.
console.log(d.getHours());
// getHours ile saat bilgisini aldık.
console.log(d.getMonth());
// getMonth ile kaçıncı ayda olduğumuzu sayi ile verir ve ocak=0 olduğunu unutmayalım.
console.log(d.getSeconds());


console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

//* --- Set Methods ---

d.setFullYear(2020);
// setFullYear methodu ile yılı değiştirdik
d.setMonth(4);
d.setDate(23);
d.setHours(22);
d.setMinutes(54);