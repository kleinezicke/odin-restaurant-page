function loadMenu() {
    const content = document.querySelector("#content");
    content.classList.add("flex-container")

    const header = document.createElement("h2");
    header.textContent = "Our Menu";
    header.id = "our-menu";
    content.appendChild(header);

    const menu = ["Mystery Meat Burger", "Totally not rat Tartar",
                  "Maybe Beer"]
    for (let i = 0, l = menu.length; i < l; i++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        const itemName = document.createElement("h3");
        itemName.textContent = menu[i];

        content.appendChild(menuItem);
        menuItem.appendChild(itemName);
    }
}

export default loadMenu;