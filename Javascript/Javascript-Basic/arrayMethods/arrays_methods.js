let data = [{
        _id: 1,
        name: "Mustafa",
        age: 20
    },
    {
        _id: 2,
        name: "Uğur",
        age: 20
    },
    {
        _id: 3,
        name: "Tunahan",
        age: 22
    },
    {
        _id: 4,
        name: "Atakan",
        age: 24
    },
    {
        _id: 5,
        name: "Büşra",
        age: 25
    },
    {
        _id: 6,
        name: "Merve",
        age: 26
    },
    {
        _id: 7,
        name: "Ramazan",
        age: 27
    },
    {
        _id: 8,
        name: "Ali",
        age: 28
    },
    {
        _id: 9,
        name: "Mehmet",
        age: 29
    }
]
console.log(data);      

//* find() 
let founded = null;

founded = data.find(item => (item._id == 2));
founded = data.find(item => (item.age > 24));
//? şartı sağlayan ilk veriyi döndürüyor.
//? şartı sağlayan eleman yoksa undefined döner.

console.log(founded);

//* findIndex()
// founded = data.findIndex(item => {

//     return true/false;
// })

founded = data.findIndex(item => (item._id == 4));
//? id'si 4 olan elemanın index'ini döndürür.
//? şartı sağlamayan eleman yoksa -1 döner.

console.log(founded);

//* indexOf()  ayrıca bir string method'u
let newArr = ["Gökhan", "Kandemir", "Mustafa", "Hıncal", "Kamil", 1, 2, 3, 4];
founded = newArr.indexOf("Mustafa");
founded = newArr.indexOf(2);
founded = newArr.indexOf(2, 7);
//? 7.index'den sonra 2 var mı?

console.log(founded);

//* filter()
founded = data.filter(item => item.age > 25);
//? age'i 25'den büyük olanları dizi olarak döndürür.
founded = data.filter(item => (item.age > 22 && item._id == 5));

console.log(founded);

//* map()
//? var olan bir array içerisinden bizim istediğimiz formatta bir array üretmemizi sağlar.
founded = data.map(item => item.name);
//? sadece name'lerden oluşan bir array elde ederiz.
founded = data.map(item => {
        return {
            age: item.age,
            id: item._id
        }
    })
    //? id ve age içeren object'leri içeren bir dizi elde ederiz.
founded = data.map(item  => {
    return `${item.name} (${item._id}) Yaş : ${item.age}`;
})

console.log(founded);

//! forEach'de return ve break deyimleri çalışmaz.