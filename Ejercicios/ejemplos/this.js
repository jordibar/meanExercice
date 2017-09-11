'use strict';

// Constructor de objetos
function Coche(ruedas) {
    this.ruedas = ruedas;

    // Usamos this dentro del método
    this.cuantasRuedas = function() {
        console.log(`tiene ${this.ruedas} ruedas`);
    }
}

const todoterreno = new Coche(4);

const autobus = new Coche(8);

// lo que está comentado abajo funciona perfectamente!
//todoterreno.cuantasRuedas();



// Hacemos un ejemplo para que this sea undefined
//const funcion1 = todoterreno.cuantasRuedas;
// Al no tener "todoterreno." a la izquierda perdemos el "this"
//funcion1();

// Ahora la hacemos funcionar con bind
const funcion1 = todoterreno.cuantasRuedas.bind(todoterreno);
funcion1();

// Lo mismo pero usando call, ya que queremos enganchar el this
// en el momento de ejecutar la función
const funcion2 = todoterreno.cuantasRuedas;
funcion2.call(todoterreno);


// Forzamos el this undefined al utilizar el setTimeout
setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);

// Así sí que funciona!
setTimeout(() => {
    todoterreno.cuantasRuedas();
}, 2000);