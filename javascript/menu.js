// Hide menu items until clicked

function showMenu() {    

    var menuList = document.getElementById("menu");   

    if (menuList.className == "menuHidden") {

        menuList.className = "menuShow";    
    } 
    
    else { 

        menuList.className = "menuHidden";    
    }
}