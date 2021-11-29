function loadMenu() {
    const content = document.querySelector("#content");
    const menu = ["Mystery Meat Burger",
                  "Maybe Beer"]
    for (let i = 0, l = menu.length; i < l; i++) {
        const menuItem = document.createElement("div");
        const itemName = document.createElement("h3");
        itemName.textContent = menu[i];

        content.appendChild(menuItem);
        menuItem.appendChild(itemName);
    }
}

export default loadMenu;