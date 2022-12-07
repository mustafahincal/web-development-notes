//! Strings

const firstName = "Mustafa";
const lastName = "Hıncal";
const age = 20;
const hobbies = "sinema,spor,kitap,yazılım";
var val;
var val2;
var val3;
var isim = "Tunahan";

//* string concatenation

val = firstName + ' ' + lastName;

val = "Mustafa";
val += " Hıncal";

val = "Benim adım " + firstName + ' ' + lastName + " ve yaşım " + age + " Konya'da yaşıyorum";


//* string concat
val = firstName.concat(' ', lastName);

//* string length
val2 = val.length;
// length bir method değil property dir ( ) koymamıza gerek yoktur.

//* string uppercase-lowercase
val = val.toUpperCase();
val = val.toLowerCase();


//* substring
val2 = val.substring(2, 5);
// 2 numaralı indexden başlayıp 5 numaralı indexe kadar tanımlar.

//* substr *
val2 = val.substr(1, 5);
// 1 numaralı indexden başlayıp 5 tane karakterlik tanımlar.

//* slice
val4 = val.slice(5, 13);
// subsstring methodu ile aynı işlevi görür.

//* string replace
isim = "     " + isim.replace('u', 'g') + "    ";
// u'nun yerine g yi de yazıyor. normal de yer değiştirmesi gerekiyordu.

//* trim
isim = isim.trim();
// başında ve sonunda olan boşlukları trim methoduyla beraber temizledik.

//* indexof
val3 = val[1];
val3 = val.indexOf('f');
// indexof methodu a karakterinin indisini bize verir.
val3 = val.indexOf("hincal");
// hincal'in başladığı yerin indexini verir.

val = hobbies.split(",");
//* dersek eğer ',' karakterinden itibaren hepsini ayırır bir dizi oluşturur ve dikkat edersen verimizin türü stringden object e döndü.



console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);
console.log(val3);
console.log(typeof val3);
console.log(val4);
console.log(typeof val4);
console.log(isim);
console.log(typeof isim);