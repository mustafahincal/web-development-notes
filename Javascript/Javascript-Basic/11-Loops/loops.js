//! Loops


//* for loop

for (let i = 1; i < 10; i++) {
    // console.log(i);

    if (i == 3) {
        //  console.log("en sevdigim rakam : " + i);
        continue;
        // continue eklemeseydik 3 rakamını bi if içinde bir de for un içinde tekrar yazdırcaktı. contiune deyince kod tekrarını iptal ederiz i yi direk 4 yapar ordan devam eder.
    }

    if (i == 6) {
        //  console.log("en sevmedigim rakam : " + i);
        break;
        // break yapınca döngüyü kırar direk aşağıdan devam eder döngüden cıkmış oluruz.
    }


    //console.log(i);
}


//* while loop

let k = 0;
while (k < 10) {
    // console.log(k);
    k++
}

//* do while

let j = 0;

do {
    //  console.log(j);
    j++;
} while (j < 10);

// 10 dan 1 e kadar olan sayilarin toplami.
var toplam = 0;
for (i = 10; i > 0; i--) {
    toplam += i;
}
//console.log("10 dan 1 e kadar olan sayilarin toplami : " + toplam);

// 1 den 10 a kadar olan sayilarin carpimi.
var sonuc = 1;
for (i = 1; i <= 10; i++) {
    sonuc *= i;
}
//console.log("1 den 10 a kadar olan sayilarin carpimi : " + sonuc);

// 1 den 10 a kadar olan cift sayiların carpimi.
var result = 1;
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        result *= i;
    }
}
//console.log("1 den 10 a kadar olan cift sayiların carpimi :" + result);

// iç içe for döngüsü.
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        //console.log(`i = ${i} j = ${j}`);
    }
}