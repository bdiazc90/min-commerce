interface Persona {
    nombre: string,
    edad: number,
    ciudad: string,
}

interface Estudiante {
    curso: string,
}

type PersonaEstudiante = Persona & Estudiante;

const michael: PersonaEstudiante = {
    nombre: "Michael",
    edad: 30,
    curso: "Code 301",
    ciudad: "Lima"
}

console.log(michael);