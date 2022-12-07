//? Demo loops : Sayi Tahmin Oyunu
//? 1-10 arası rastgele üretilen bir sayiyi aşağı yukarı ifadeleri ile buldurmaya çalışın .
//? Kullanıcı kaç kere de bileceğini söylesin ve ona göre oyun sonunda puanlama yapın.

let num1 = Math.floor(Math.random() * 10 + 1);
let guess = prompt("Kac kere de bilebilirsin acaba ? ");
let num2;
let point = 100;
let minus = 100 / guess;

for (let i = 0; i < guess; i++) {
    num2 = Number(prompt("Tahmininizi giriniz : "));
    if (num2 == num1) {
        console.log(`Tebrikler bildiniz ve puanınız : ${point} .`);
        break;
    } else if (num2 > num1) {
        console.log("aşağı");
        point -= minus;
    } else {
        console.log("yukarı");
        point -= minus;
    }

    if (guess - 1 == i) {
        console.log(`Malesef sayimiz ${num1} 'ydi ama siz bilemediniz.`);
    }
}