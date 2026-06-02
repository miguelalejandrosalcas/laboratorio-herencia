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

let empleado1 = new Empleado("Alejandro", "Director gerencial", 10000000);
let empleado2 = new Empleado("Carlos", "Desarrollador Web", 10000000);
// console.log(empleado1);
// console.log(empleado2);
// console.log(empleado1.presentarse());
// console.log(empleado1.calcularSalarioAnual());
console.log(empleado1.info());
// console.log(empleado2.presentarse());
// console.log(empleado2.calcularSalarioAnual());
console.log(empleado2.calcularSalarioAnual());



class Gerente extends Empleado {
    constructor(nombre, cargo, salario, departamento) {
        super(nombre, cargo, salario);
        this.departamento = departamento;
    }
    infoGerente() {
        return `
        Nombre: ${this.nombre}
        Cargo: ${this.cargo}
        Salario mensual: $${this.salario}
        Salario anual: $${this.salario * 12}
        Activo: ${this.activo ? "Sí" : "No"}
        Departamento: ${this.departamento}
        `;
    }   
}

let gerente1 = new Gerente("María", "Gerente de Marketing", 8000000, "Marketing");
console.log(gerente1.infoGerente());