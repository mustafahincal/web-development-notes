export class Product{
    constructor(
        public id?:number,public name?:string,public category?:string , public price?:number
        )
        {}
        //* normalde public demesek public oluyor dedik ama yukardaki gibi tanımlayacaksam oraya gelen değişkenin Class'ın değişkenine direkt eşitleneceği için mecbur belirtmem gerekir. 
}

let p = new Product();