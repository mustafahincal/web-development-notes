//! Window Object

let val;
var a = 10;

function abc() {
    return 0;
};

val = window;

console.log(val);

//* alert
alert("hello");
// 
// window.alert("hello")


//* prompt
var b = prompt("bir sayi giriniz ");
console.log(b);
// prompt ile kullanıcıdan değer alabiliriz.


//* confirm
var c = confirm("emin misiniz?");
console.log(c);
// confirm ile tamam-iptalet seceneği olan bir kutu getirir biz tamam dersen true döndürürüz.
if (c) {
    console.log("ok");
} else {
    console.log("no");
}

//* scroll
let d;
d = window.scrollX;
d = window.screenY;
console.log(d);


//* location
let e = window.location;
// adresi verir

e = window.location.hostname;
e = window.location.href;
e = window.location.host;
e = window.location.protocol;
// window.location.reload();
// sayfamız sürekli yenilenir.
console.log(e);