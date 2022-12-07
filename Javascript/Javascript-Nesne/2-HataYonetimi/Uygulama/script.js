document.getElementById("errors").style.color = "red";
document.getElementById("myBtn").addEventListener("click", function(e) {

    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var errors = document.getElementById("errors");

    errors.textContent = "";
    try {
        if (name.value.length === 0) {
            throw new Error("Name is Required!!");
        }

        if (name.value.length > 20) {
            throw new Error("Name is too long!!");
        }

        if (age.value.length === 0) {
            throw new Error("Age is Required!!");
        }

        if (isNaN(age.value)) {
            throw new Error("Age is not numeric!!");
        }

        console.log("Form is submitted");

    } catch (e) {
        errors.textContent = e.message;
    } finally {
        console.log("finally");
    }


    e.preventDefault();
})