import restaurant from "./restaurant.jpg";

const pageLoad = () => {
    
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Questionable Food";

    const img = document.createElement("img")
    img.src = restaurant;

    const  text = document.createElement("p");
    text.textContent = "We serve food. It is edible (most of the time)! Is it good? Come find out!"

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(text)
}

export default pageLoad;