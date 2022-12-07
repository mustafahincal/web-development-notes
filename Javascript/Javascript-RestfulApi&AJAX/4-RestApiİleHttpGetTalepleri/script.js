document.querySelector("#getOne").addEventListener("click", getOne);
document.querySelector("#getAll").addEventListener("click", getAll);

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