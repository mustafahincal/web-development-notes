"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung", "Telefon", 1000), new Product_1.Product(2, "Iphone", "Telefon", 2000), new Product_1.Product(3, "Xiaomi", "Telefon", 3000), new Product_1.Product(4, "Huawei", "Telefon", 4000));
        // this.products = new Array<Product>();
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();
