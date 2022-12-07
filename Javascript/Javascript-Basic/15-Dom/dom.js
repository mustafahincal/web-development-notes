//! Document Object Model : DOM

let val1;
let val2;

val1 = window.document; //* document'in yani html sayfasının hepsi consol'a gelir.
val2 = document.all; //* elementlerin hepsini konsola dizi olarak aktarır.
val2 = document.all.length; //* dizinin uzunlugunu verir.
val2 = document.all[34];
val2 = document.head; //* head kısmına böyle ulaşabiliriz.
val2 = document.body; //* body kısmına böyle ulaşabiliriz.
val2 = document.anchors; //* anchors(linkler-a etiketleri) kısmına böyle ulaşabiliriz.
val2 = document.location;
val2 = document.title;
val2 = document.images;
val2 = document.forms;
val2 = document.forms[0];
val2 = document.forms[0].id; //* 0.indisli formun id'sini aldık.
val2 = document.forms[0].method;
val2 = document.forms[0].action;
val2 = document.scripts;
val2 = document.scripts[1];
val2 = document.scripts[1].getAttribute("src"); //* src attirbute'nda ne yazıyorsa onu aldık.

// console.log(val1);
//console.log(val2);