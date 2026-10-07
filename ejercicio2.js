function mascota(nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse= function(){
        return `hola soy un perrito llamado ${this.nombre}, soy un ${this.especie}, tengo ${this.edad} años perrunos y peso ${this.peso} gramos pq estoy chiquito.`
    }
}

const mascota1 = new mascota("tornillo", "perro", "2", "1000")
const mascota2 = new mascota("pelusa", "gato", "3", "500")  
const mascota3 = new mascota("panchito", "perro", "1", "2000")

console.log(mascota1.presentarse())
console.log(mascota2.presentarse())
console.log(mascota3.presentarse())