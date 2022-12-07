var a = 10;
var b = a;

console.log(a); //! 10
console.log(b); //! 10

var obj1 = {
    ad: "merve",
    age: 11
}

var obj2;
obj2 = obj1; //? adresleri eşitlemiş oldum

console.log(obj1.age); //! 11
console.log(obj2.age); //! 11

obj1.age = 12;

console.log(obj1.age); //! 12
console.log(obj2.age); //! 12

console.log("****************************");

var num = 50;
var account = {
    name: "Yiğit",
    accountNumber: "123456"
}

function update(a, b) {
    a = 100;
    b.accountNumber = "000000";
}

update(num, account);
//? num -> a sadece değer ataması yapıldığı için değişiklik sadece o function içinde değişir.
//? account -> b adres ataması yapıldığı için değişiklik her yerde oldu

console.log(num); //! 50
console.log(account.accountNumber); //! 000000

console.log("****************************");

var products = [
    { name: "product name ", price: 1000 },
    { name: "product name ", price: 1000 },
    { name: "product name ", price: 1000 },
    { name: "product name ", price: 1000 },
    { name: "product name ", price: 1000 },
    { name: "product name ", price: 1000 }
]

function filterProducts(prd) {

}

filterProducts(products);