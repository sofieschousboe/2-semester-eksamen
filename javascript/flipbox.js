  // FLIP VÆRDIKORT MED ILLUSTRATION TIL TEKST

//Kvalitetscard
const cardQ = document.querySelector('.card__inner__q');
const borderQ = document.querySelector('.card__q');

document.addEventListener("scroll", function flip() {
    if (borderQ.getBoundingClientRect().top < 400) //Boolean skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Condition skal være opfyldt for at boksens class bliver skiftet
        cardQ.classList.add('is-flipped')

    else
        cardQ.classList.remove('is-flipped');
});



//Omsorgscard
const cardO = document.querySelector('.card__inner__o');
const borderO = document.querySelector('.card__o');

document.addEventListener("scroll", function flip() {
    if (borderO.getBoundingClientRect().top < 400) //Boolean skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Condition skal være opfyldt for at boksens class bliver skiftet
        cardO.classList.add('is-flipped')

    else
        cardO.classList.remove('is-flipped');
});



//Troværdighedscard
const cardT = document.querySelector('.card__inner__t');
const borderT = document.querySelector('.card__t');

document.addEventListener("scroll", function flip() {
    if (borderT.getBoundingClientRect().top < 400) //Boolean skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Condition skal være opfyldt for at boksens class bliver skiftet
        cardT.classList.add('is-flipped')

    else
        cardT.classList.remove('is-flipped');
});




//Optimering til desktop
const mediaQueryQ = window.matchMedia("(min-width: 768px)"); //Creates a media condition that targets viewports at least 768px wide

//Check if the media query is true with the .matches property which is a read-only boolean property that returns 'true' if the document matches the media query
if (mediaQueryQ.matches) {
    //Kvalitetscard
    const cardQ = document.querySelector('.card__inner__q');
    const borderQ = document.querySelector('.card__q');

    document.addEventListener("scroll", function flip() {
        if (borderQ.getBoundingClientRect().top < 650) //Boolean skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Condition skal være opfyldt for at boksens class bliver skiftet
            cardQ.classList.add('is-flipped')

        else
            cardQ.classList.remove('is-flipped');
    });
}


const mediaQueryO = window.matchMedia("(min-width: 768px)"); //Creates a media condition that targets viewports at least 768px wide

//Check if the media query is true with the .matches property which is a read-only boolean property that returns 'true' if the document matches the media query
if (mediaQueryO.matches) {
    //Omsorgscard
    const cardO = document.querySelector('.card__inner__o');
    const borderO = document.querySelector('.card__o');

    document.addEventListener("scroll", function flip() {
        if (borderO.getBoundingClientRect().top < 600) //Boolean skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Condition skal være opfyldt for at boksens class bliver skiftet
            cardO.classList.add('is-flipped')

        else
            cardO.classList.remove('is-flipped');
    });
}



const mediaQueryT = window.matchMedia("(min-width: 1100px)"); //Creates a media condition that targets viewports at least 768px wide

//Check if the media query is true with the .matches property which is a read-only boolean property that returns 'true' if the document matches the media query
if (mediaQueryT.matches) {
    //Troværdighedscard
    const cardT = document.querySelector('.card__inner__t');
    const borderT = document.querySelector('.card__t');

    document.addEventListener("scroll", function flip() {
        if (borderT.getBoundingClientRect().top < 800) //Boolean skal return værdien 'true' for at funktionen eksekverer koden. Fortalt på hverdagssprog: Condition skal være opfyldt for at boksens class bliver skiftet
            cardT.classList.add('is-flipped')

        else
            cardT.classList.remove('is-flipped');
    });
}

