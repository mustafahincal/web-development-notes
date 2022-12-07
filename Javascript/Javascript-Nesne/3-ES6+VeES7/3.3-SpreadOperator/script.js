function getTotal(a, b, c) {
    return a + b + c;
}

//console.log(getTotal(10, 20, 30));

let numbers = [10, 20, 30];

//* ES5
console.log(getTotal.apply(null, numbers));

//* ES6
console.log(getTotal(...numbers));


let arr1 = ["two", "three"];
let arr2 = ["one", "four", "five"];

//arr1.push(...arr2);
//arr1.unshift(...arr2);

let arr3 = ["one", ...arr1, "four", "five"];

console.log(arr3);

let h1 = document.querySelector("h1");
let divs = document.querySelectorAll("div");

let tags = [h1, ...divs];

tags.forEach((tag) => tag.style.color = "red");
console.log(tags);