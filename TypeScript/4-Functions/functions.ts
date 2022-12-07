function getAverage(a:number,b:number,c:number): string{
    const result = (a+b+c)/3;
    return "result : "+result;
}

getAverage(10,20,30);
//* normal bir toplama fonksiyonuna sayı dışında bir şey göndermek hata olur : ama ben bu hatayı runtime'da değilde compiletime'da göreyimki hatamı düzelteyim. O yüzden typescript type tanımlamasını kullanabilirim.


function getAverage2(a:number,b:number,c?:number): string{
    let total = a+b;
    let count=2;
    if(typeof c !== "undefined"){
        total+=c;
        count++;
    }
    const result = total/count;
    return "result : "+result;
}

getAverage2(10,20);

//* 3 parametre isteyen bir fonksiyona 2 parametre gönderirsem hata verir ancak c?:number diye tanımlarsam 2 parametre gönderdiğim durumda hata vermez.

// ? *********************

//* ne kadar sayı göndereceğim belli değilse

function getAverage3(...numbers: number[]): string{
    let total = 0;
    let count=0;
    
    for(let i=0 ; i<numbers.length;i++){
        total+=numbers[i];
        count++;
    }
    const result = total/count;
    return "result : "+result;
}

getAverage3(10,20,30,50,60);

//* dönüş tipini void yaparsam bir şey return etmeyeceğim demek anlamına gelir ve return yazma durumunda hata verdirir.



