import { Product } from "./Product";
import {ProductService} from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(2);

let p = new Product(2,"Sony","Telefon",3020);
_productService.saveProduct(p);

_productService.deleteProduct(_productService.getById(3));

result = _productService.getProducts();


console.log(result);