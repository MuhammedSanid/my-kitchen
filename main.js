let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
let array = [];
let kitchenInputData;

function setLocalStorage() {
  localStorage.setItem("kitchenInput", JSON.stringify(array));
}

function getLocalStorage() {
  if (localStorage.getItem("kitchenInput")) {
    array = JSON.parse(localStorage.getItem("kitchenInput"));
    buildUI();
  }
}
function buildUI() {
    kitchenItemsList.textContent="";
  array.forEach((item) => {
    let li = document.createElement("li");

    let spanEle = document.createElement("span");
    li.appendChild(spanEle);
    spanEle.innerText = item;

    li.style.cssText = "animation-name:slideIn;";
    kitchenItemsList.appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();

    // create trash buton

    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas", "fa-trash");
    li.appendChild(trashBtn);

    // create a edit button
    let editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-edit");
    li.appendChild(editBtn);
  });
}

// create a function
function addKitchenItems(event) {
  kitchenInputData = kitchenInput.value;

  array.push(kitchenInputData);
  console.log(array);

  // set data to local storage
  setLocalStorage();

  // get from local storage
  getLocalStorage();
}

function deleteItom(event) {
  if (event.target.classList[1] === "fa-trash") {
    let item = event.target.parentElement;

    item.remove();
  }
}
function editItom(e) {
  if (e.target.classList[1] === "fa-edit") {
    let editedValue = prompt("please add new text here");
    let item = e.target.parentElement;
    let spanEl = item.querySelector("span");
    spanEl.innerText = editedValue;
  }
}

// add event listner
addBtn.addEventListener("click", addKitchenItems);
kitchenItemsList.addEventListener("click", deleteItom);
kitchenItemsList.addEventListener("click", editItom);

getLocalStorage();
