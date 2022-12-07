//! Demo : Arrays

//? "Bmw,Mercedes,Oped,Mazda" elemanlarına sahip bir dizi oluşturun.
let carmodels = [];
carmodels = ["Bmw", "Mercedes", "Opel", "Mazda"];
console.log(carmodels);

//* let carmodels = ["Bmw", "Mercedes", "Opel", "Mazda"];
//* let carmodels = new Array("Bmw", "Mercedes", "Opel", "Mazda") şeklinde de oluşturabilirz.

//? Dizi kaç elemanlıdır?
console.log(carmodels.length);

//? Dizinin ilk ve son elemanı nedir?
console.log("Ilk eleman : " + carmodels[0]);
console.log("Son eleman : " + carmodels[carmodels.length - 1]);

//? "Renault" degerinin dizinin sonuna ekleyin
carmodels.push("Renault");
console.log(carmodels);
//* carmodels[carmodels.length]="Renault";  da diyebilirz.


//? "Toyota" değerini dizinin başına ekleyin
carmodels.unshift("Toyota");
//* shift baştaki elemanı siler unshift baş tarafa ekler.
console.log(carmodels);

//? "Renault" değerini siliniz 
carmodels.pop();
console.log(carmodels);

//? "Toyota" degerini siliniz
carmodels.shift();
console.log(carmodels);

//? Dizi elemanlarını ters cevirin
carmodels.reverse();
console.log(carmodels);

//? Dizi elemanlarını alfabetik olarak sıralayın
carmodels.sort();
console.log(carmodels);

//? [5, 89, 1, 2] dizisini sıralayın
let numbers = [5, 89, 1, 2, 15, 34];
numbers.sort();
console.log(numbers);

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(numbers.sort(compare));

//? "Opel" degeri dizinin bir elemanımıdır?
console.log(carmodels);
console.log(carmodels.indexOf("Opel"));
// var ise kaçıncı index de olduğunu söyler yoksa -1 döndürür.
console.log(carmodels.includes("Opel"));
// var ise true , yok ise false döndürür.

//? var str="Chevrolet, Dacia" 
//? ifadesini diziye ceviriniz.
var str = "Chevrolet, Dacia";
console.log(str);

let arr = str.split(",");
// virgülden ayırarak bir dizi haline çevirdik.
console.log(arr);

//? Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin
let arr2 = carmodels.concat(arr);
console.log(arr2);

//? Oluşturulan diziden son 2 eleman siliniz.
// console.log(arr2.pop());
// console.log(arr2.pop());
// console.log(arr2);

arr2.splice(arr2.length - 2, 2);
console.log(arr2);

//? Aşağıda verilen elemanları bir dizi içerisinde saklayınız
//?  studentA : Yiğit bilgi 2010
//?  studentB : Sena Turan 1999
//?  studentc : Mustafa Hıncal 2001

var studentA = ["Yiğit", "Bilgi", 2010];
var studentB = ["Mustafa", "Hıncal", 2010];
var studentC = ["Mehmet", "Yüce", 2010];

var students = [studentA, studentB, studentC];

console.log(students);
console.log(students[0]);
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);