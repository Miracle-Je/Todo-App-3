const enterBtn = document.querySelector(".enter");
const container = document.querySelector("main");
const input = document.querySelector(".input");
let edit = document.querySelector(".edit");
let check = document.querySelector(".check");
let savePanel = document.querySelector(".save-cancel");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let loc = localStorage.getItem("value");
let currentTask;
alert(loc);
// newTodoText.value = storedInput;

// document.querySelector(".todo").value = localStorage.getItem("value");

enterBtn.addEventListener("click", function () {
  if (input.value.length == 0) {
    input.placeholder = "Please enter a task...";
    input.classList.add("placeholder-color");
  } else {
    listProperties();
    currentTask = input.value;

    // newTodoText.readOnly = true;
  }
});

function listProperties() {
  input.classList.remove("placeholder-color");
  input.placeholder = "Enter a task...";

  let newListContainer = document.createElement("div");
  newListContainer.classList.add("todo-list-container");
  container.appendChild(newListContainer);

  let newTodoContainer = document.createElement("div");
  newTodoContainer.classList.add("todo-list");
  newListContainer.appendChild(newTodoContainer);

  //Todo text output
  let newTodoText = document.createElement("input");
  newTodoText.classList.add("todo");
  newTodoContainer.appendChild(newTodoText);
  newTodoText.value = input.value;
  newTodoText.readOnly = true;
  localStorage.setItem("value", newTodoText.value);

  //Todo icon container
  let IconContainer = document.createElement("div");
  IconContainer.classList.add("icons");
  newTodoContainer.appendChild(IconContainer);

  //Check icon
  let checkBtn = document.createElement("div");
  checkBtn.innerHTML = ' <i class="fa fa-regular fa-square-check"></i>';
  IconContainer.appendChild(checkBtn);

  //Edit icon
  let editBtn = document.createElement("div");
  editBtn.innerHTML = '<i class="fa fa-light fa-pen-to-square"></i>';
  IconContainer.appendChild(editBtn);

  //Save panel
  let savePage = document.createElement("div");
  let saveBtn = document.createElement("button");
  let cancelBtn = document.createElement("button");
  savePage.appendChild(saveBtn);
  savePage.appendChild(cancelBtn);
  saveBtn.classList.add("btn");
  saveBtn.innerHTML = "Save";
  cancelBtn.classList.add("btn");
  cancelBtn.innerHTML = "Cancel";
  savePage.classList.add("save-cancel");
  savePage.classList.add("display");
  newListContainer.appendChild(savePage);

  input.value = "";

  checkBtn.addEventListener("click", function () {
    newTodoText.classList.toggle("read");
    checkBtn.classList.toggle("opacity");
  });

  editBtn.addEventListener("click", function () {
    savePage.classList.toggle("display");
    newTodoText.readOnly = false;
  });

  saveBtn.addEventListener("click", function () {
    newTodoText.value = newTodoText.value;
    savePage.classList.toggle("display");
    newTodoText.readOnly = true;
    alert("Save!👍");
  });

  cancelBtn.addEventListener("click", function () {
    savePage.classList.toggle("display");
    newTodoText.readOnly = true;
    newTodoText.value = loc;
  });
}

let myDate = new Date("03/30/ 2024 00:00:00");

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let day = hours * 24;

function countDown() {
  let currentDate = new Date();
  let timespan = currentDate;

  let daysLeft = Math.floor(timespan / day);
  let hoursLeft = Math.floor((timespan % day) / hours);
  let minutesLeft = Math.floor((timespan % hours) / minutes);
  let secondsLeft = Math.floor((timespan % minutes) / seconds);
  console.log(timespan, daysLeft, hoursLeft, minutesLeft, secondsLeft);

  // document.querySelector(".days").innerHTML = daysLeft;
  hour.innerHTML = hoursLeft;
  minute.innerHTML = minutesLeft;
  second.innerHTML = secondsLeft;
}

setInterval(countDown, seconds);
