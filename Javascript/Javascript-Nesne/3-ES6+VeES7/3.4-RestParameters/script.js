//* ES5

function sumES5() {
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    //? arguments bir array olsaydı arguments.slice dememiz yeterli olurdu ama arguments bir object.Yukardaki işlemi yaparak arguments'i bir array'e çevirmiş oluyoruz.

    let result = 0;
    arr.forEach(function(item) {
        result += item;
    });
    return result;
}

console.log(sumES5(10, 20, 30));

//* ES6

function sumES6(...arr) {

    let result = 0;
    arr.forEach((item) => result += item);
    // arr.forEach(function(item) {
    //     result += item;
    // })
    return result;
}
console.log(sumES6(10, 20, 30, 40));


//* ES6
function isDriver(age, ...years) {
    years.forEach((year) => {
        console.log(2018 - year >= age);
    });
}
isDriver(18, 1990, 2000, 2005, 2010);
//? fonksiyona years parametrelerinden başka bi şey göndereceksem bunu en başa yazmayalıyım çünkü diğer türlü ...years ifadesi kaç tanesini kapsayacağını bilemez.