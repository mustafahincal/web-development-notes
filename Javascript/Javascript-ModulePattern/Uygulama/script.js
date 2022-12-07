const products = [
    { name: "Iphone", price: "2000" },
    { name: "Samsung", price: "3000" },
    { name: "Xiaomi", price: "4000" }
]

let productController = (function(data) {

    let collections = data || []; //* data değeri geliyorsa onu al gelmezse boş dizi oluştur.

    const addProduct = function(product) {
        collections.push(product);
    }
    const removeProduct = function(product) {
        let index = collections.indexOf(product);
        if (index >= 0) {
            collections.splice(index, 1);
        }
    }
    const getProducts = function() {
        return collections;
    }

    return {
        addProduct,
        removeProduct,
        getProducts
    }
})(products);



productController.addProduct(products[0]);
productController.addProduct(products[1]);
productController.addProduct(products[2]);

productController.removeProduct(products[1]);

console.log(productController.getProducts());

//* Module Extenting

var extended = (function(m) {
    m.sayHello = function() {
        console.log("hello from extended module");
    }
    return m;
})(productController || {});

extended.sayHello()
console.log(extended.getProducts());
productController.sayHello(); //* adres işlemi olduğu için  main module'ımızda değişir.