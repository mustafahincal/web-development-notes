const taskList = document.querySelector("#task-list");
const form = document.querySelector("form");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const buttonAdd = document.querySelector("#btnAddNewTask");
const input = document.querySelector("#txtTaskName");
let items;


addEventListeners();
loadItems();


function addEventListeners() {
    form.addEventListener("submit", addNewItem);
    // ekleme butonunu alıp 'click' işlemi de ekleyebilirdim.

    taskList.addEventListener("click", deleteItem);

    btnDeleteAll.addEventListener("click", deleteAll);
}

function loadItems() {

    items = getItemsFromLS();
    items.forEach(function(item) {
        createItem(item);
    })
}

function getItemsFromLS() {
    if (localStorage.getItem("items") == null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function(item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    })
    localStorage.setItem("items", JSON.stringify(items));
}

function createItem(text) {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.innerHTML = text;

    const a = document.createElement("a");
    a.className = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = "<i class='fas fa-times'></i>";

    li.appendChild(a);

    taskList.appendChild(li);
}

function addNewItem(e) {

    if (input.value == "") {
        alert("Add new item!");
    } else {

        createItem(input.value);

        setItemToLS(input.value);

        input.value = "";

    }

    e.preventDefault();

}

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        if (confirm("are you sure ?")) {
            e.target.parentElement.parentElement.remove();
            console.log(e.target.parentElement.parentElement.textContent);
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }

    }

    e.preventDefault();
}

function deleteAll(e) {

    if (confirm("Are you sure?")) {
        /*
            tasklist.childNodes.forEach(function(item) {
                if (item.nodeType == 1) {
                    item.remove();
                    //* nodeType 1 olursa element olduğunu anlıyorum.
                }
            })
        */
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }

    e.preventDefault();
}