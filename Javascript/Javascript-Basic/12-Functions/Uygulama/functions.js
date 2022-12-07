//! Demo : Functions

var hesapA = {
    ad: "Mustafa Hıncal",
    hesapNo: "123456789",
    bakiye: 2000,
    ekHesap: 1000,
}

var hesapA = {
    ad: "Leyla Can",
    hesapNo: "123546085",
    bakiye: 3000,
    ekHesap: 2000,
}

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`); // hesap değişkeni yerine hesapA veya hesapB gelicek.

    if (hesap.bakiye >= miktar) {
        console.log("paranızı alabilirsiniz");
        hesap.bakiye -= miktar;
    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;
        if (toplam >= miktar) {
            if (confirm("ek hesabınızı kullanmak ister misiniz?")) {
                console.log("paranızı alabilirsiniz");
                var bakiye = hesap.bakiye;
                var ekhesapmik = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap - ekhesapmik;
            } else {
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır. `);
            }

        } else {
            console.log("üzgünüz bakiyeniz yetersiz");
        }
    }
}

paraCek(hesapA, 2000);
paraCek(hesapA, 3000);
// paraCek(hesapB,4000);

//*  Eğer object yerine tek tek tanımlama yapsaydım başta , fonksiyonun içine gönderdiğimiz değer ile oluşturduğumuz değer adresi aynı olmazdı , örneğin bakiye = bakiye - miktar yapmış olsam bu sadece fonksiyon içinde gerçekleşmiş olarak kalırdı.

//* Ama biz object olarak yaptığımız için adresiyle beraber göndermiş olduk fonksiyon içinde güncellediğimiz her şey her yerde güncellenmiş oldu.