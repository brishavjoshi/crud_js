import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = [...groceryItems];

function render() {
  const app = document.getElementById("app");
  if (!app) return;
  
  app.innerHTML = "";
  const itemsElement = createItems(items);
  app.appendChild(itemsElement);
}

export function editCompleted(itemId) {
  items = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  render();
}

render();