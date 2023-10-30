console.log("hey");

// # SELECT BOX
const selectBoxes = document.querySelectorAll(".custom-select");

// # A function that will close all select boxes in the document, except the current select box

const closeAllSelect = function (curSelectBox) {
  const allCustomItemSelected = document.querySelectorAll(".select-selected");

  allCustomItemSelected.forEach((selectedItem) => {
    if (curSelectBox === selectedItem) return;

    selectedItem.classList.remove("select-arrow-active");

    selectedItem.nextElementSibling.classList.add("select-hide");
  });
};

/* ---------------------------------------------------- */

selectBoxes.forEach((selectBox) => {
  const selectElement = selectBox.getElementsByTagName("select")[0];
  const selectOptions = [...selectElement.options];

  // * For each element, create a new DIV that will act as the selected item

  const customItemSelected = document.createElement("DIV");
  customItemSelected.setAttribute("class", "select-selected");

  customItemSelected.innerHTML =
    selectElement.options[selectElement.selectedIndex].innerHTML;

  selectBox.appendChild(customItemSelected);

  // * For each element, create a new DIV that will contain the option list

  const customOptionsList = document.createElement("DIV");
  customOptionsList.setAttribute("class", "select-items select-hide");

  selectOptions.forEach((option, index) => {
    // * For each option in the original select element, create a new DIV that will act as an option item

    if (index === 0) return;

    const customOptionItem = document.createElement("DIV");
    customOptionItem.innerHTML = option.innerHTML;

    customOptionItem.addEventListener("click", function (e) {
      // * When an item is clicked, update the original select box, and the selected item

      for (i = 0; i < selectOptions.length; i++) {
        if (selectOptions[i].innerHTML == this.innerHTML) {
          selectElement.selectedIndex = i;
          customItemSelected.innerHTML = this.innerHTML;

          const sameAsSelected =
            this.parentNode.querySelector(".same-as-selected");

          sameAsSelected?.removeAttribute("class");

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
    });
    customOptionsList.appendChild(customOptionItem);
  });

  selectBox.appendChild(customOptionsList);

  customItemSelected.addEventListener("click", function (e) {
    // * When the select box is clicked, close any other select boxes

    e.stopPropagation();
    closeAllSelect(this);

    // * Open/close the current select box
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
});

document.addEventListener("click", closeAllSelect);
