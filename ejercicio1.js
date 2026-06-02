class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }
    presentarse(){
        return `Hola, soy ${this.nombre}, mi cargo en la empresa es ${this.cargo}`;
    }
    calcularSalarioAnual() {
        return `El salario anual de ${this.nombre} es de $${this.salario * 12}`;
    }
    desactivar() {
        this.activo = false;
    }
    info() {
        return `
        Nombre: ${this.nombre}
        Cargo: ${this.cargo}
        Salario mensual: $${this.salario}
        Salario anual: $${this.salario * 12}
        Activo: ${this.activo ? "Sí" : "No"}
        `;
    }
}

let empleado1 = new Empleado("Alejandro", "Director gerencial", 11000000);
let empleado2 = new Empleado("Carlos", "Desarrollador Web", 8000000);
let empleado3 = new Empleado("Gabriel", "Ciberseguridad", 15000000);
let empleado4 = new Empleado("Juan", "Ejecutivo comercial", 9000000);
let empleado5 = new Empleado("Maria", "Jefe de proyectos", 6500000);
let empleado6 = new Empleado("Camila", "Analista de datos", 7000000);
// console.log(empleado1);
// console.log(empleado2);
// console.log(empleado1.presentarse());
// console.log(empleado1.calcularSalarioAnual());
console.log(empleado1.info());
// console.log(empleado2.presentarse());
// console.log(empleado2.calcularSalarioAnual());
console.log(empleado2.calcularSalarioAnual());



class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, cargo = "Líder del equipo", salario);
        this.equipo = [];
    }
    presentarEquipo() {
        if (this.equipo.length > 0) {
            for (let i = 0; i < this.equipo.length; i++) {
                this.equipo.push()
            }
        }
        else {
            return `El equipo del líder está vacío`
        }
    }
    agregarMiembro(nombre) {

    }
    info() {

    }
}

