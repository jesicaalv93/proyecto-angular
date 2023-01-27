export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    fechaNac: String;
    titulo: String;
    sobreMi: String;
    fotoPerfil: String

    constructor (nombre: String, apellido: String, fechaNac: String, titulo: String, sobreMi: String, fotoPerfil: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        this.fotoPerfil = fotoPerfil;
    }
}