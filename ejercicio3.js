function Estudiante(nombre, edad, grado, calificacion) {
    this.nombre = nombre;
    this.edad = edad;
    this.grado = grado;
    this.calificacion = calificacion;
    
    this.aprobado = calificacion >= 3.0; 

    this.mostrarResultado = function() {    
        if (this.aprobado) {
            return `estudiante ${this.nombre} aprobo con una calificacion de ${this.calificacion},`;
        } else {
            return `estudiante ${this.nombre} no aprobo con una calificacion de ${this.calificacion}, pongase a estudiar,`;
        }
    };
}

const estudiante1 = new Estudiante("alexis", 20, "10", 4.5);
const estudiante2 = new Estudiante("maria", 16, "11", 2.8);
const estudiante3 = new Estudiante("jose", 14, "9", 3.2);
const estudiante4 = new Estudiante("kalulu", 15, "10", 1.5);

console.log(estudiante1.mostrarResultado(),"aprobo ?", estudiante1.aprobado);
console.log(estudiante2.mostrarResultado(), "aprobo ?", estudiante2.aprobado);
console.log(estudiante3.mostrarResultado(), "aprobo ?", estudiante3.aprobado);
console.log(estudiante4.mostrarResultado(), "aprobo ?", estudiante4.aprobado);
