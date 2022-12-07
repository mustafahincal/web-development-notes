//! 1.Problem -) Global variable naming conflicts
//* script.js isimli dosyadan gelsin
var name = "Mustafa";

//* app.js isimli dosyadan gelsin
var name = "Tunahan";

console.log(name); //* son tanımlananı yazar. Ama genel olarak bu bir hatadır böyle bir şeyle karşılaşmak istemeyiz.

//! 2-) Encapsulation
var counter = {
   number: 0,
   increment: function () {
      return ++this.number;
   },
   decrement: function () {
      return --this.number;
   },
};

console.log(counter.increment());
counter.number = 10; //* nesnenin elemanına böyle erişememeliyiz , private olması gerekir.
console.log(counter.decrement());

//* 1-) IIFE (Immediately Invoked Function Expressions)
(function () {
   var name = "Mustafa"; //? fonksiyon içinde tanımladığımızda o değişken o fonksiyona aittir dışardaki başka bir tanımlama işi bozmaz.
   // console.log(name);
})();

(function () {
   var name = "Tunahan";
   // console.log(name);
})();

//* 2-)

// (function() {

//     //? private members
//     let number = 0;

//     let increment = function() {
//         return ++number;
//     }

//     console.log(increment()); //* burda erişebiliriz.

//     return {
//         //? public members
//     }
// })();

//* erişemeyiz
//console.log(number);
//console.log(increment());

let module = (function () {
   //* var module diyerek dışarıya açıyoruz. İsim veriyoruz. Bu normal fonksiyon gibi değil

   //? private members
   let number = 0;

   let increment = function () {
      ++number;
   };
   let decrement = function () {
      --number;
   };
   let getNumber = function () {
      return number;
   };
   increment();
   increment();
   increment();

   return {
      //? public members
      getNumber,
   };
})();

// console.log(module.number); //* diyerek yine ulaşamam hala private alandalar. return içine almam lazım.
//* ama return içine alacağım alanlarda önemli. number'a direk erişmemem gerekli fonksiyon üzerinden erişmem gerekli.
console.log(module.getNumber());

var module2 = (function () {
   var privateMethod = function () {};

   return {
      publicMethod: function () {},
   };
})();

module2.publicMethod();
