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

let newList = data
            .filter(item => item.age > 25)
            .map(item => item.name);
            
// console.log(newList);    böyle arka arkaya da kullanabiliriz methodları.


//* .reduce()
//? .reduce( (toplam , herEleman) => { ... } , başlangıcDegeri )
let ageSum = data.reduce((sum,item) => sum + item.age,0);
// console.log(ageSum);    

//* .some()
let result = data.some(item => item.age >50);
// data dizisi içinde bir elemanın bile age'i 50'den fazla olursa true sonucnu verir.
// console.log("result : "+ result);  


//* .every()
result = data.every(item => item.age >20);
// true vermesi için her item'ın age'i 20 den büyük olmalı.
result = data.every(item => item.hasOwnProperty("age"));
// hasOwnProperty kullanarak age özelliği var mı yok mu öğreniliriz.
console.log(result);

//* startsWith()
//* endsWith()
let name = "Mustafa Hıncal";
console.log(name.startsWith("Mus"));
console.log(name.endsWith("cal"));

/************************************* */

let persons = [
    {
        name:"Mustafa",
        fv_1:"field 1",
        fv_2:"field 2",
    },
    {
        name:"Atakan",
        fv_1:"field 4",
        fv_2:"field 5",
        fv_3:"field 6"
    },
    {
        name:"Ahmet",
        fv_1:"field 7",
        fv_3:"field 9"
    }
]

let finalPersons = persons.map(item => {
    Object.keys(item).forEach(key => {
        if(!key.startsWith("fv")){
            delete item[key];
        }
        
    })
    return item;
})
console.log(finalPersons);


//* .flat()
let array = [1,2,3,4,5,[6,7],[8,9,[10,11]]];
console.log(array.flat(Infinity));
//? flat() (flat(1)) 1 köşeli parantezden kurtarır
//? flat(2)  2 köşeli parantezden kurtarır (derinlik katıyo)
//? flat(Infinity) sonsuz derinliğe kadar kurtarır