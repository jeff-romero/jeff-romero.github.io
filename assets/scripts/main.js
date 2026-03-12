


class Navigation {
    constructor() {
        const navItems = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navItems.length; i++) {
            let item = navItems[i];

            let bgs = item.lastChild.style;
            item.addEventListener("mouseover", (e) => {
                bgs.animationName = "appear";
                bgs.animationPlayState = "running";
                bgs.width = "100%";
            });
            item.addEventListener("mouseleave", (e) => {
                bgs.animationName = "disappear";
                bgs.animationPlayState = "running";
                bgs.width = "0%";
            });
            item.addEventListener("touchstart", (e) => {
                bgs.animationName = "appear";
                bgs.animationPlayState = "running";
                bgs.width = "100%";
            });
            item.addEventListener("touchend", (e) => {
                bgs.animationName = "disappear";
                bgs.animationPlayState = "running";
                bgs.width = "0%";
            });
        }
    }
}

class ColorSchemes {
    constructor() {
        this.__picked = document.getElementById("color-picked");
        this.__light = document.getElementById("color-light");
        this.__dark = document.getElementById("color-dark");
        this.__compliment = document.getElementById("color-compliment");

        this.__pickedVal = document.getElementById("color-picked-val");
        this.__lighterVal = document.getElementById("color-lighter-val");
        this.__darkerVal = document.getElementById("color-darker-val");
        this.__complimentVal = document.getElementById("color-compliment-val");

        this.__pickedVal.innerText = getComputedStyle(this.__picked).backgroundColor;
        this.__lighterVal.innerText = getComputedStyle(this.__light).backgroundColor;
        this.__darkerVal.innerText = getComputedStyle(this.__dark).backgroundColor;
        this.__complimentVal.innerText = getComputedStyle(this.__compliment).backgroundColor;
    }
}


let nav = new Navigation();
let colSchemes = new ColorSchemes();
