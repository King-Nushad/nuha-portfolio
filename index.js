


function toggleMenu() {
    var menuList = document.getElementById("menuList");
    menuList.classList.toggle("menu-open");
}

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
