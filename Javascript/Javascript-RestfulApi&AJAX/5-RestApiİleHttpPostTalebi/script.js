document.querySelector("#getOne").addEventListener("click", getOne);
document.querySelector("#getAll").addEventListener("click", getAll);
document.querySelector("#postData").addEventListener("click", postData);

function getOne() {
    let id = document.getElementById("postId").value;
    let url = "https://jsonplaceholder.typicode.com/posts/" + id;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (this.status === 200) {
            let post = JSON.parse(this.responseText);
            let html = `
                        <div class="card mb-5 bg-white text-dark">
                            <div class="card-header">
                            ${post.id}-${post.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${post.body}</p>
                                    
                                </blockquote>
                            </div>
                        </div>
                        `


            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();
}

function getAll() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (this.status === 200) {
            let posts = JSON.parse(this.responseText);
            let html = "";

            posts.forEach((post) => {
                html += `
                        <div class="card mb-5 bg-white text-dark">
                            <div class="card-header">
                            ${post.id}-${post.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${post.body}</p>
                                    
                                </blockquote>
                            </div>
                        </div>
                        `
            });

            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();

}

function postData() {
    const data = {
        userId: 1,
        title: "New Title",
        body: "New Body"
    }

    let json = JSON.stringify(data);

    let url = "https://jsonplaceholder.typicode.com/posts";

    let xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");

    xhr.onload = function() {
        if (xhr.status === 201 && xhr.readyState === 4) {
            var post = xhr.responseText;
            console.log(post);
            console.log(JSON.parse(post));

        }
        //* The HTTP 201 Created success status respons
        //* GET'de xhr.status; 200 olmalı SET'de xhr.status; 201 olmalı.
    }

    xhr.send(json);


}