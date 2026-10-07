function computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram
    this.precio = precio
}

const computador1 = new computador("asus", "AMD Ryzen 7 8700FX3D", "16", "4000000");

const computador2 = new computador("logitech", "pepitus maximus axd2", "1500", "82000 lks")

const computador3 = new computador("alezzzzz", "papitas", "2", "1000")

console.log(computador1, computador2, computador3)