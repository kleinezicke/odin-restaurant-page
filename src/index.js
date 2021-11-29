import pageLoad from "./pageLoad.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

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
}

events();