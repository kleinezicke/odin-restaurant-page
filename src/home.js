const loadHome = () => {

    const content = document.querySelector("#content")

    const h2 = document.createElement("h2")
    h2.textContent = "Hungry? We serve \"Food\"";

    content.appendChild(h2);

    const paragraph = document.createElement("p");
    paragraph.textContent = "We serve food. It is edible (most of the time)! Is it good? We don't dare have a taste ourselves, but you are welcome to try!"

    content.appendChild(paragraph);
}

export default loadHome;