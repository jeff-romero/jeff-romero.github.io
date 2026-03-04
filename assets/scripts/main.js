


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
        }
    }
}


let nav = new Navigation();
