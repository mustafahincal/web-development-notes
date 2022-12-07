let message = "Hello World";
let count = message.length;

//* message'yi başta direk string bir ifadeye eşitlediğimiz için ; message. dedikten sonra string metodları direkt önümüze gelir.

let message2;
message2 = "Hello World";
let count2 = (<string>message2).length;
let count3 = (message as string).length;

//* message2 başta any olarak tanımlanır , biz daha sonra ne kadar string bir ifadeye eşitlesekte message2. dedikten sonra string metodları gelmez. bu yüzden type ataması yaparız.