// let number = 5;
// number ="a";

// * javascrip'te let number = 5 dedikten sonra number değişkeninin type'ı number olur ama sonra number ="a" gibi bir şey dersem number değişkeninin type'ı string olur , herhangi bir hata vermez. Ancak typescript'te hata verir.

// ? *********************

// let a;
// * başlangıçta tipi belli olmadığı için 'any' olduğu için ben buna istediğim şeyi atayabilirim ardı ardına.

// a=2;  
// a="Mustafa";
// a=true; 
// * type'ı en son ne atadıysam o kalır.

// ? *********************

// let b:number;
// let a:string="Mustafa";
// let c:boolean;
// let d:any;
// let e:number[]=[1,2,3];
// let f:Array<number> =[1,2,3];
// let g:any[]=[1,"a",true];
// let h:[string,number,boolean]=["a",5,false];
// * böyle başlangıçta type'ınıda belirleyebilirim.
// b ='b';
// b=true;
// * number dışında bir şey atayamam.

// ? *********************

// const krediPayment = 0;
// const havalePayment =1;
// const eftPayment=2;

// enum Payment {
//     kredi,havale,eft
// }
// * index'leri gelir sırayla ama ben emin olmak istersem değer eşitleyebilirim.
// enum Payment {
//     kredi=1,havale=2,eft=3
// }
// let kredi = Payment.kredi; // 0
// let havale = Payment.havale; // 1
// let eft = Payment.eft; // 2

