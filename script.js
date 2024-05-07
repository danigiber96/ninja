class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Ninja: ${this.nombre}`);
    }
    
    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }
    
    drinkSake() {
        this.salud += 10;
        console.log(`La salud del Ninja ${this.nombre} ha aumentado por beber sake ${this.salud}`);
    }
}

const ninja = new Ninja("Hyabusa");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();