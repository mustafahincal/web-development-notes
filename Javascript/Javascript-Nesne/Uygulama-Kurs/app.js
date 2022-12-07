class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI {
    constructor() {

    }
    addCourseToList(course) {
        const list = document.getElementById("course-list");
        var html = `
                    <tr>
                        <td><img src="img/${course.image}"></td>
                        <td>${course.title}</td>
                        <td>${course.instructor}</td>
                        <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
                    </tr>
                `;
        list.innerHTML += html;
    }
    clearControls() {
        document.getElementById("title").value = "";
        document.getElementById("instructor").value = "";
        document.getElementById("image").value = "";
    }
    deleteCourse(element) {
        if (element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
            return true;
        }
    }

    showAlert(message, className) {
        var alert = `
                    <div class="alert alert-${className}">
                        ${message}
                    </div>    
                    `;
        const row = document.querySelector(".row");
        //? beforeBegin,afterBegin,beforeEnd,afterEnd
        row.insertAdjacentHTML("beforeBegin", alert);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

class Storage {
    constructor() {

    }
    static getCourses() {
        let courses;
        if (localStorage.getItem("courses") == null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem("courses"));
        }
        return courses;
    }
    static displayCourses() {
        let courses = Storage.getCourses();
        const ui = new UI();
        courses.forEach(course => {
            ui.addCourseToList(course);
        })
    }
    static addCourse(course) {
        let courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));
    }
    static deleteCourse(element) {
        if (element.classList.contains("delete")) {
            const id = element.getAttribute("data-id");
            const courses = Storage.getCourses();
            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1);
                }
            })
            localStorage.setItem("courses", JSON.stringify(courses));
        }
    }
}

document.addEventListener("DomContentLoaded", Storage.displayCourses());


document.getElementById("new-course").addEventListener("submit", function(e) {

    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    //* create course object
    const course = new Course(title, instructor, image);

    //* create UI
    const ui = new UI();

    if (title === "" || instructor === "" || image === "") {
        ui.showAlert("Please complete the form", "warning");
    } else {
        //* show on the ui
        //? add course to list
        ui.addCourseToList(course);
        //? save to localStorage
        Storage.addCourse(course);

        //? clears controls
        ui.clearControls();

        ui.showAlert("The course has been added", "success");
    }

    e.preventDefault();
})

document.getElementById("course-list").addEventListener("click", function(e) {
    const ui = new UI();

    //? delete couse from list
    if (ui.deleteCourse(e.target) == true) {
        ui.showAlert("The course has been deleted", "danger");
        //? delete from localStorage
        Storage.deleteCourse(e.target);
    }
})