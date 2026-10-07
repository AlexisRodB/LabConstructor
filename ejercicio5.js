const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, anio, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.precio = precio;

    this.mostrarInformacion = function() {
        return `${this.marca} ${this.modelo}, año ${this.anio}, color ${this.color}, precio $${this.precio}.`;
    };

    this.aplicarDescuento = function(porcentaje) {
        this.precio = this.precio - (this.precio * porcentaje / 100);
        return `El nuevo precio del ${this.marca} ${this.modelo} es $${this.precio}.`;
    };

    this.vender = function() {
        return `Se vendió el ${this.marca} ${this.modelo}.`;
    };
}

const vehiculo1 = new Vehiculo(
    prompt("Ingresa la marca del vehículo 1: "),
    prompt("Ingresa el modelo del vehículo 1: "),
    Number(prompt("Ingresa el año del vehículo 1: ")),
    prompt("Ingresa el color del vehículo 1: "),
    Number(prompt("Ingresa el precio del vehículo 1: "))
);

const vehiculo2 = new Vehiculo(
    prompt("Ingresa la marca del vehículo 2: "),
    prompt("Ingresa el modelo del vehículo 2: "),
    Number(prompt("Ingresa el año del vehículo 2: ")),
    prompt("Ingresa el color del vehículo 2: "),
    Number(prompt("Ingresa el precio del vehículo 2: "))
);

const vehiculo3 = new Vehiculo(
    prompt("Ingresa la marca del vehículo 3: "),
    prompt("Ingresa el modelo del vehículo 3: "),
    Number(prompt("Ingresa el año del vehículo 3: ")),
    prompt("Ingresa el color del vehículo 3: "),
    Number(prompt("Ingresa el precio del vehículo 3: "))
);

console.log(vehiculo1.mostrarInformacion());
console.log(vehiculo2.mostrarInformacion());
console.log(vehiculo3.mostrarInformacion());

console.log(vehiculo1.aplicarDescuento(10));
console.log(vehiculo2.vender());