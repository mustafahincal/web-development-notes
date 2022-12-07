//* Callback Functions

let val;


// function multipleByTwo(a, b, c,) {
//     let arr = [];
//     for (let i = 0; i < 3; i++) {
//         arr[i] = arguments[i] * 2;
//     }
//     return arr;
// }

// function addOne(a) {
//     return a + 1;
// }

// val = multipleByTwo(5, 10, 15);

// for (let i = 0; i < val.length; i++) {
//     val[i] = addOne(val[i]);
// }

// console.log(val);


function multipleByTwo(a, b, c, callback) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = callback(arguments[i] * 2);
    }
    return arr;
}

function addOne(a) {
    return a + 1;
}

function addTwo(a) {
    return a + 2;
}

val = multipleByTwo(5, 10, 15, addTwo);

console.log(val);

//? fonksiyona gönderilen şeyin fonksiyon olduğundan emin olmak için;
function multipleByTwo(a, b, c, callback) {
    let arr = [];

    if (callback && typeof callback === "function") {
        for (let i = 0; i < 3; i++) {
            arr[i] = callback(arguments[i] * 2);
        }
    }

    return arr;
}

//* anonymous function

val = multipleByTwo(5, 10, 15, function(a) {
    return a + 1;
})