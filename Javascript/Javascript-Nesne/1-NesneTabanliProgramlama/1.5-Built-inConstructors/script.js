//* String

var str1 = "Sadık"; //? primitive
var str2 = new String("Sadık"); //? object

console.log(str1);
console.log(typeof str1);

console.log(str2);
console.log(typeof str2);

if (str1 === "Sadık") {
    console.log("yes"); //! yes , == olsa da yes
} else {
    console.log("no");
}

if (str2 === "Sadık") {
    console.log("yes"); //! == olsa yes olur çünkü tip kontrolsüz 
} else {
    console.log("no"); //! no
}

//? primitive değişkenin prototype'ı olmaz ve ona biz ekstra method'lar tanımlayamayız o yüzden bazı durumlarda new String , new Number diyerek object olarak tanımlarız.
String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
}

console.log("sadık".repeat(4));
//* Number

var num1 = 10; //? primitive
var num2 = new Number(10); //? object

//* Boolean

var bool1 = true; //? primitive
var bool2 = new Boolean(true); //? object

//* Object

var obj1 = { //? object
    name: "Sadık"
}

var obj2 = new Object({ //? object
    name: "Sadık"
});

//* Array

var arr1 = ["ada", "yigit", "mustafa"]; //? object
var arr2 = new Array("ada", "yigit", "mustafa"); //? object

console.log(arr1);
console.log(arr2);
var arr3 = new Array(3).join("ali");
console.log(arr3);

//? eğer ilerde olursa Array.prototype içine remove method'u eklerlerse bizim oluşturduğumuz method onu ezer. Bunun önüne geçmek için   Array.prototype.remove ||  bunu kullanırız.
Array.prototype.remove = Array.prototype.remove || function(member) {
    var index = this.indexOf(member);

    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
}

// Array.prototype.remove = function(member) {
//     var index = this.indexOf(member);

//     if (index > -1) {
//         this.splice(index, 1);
//     }
//     return this;
// }

console.log(arr1.remove("yigit"));