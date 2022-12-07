import { IProductService } from "./IProductService";
import {Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

    private dataSource:SimpleDataSource;
    private products:Array<Product>;
    //? private products : Product[]; diye de tanımlayabiliriz.

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }

    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0];
        //? this.products.filter(p => p.id === id) sonucunda bir dizi elde ediyoruz , o dizinin ilk elemanını göndermek için [0] koyduk.
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null){
            product.id=this.generateId();
            this.products.push(product);
        }else{
            let index;
            this.products.forEach((prd,i) => {
                if(prd.id === product.id){
                    index=i;
                }
            });
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }
    }
    private generateId():number{
        let key = 1;
        while(this.getById(key)!=null){
            key++;
        }
        return key;
    }

}