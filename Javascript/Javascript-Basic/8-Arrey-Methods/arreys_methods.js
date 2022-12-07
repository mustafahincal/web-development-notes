//! Arreys

let names = ["mustafa", "hıncal", "merve", "yiğit"];

let years = [1999, 1992, 2001, 2010];

let mix = ["mustafa", "hıncal", 2001, null, undefined, ["sinema", "kitap"]];


//* get array item
console.log(names[3]);
console.log(names[0]);

//* set array item
names[0] = "harun";
names[5] = "mehmet";
// eğer 4 elemanlı bir dizinin 5.indexine bir eleman daha atarsak 4.index empty kabul edilir ve dizinin toplam eleman sayısı 1 değil 2 artıp 6 olur.
// eğer sadece dizinin sonuna bir eleman eklemek istersek dizinin uzunluğunu bulup oraya eklersek olur , 5 elemanlı dizinin son indexi 4 tür , 5 e ekleriz böylece.
names[names.length] = "ali";

//* add item
years.push(1987);
// dizinin en sonuna ekler
years.unshift(1987);
// dizinin başına ekler

//* remove item
years.pop();
// dizinin sonundaki eleman gider
years.shift();
// dizinin başındaki eleman gider

//* indexOf
let index = names.indexOf("merve");
console.log("index : " + index);

//* reverse
names.reverse();
// reverse ile diziyi ters döndürebiliriz


//* sort
years.sort();
// sayıları da alfatik yapar yani önce ilk basamaklara bakar örneğin 45 , 6 dan küçüktür alfabetik olarak.
// string bir ifadeyi ise alfabetik olarak sıralar


//* concat
let val = years.concat(names);
console.log(val);
// dizileri böyle birleştirebiliriz

//* splice
names.splice(2, 0, "seda");
names.splice(3, 1, "seda");
names.splice(4, 0);
// bir indexden sonrasına eleman ekleme , o indexden sonra şu kadar eleman silme veya sadece eleman silmek için splice kullanabiliriz.


function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}
console.log(over18(2005));

//* find
let val2 = years.find(over18);
// fonksiyona dizideki elemanları gönderiyor true dönen ilk elemanı yani 18 den büyük olmasını sağlayan elemanı val2 ye atıyor.
console.log(val2);

//* filter
let val3 = years.filter(over18);
console.log(val3);
// filter ile find arasındaki fark; find ilk bulduğu elemanı atar , filter o koşulu sağlayan her elemanı atar.





console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);