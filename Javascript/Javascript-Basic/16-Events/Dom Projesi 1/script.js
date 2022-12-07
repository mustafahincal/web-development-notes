// UI vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

//* load items
loadItems();

//* call event listeners
eventListeners();

function eventListeners() {

    //* submit event
    form.addEventListener("submit", addNewItem);

    //* delete an item
    taskList.addEventListener("click", deleteItem);
    //? a etiketleri taskList içinde , event bubbling ve if yapısını kullanarak içindeki çarpı ya yani a etiketine ulaşabiliriz.

    //* delete all items
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {

    items = getItemsFromLS();

    items.forEach(function(item) {
        createItem(item);
    })
}

//* get item from Local Storage
function getItemsFromLS() {

    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

//* set item to Local Storage
function setItemtoLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}

//* delete item from Local Storage
function deleteItemFromLS(text) {
    items.getItemsFromLS();
    items.forEach(function(item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem("items", JSON.stringify(items));
}

//* create item
function createItem(text) {

    //* create li
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";

    li.appendChild(document.createTextNode(text));
    //? li.textContent = input.value;

    //* create a
    const a = document.createElement("a");
    a.className = "delete-item float-right";
    a.setAttribute("href", "#")
    a.innerHTML = "<i class='fas fa-times'></i>"

    //* add a to li
    li.appendChild(a);

    //* add li to ul
    taskList.appendChild(li);
}

//* add new item
function addNewItem(e) {

    if (input.value === "") {
        alert("add new item");
    }

    //* create item
    createItem(input.value);

    //* save to Local Storage
    setItemtoLS(input.value);

    //* clear input
    input.value = "";

    e.preventDefault();
}

//* delete an item
function deleteItem(e) {

    //? if kullanmazsak taskList(ul) içinde herhangi bir yere tıkladığım zaman Item silinir biz bunu istemiyoruz.
    //? eğer if e girerse button'a tıklamışız demektir.

    if (e.target.className === "fas fa-times") {
        if (confirm("are you sure ?")) {
            e.target.parentElement.parentElement.remove();

            //* delete item from Local Storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }


    e.preventDefault();
}

//* delete all items
function deleteAllItems(e) {

    if (confirm("are you sure ?")) {
        // taskList.innerHTML = " ";
        /*
        ////? childnodes ile foreach kullanabilirim.
        taskList.childNodes.forEach(function(item) {
            if (item.nodeType === 1) {
                ////? nodeType , element olduğunda 1 değerini alır.
                item.remove();
            }
        });
        */
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();
    }

    e.preventDefault();
}