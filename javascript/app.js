import { groceryItems } from "./data.js";
import { createItems } from "./items.js";
import { createForm } from "./form.js";

let items = [...groceryItems];
let editId = null;

function render() {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";

  const formElement = createForm(
    editId,
    editId ? items.find((item) => item.id === editId) : null
  );
  const itemsElement = createItems(items);

  app.appendChild(formElement);
  app.appendChild(itemsElement);
}

export function updateItemName(newName) {
  items = items.map((item) => {
    if (item.id === editId) {
      return { ...item, name: newName };
    }
    return item;
  });
  editId = null;
  render();
  setTimeout(() => alert("Item Updated Successfully!"), 0);
}

export function setEditId(itemId) {
  editId = itemId;
  render();

  setTimeout(() => {
    const input = document.querySelector(".form-input");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }, 0);
}

render();