//  var xhr = new XMLHttpRequest();

//  xhr.onreadystatechange = function() {
//      if (xhr.readyState === 4 && xhr.status === 200) {
//          console.log(xhr.responseText);
//      }
//      //* xhr.readyState === 4 ise cevap hazır demektir.
//      //* xhr.status === 200 ise başarılı sonuç üretmiştir
//  }

//  xhr.open("GET", "msg.txt", true);
//  //* true -> asenkron , false -> senkron

//  xhr.send();

/**
  readyState : 
  0 : request not initialized
  1 : server connection established
  2 : request received
  3 : processing request
  4 : request finished and response is ready

  status : 
  200 : "OK"
  403 : "Forbidden"
  404 : "Not Found"
 */

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else if (xhr.status === 404) {
            console.log("Kaynak bulunamadi.");
        }

    }
}

xhr.onprogress = function() {
    console.log("on progressing");
}

xhr.open("GET", "msg.txt", true);
xhr.send();

console.log("hello");

//? çıktı : hello ardından on progressing en son hello there yazar. true yaptığımız için asenkron işlem olur ve diğer işlemleri block'lamaz.

//? false yapsaydım çıktı : hello there ardından hello olurdu.

/*
*   var xhr = new XMLHttpRequest();
*   xhr.onreadystatechange = function() {
!    if (xhr.readyState === 4 && xhr.status === 200) {
?         xhr.readyState === 4 && xhr.status === 200 ifadesi sunucuda veri yanıtının hazır olduğunu gösterir.
!    }
*}
*/