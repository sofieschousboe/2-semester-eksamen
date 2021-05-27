// Trigger CSS animation for flipbox værdier

/* window.onscroll =
function boxFlip() {
    var quality = document.getElementById("animateq");
    var qInner = document.getElementById("innerq");

    if (quality.getBoundingClientRect().bottom < 50 || quality.getBoundingClientRect().top > 50)
        quality.style.transition = "transform 0.8s",
        qInner.style.transform = "preserve-3d",
        quality.style.transform = "rotateY(180deg)",
        qInner.style.transform = "rotateY(180deg)";
} */

// var quality = document.getElementById("animateq");
// var qInner = document.getElementById("innerq");




// window.onscroll =
// function myFunction() {
//     var element = document.getElementById("myDIV");

//     if (element.getBoundingClientRect().bottom < 50 || quality.getBoundingClientRect().top > 50)
    
//         element.classList.toggle("mystyle");
    
// }




var element = document.getElementById("myDIV");

document.addEventListener("scroll", function myFunction(){
    if (element.className = "notstyle" && element.getBoundingClientRect().top < 600) //Begge booleans skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Begge conditions skal være opfyldt for at boksens class bliver skiftet
        element.classList.toggle("mystyle");

    else
        element.classList.toggle("notstyle");
});

var element = document.getElementById("quality");

document.addEventListener("scroll", function myFunction(){
    if (element.className = "contQ" && element.getBoundingClientRect().top < 350) //Begge booleans skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Begge conditions skal være opfyldt for at boksens class bliver skiftet
        element.classList.toggle("back");
        

    else
        element.classList.toggle("contQ");
});


//If all else fails: remove() image + addInnerHTML() (?) h1 og p