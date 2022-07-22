const pageLoad = () => {
    
    const content = document.querySelector("#content");

    const header = document.createElement("header");
    document.body.insertBefore(header, content)

    const nav = document.createElement("nav")
    header.appendChild(nav);
    const tabs = document.createElement("ul")
    nav.appendChild(tabs);

    const footer = document.createElement("footer")
    document.body.appendChild(footer);

    const createTab = (name, id = name.toLowerCase()) => {
        const tab = document.createElement("li")
        tab.textContent = name;
        tab.id = id;

        tabs.appendChild(tab);
    }

    const restaurantName = document.createElement("h1")
    restaurantName.textContent = "Questionable Food";
    tabs.appendChild(restaurantName);

    createTab("Home");
    createTab("Menu");
    createTab("Contact");
    /*const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Questionable Food";

    const img = new Image();
    img.src = restaurant;

    const  text = document.createElement("p");
    text.textContent = "We serve food. It is edible (most of the time)! Is it good? Come find out!"

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(text)*/
}

export default pageLoad;