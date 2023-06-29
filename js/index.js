document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-devices");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});

document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-games");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});

document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-community");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});

document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-support");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});

document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-developers");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});

document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-help");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});
