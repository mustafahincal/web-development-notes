document.querySelector("#getEmployee").addEventListener("click", loadEmployee);

function loadEmployee() {

    let loadImage = document.querySelector("#loading");
    loadImage.style.display = "block"

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.json", true);

    setTimeout(() => {
        xhr.onload = function() {

            loadImage.style.display = "none";

            if (this.status === 200) {
                //console.log(this.responseText);
                //* string türde döndürür ama ben object(array) istiyorum
                let employees = JSON.parse(this.responseText);
                //* xhr.responseText = this.responseText
                console.log(employees)

                let html = "";

                employees.forEach((employee) => {
                    html += `
                            <tr>
                                <td>${employee.firstName}</td>
                                <td>${employee.lastName}</td>
                                <td>${employee.age}</td>
                                <td>${employee.retired}</td>
                            </tr>   
                        `
                });

                document.querySelector("#employees").innerHTML = html;

            }
        }
        xhr.send();
    }, 1500)



}