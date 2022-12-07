// function fn() {
//     return Promise.resolve("Hello");
// }

// fn()
//     .then(msg => {
//         console.log(msg);
//     })

//* async dışarıya bir promise nesnesi gönderiyor.
async function fn() {
    return "Hello";
}
// console.log(fn()); //* promise nesnesi
fn()
    .then(msg => {
        // console.log(msg);
    })

//********************************************* */

let isError = false;

function getCategory() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isError) {
                resolve("phone");
            } else {
                reject("error");
            }

        }, 1000);
    })
}

function getProducts(category) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`5 products in ${category}`);
        }, 1000);
    })
}
// getCategory()
//     .then(getProducts)
//     .then(res => console.log(res));
//     .click(err => console.log(err));

async function getProduct() {
    try {
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getProduct();