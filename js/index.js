var checkboxes = document.querySelectorAll(".checkbox-j");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    checkboxes.forEach(function (otherCheckbox) {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});

document.addEventListener("click", function (event) {
  var list = document.querySelectorAll(".expand-list");

  list.forEach(function (item) {
    if (!item.contains(event.target)) {
      var checkbox = item.querySelector(".checkbox-j");
      checkbox.checked = false;
    }
  });
});

document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("list-help");
  var list = document.querySelector(".nav-items");
  if (!list.contains(event.target)) {
    checkbox.checked = false;
  }
});
