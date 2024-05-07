// Ninja
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

// Super Ninja
class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}, Sabiduría: ${this.sabiduria}`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();