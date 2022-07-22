function loadContact() {
    const content = document.querySelector("#content");

    const h2 = document.createElement("h2")
    h2.textContent = "Where to find us"
    content.appendChild(h2);

    const whereText = document.createElement("p");
    whereText.textContent = "You can find us at our Location";
    content.appendChild(whereText);
}

export default loadContact;