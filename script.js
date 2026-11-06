//Generador de personaje con arrays
function generarPersonaje() {
    imgGoku.style.display = "none";
    imgKrillin.style.display = "none";
    imgRoshi.style.display = "none";
    imgBulma.style.display = "none";
    imgYamcha.style.display = "none";
    imgOolong.style.display = "none";
    imgPuer.style.display = "none";
    imgLunch.style.display = "none";

    let personajes = ["goku", "krillin", "roshi", "bulma", "yamcha", "oolong", "pu'er", "lunch"];
    selectorDePersonaje = personajes[Math.floor(Math.random() * 8)];
    console.log(selectorDePersonaje);

    if (selectorDePersonaje == "goku") {
        imgGoku.style.display = "block";
    }
    if (selectorDePersonaje == "krillin") {
        imgKrillin.style.display = "block";
    }
    if (selectorDePersonaje == "roshi") {
        imgRoshi.style.display = "block";
    }
    if (selectorDePersonaje == "bulma") {
        imgBulma.style.display = "block";
    }
    if (selectorDePersonaje == "yamcha") {
        imgYamcha.style.display = "block";
    }
    if (selectorDePersonaje == "oolong") {
        imgOolong.style.display = "block";
    }
    if (selectorDePersonaje == "pu'er") {
        imgPuer.style.display = "block";
    }
    if (selectorDePersonaje == "lunch") {
        imgLunch.style.display = "block";
    }
}
let selectorDePersonaje;
let img = document.createElement("img");
let botonGeneradorDePersonaje = document.getElementById("botonGeneradorDePersonaje");
botonGeneradorDePersonaje.addEventListener("click", generarPersonaje);



//Comparador de personaje con el input del usuario

function compararPersonaje() {
    if(ingresePersonaje.value == selectorDePersonaje){
       resultado.innerHTML = "¡Felicidades! Has adivinado el personaje.";
        imgGoku.style.filter = "none";
        imgKrillin.style.filter = "none";
        imgRoshi.style.filter = "none";
        imgBulma.style.filter = "none";
        imgYamcha.style.filter = "none";
        imgOolong.style.filter = "none";
        imgPuer.style.filter = "none";
        imgLunch.style.filter = "none";
    }
    else{
        imgGoku.style.filter = "blur(10px)";
        imgKrillin.style.filter = "blur(10px)";
        imgRoshi.style.filter = "blur(10px)";
        imgBulma.style.filter = "blur(10px)";
        imgYamcha.style.filter = "blur(10px)";
        imgOolong.style.filter = "blur(10px)";
        imgPuer.style.filter = "blur(10px)";
        imgLunch.style.filter = "blur(10px)";
    }
}

let resultado = document.getElementById("resultado");
let ingresePersonaje = document.getElementById("ingresePersonaje");
let submit = document.getElementById("Submit");
submit.addEventListener("click", compararPersonaje);