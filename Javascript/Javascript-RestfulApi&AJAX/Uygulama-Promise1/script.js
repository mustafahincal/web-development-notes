// let condition = false;
// var p = new Promise(function(resolve, reject) {
//     if (condition) {
//         resolve("success");
//     } else {
//         reject("failure");
//     }
// });

// p.then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error);
// })

//**************************************** */

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve(5);
//     }, 1000);
// }).then(function(number) {
//     console.log(number);
//     return number * number;
// }).then(function(number) {
//     console.log(number);
//     return number * number;
// }).then(function(number) {
//     console.log(number);
// })

//**************************************** */

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: "Iphone X",
            price: 6000,
            color: "silver"
        }
        resolve(phone);
    } else {
        const error = new Error("mom is not happy");
        reject(error);
    }
})

const showToFriends = function(phone) {
    const message = "Hi friends this is my new phone " + phone.name;
    return Promise.resolve(message);
    // return new Promise((resolve, reject) => {
    //     resolve(message);
    // })

    // return message;
}

const askMom = function() {
    willGetNewPhone
        .then((showToFriends))
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err.message));
}

askMom();