let imgPersonaje = document.getElementById("imgPersonaje");
//Generador de personaje con arrays!!!
function generarPersonaje() {
    let personajes = ["goku", "krillin", "roshi", "bulma", "yamcha", "oolong", "pu'er", "lunch"];
    let selectorDePersonaje = personajes[Math.floor(Math.random() * 8)];
    console.log(selectorDePersonaje);
}

let botonGeneradorDePersonaje = document.getElementById("botonGeneradorDePersonaje");
botonGeneradorDePersonaje.addEventListener("click", generarPersonaje);