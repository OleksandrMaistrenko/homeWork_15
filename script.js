const add_btn = document.getElementById("add_btn");
const clearButton = document.getElementById("clear_button");
const input_list = document.getElementById("input_list");

function onAddButtonClick() {
  const value = document.getElementById("user_input").value;

  if (value && value.trim().length > 0) {
    const li = document.createElement("li");
    const remove_li_btn = document.createElement("button");

    remove_li_btn.classList.add("minor_buttons");
    remove_li_btn.innerHTML = "x";

    li.innerHTML = value;
    input_list.appendChild(li);
    li.appendChild(remove_li_btn);
  }
}

add_btn.addEventListener("click", onAddButtonClick);

function removeItem(event) {
  if (event.target.nodeName === "BUTTON") {
    const li = event.target.closest("li");
    if (li) {
      li.remove();
    }
  }
}

document.addEventListener("click", removeItem);

function clearText() {
  const userInput = document.getElementById("user_input");

  userInput.value = "";
}

clearButton.addEventListener("click", clearText);
