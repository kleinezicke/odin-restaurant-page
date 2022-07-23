import pageLoad from "./script/pageLoad.js";
import loadHome from "./script/home.js";
import loadMenu from "./script/menu.js";
import loadContact from "./script/contact.js";
import "./base.css"
import "./home.css"

pageLoad();
loadHome();

const clear = () => {
    const content = document.querySelector("#content");
    const children = content.childNodes;

    for (let i = 0, l = children.length; i < l; i++) {
        content.removeChild(content.firstChild);
    }
}

const events = () => {
    const home = document.getElementById("home")
    home.addEventListener("click", function(){
        clear();
        loadHome();
    });

    const menu = document.getElementById("menu")
    menu.addEventListener("click", function(){
        clear();
        loadMenu();
    })

    const contact = document.getElementById("contact")
    contact.addEventListener("click", function(){
        clear();
        loadContact();
    })
}

events();