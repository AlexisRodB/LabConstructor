function libro(titulo,autor,anio, prestado){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.prestado = false;

    this.prestar = function() {
        if(this.prestado) {
            return `el libro ${this.titulo} ya esta prestado.`;
        }else { 
            this.prestado = true;
            return `el libro ${this.titulo} ha sido prestado.`;
        }
    };

    this.devolver = function() {
        if(this.prestado) {
            this.prestado = false;
            return `el libro ${this.titulo} ha sido devuelto.`;
        }else {
            return `el libro ${this.titulo} no estaba prestado.`;
        }
    }
}   

const libro1 = new libro("luna de pluton", "dross", 2015);

console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro1.devolver());