let a = 5;

a = 2;
a = "Mustafa";
a = true;


b: number;
var a = "Mustafa";
var c;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["a", 5, false];



(function(Payment) {
    Payment[Payment["kredi"] = 1] = "kredi";
    Payment[Payment["havale"] = 2] = "havale";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
var kredi = Payment.kredi; // 0
var havale = Payment.havale; // 1
var eft = Payment.eft; // 2