//! Functions

function yasHesapla(dogumYili) {
    return 2021 - dogumYili;
}

let ageAda = yasHesapla(1983);
let ageYigit = yasHesapla(1997);
let ageCeyda = yasHesapla(2001);

console.log(ageAda);
console.log(ageCeyda);
console.log(ageYigit);

function emekligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`Sayin ${isim} , emekli olmanıza ${emeklilik} yıl kaldı.`);
    } else {
        console.log(`Sayin ${isim} , siz zaten emeklisiniz`);
    }

}
emekligeKacYilKaldi(1987, "Mustafa");
emekligeKacYilKaldi(1963, "Hasan");
emekligeKacYilKaldi(1945, "Ali");