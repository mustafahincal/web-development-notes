let myObj = {
    url: "https://randomuser.me/api/?results=5"
}

let request = (obj) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url, true);
        //* obj.method null'sa "GET" devreye girer. null değilse obj.method ezer.

        if (xhr.headers) {
            Object.keys[obj.headers].forEach((key) => {
                xhr.setRequestHeader(key, obj.headers[key]);
            })
        }
        //* onreadystatechange yerine onload kullan.
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            /*
            else {
                reject(xhr.statusText);
            }*/
            //* aslında else'ye gerek yok çünkü ben hata olma durumunu aşağıda yaptım.
        }

        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.send(obj.body);
    })
}

let buildHtml = function(data) {
    let users = JSON.parse(data);
    let html = "";
    users.results.forEach(user => {
        html += `
                <div>
                    <img src="${user.picture.medium}">
                    <div>   
                        ${user.name.title}
                        ${user.name.first}
                        ${user.name.last}
                    </div>
                </div>
                `
    })
    document.querySelector("#users").innerHTML = html;

    return Promise.resolve("Html is loaded");
}

request(myObj)
    .then(buildHtml) //* data direk buildHtml'e gönderiliyor.
    .then((msg) => {
        console.log(msg)
    })
    .catch((err) => {
        console.log(err);
    });