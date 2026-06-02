class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha() {
        return `
            Título: ${this.titulo}
            Género: ${this.genero}
            Año:    ${this.anio}`;
    }
    retirar() {
        this.disponible = false
        return `
            No se encuentra disponible
        `;
    }
    estado() {
        return `
            Título: ${this.titulo}, ${this.disponible ? "sí está disponible." : " no está disponible."}
        `;
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion){
        super(titulo, genero, anio);
        this.duracion = duracion;
    }
    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60);
        let minutos = this.duracion % 60;
        return this.duracion = `La película dura ${horas} horas con ${minutos} minutos.`;
    }
    ficha() {
        return `
        
            ${super.ficha()}
            Duración: ${this.duracionFormateada()}
        
        `;
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas){
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }
    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }
    totalEpisodios() {
        let totalEpisodios = this.temporadas * this.episodiosPorTemporada;
        return totalEpisodios
    }
    ficha() {
        return `
        
            ${super.ficha()}
            Temporadas: ${this.temporadas}
            Total episodios: ${this.totalEpisodios()}
        
        `;

    }
}

const peli1 = new Pelicula("El señor de los cuchillos", "Acción", 2020, 130);
console.log(peli1.duracionFormateada());

const serie1 = new Serie("Malcolm in the Middle", "Comedia", 2000, 10);
console.log(serie1.registrarEpisodios(20));
console.log(serie1.ficha());

console.log(serie1.estado());



