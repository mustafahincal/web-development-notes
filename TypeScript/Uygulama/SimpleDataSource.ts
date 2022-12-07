import { Product } from "./Product";

export class SimpleDataSource {
    private products : Array<Product>;
    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Samsung","Telefon",1000),
            new Product(2,"Iphone","Telefon",2000),
            new Product(3,"Xiaomi","Telefon",3000),
            new Product(4,"Huawei","Telefon",4000),
        );
        // this.products = new Array<Product>();
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
        // this.products.push(new Product(1,"Samsung","Telefon",1000));
    }
    getProducts():Array<Product>{
        return this.products;
    }
}

let p = new SimpleDataSource();