// DISPLAY LIST OF FILTERS OR NOT
function dropdownListToggle(e) {
  const currentFilter = e.currentTarget.parentNode.parentNode;
  if (!currentFilter.classList.contains("dropdown-open")) {
    currentFilter.classList.add("dropdown-open");
  } else {
    dropdownListClose();
  }
}

function dropdownListOpen(e) {
  const currentFilter = e.currentTarget;
  if (!currentFilter.classList.contains("dropdown-open")) {
    dropdownListClose();
    currentFilter.classList.add("dropdown-open");
  }
}

function dropdownListClose() {
  const dropdownActuallyOpen = document.querySelectorAll(".dropdown-open");
  for (let i = 0; i < dropdownActuallyOpen.length; i++) {
    dropdownActuallyOpen[i].classList.remove("dropdown-open");
  }
}




