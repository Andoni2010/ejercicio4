// Texto nombre
let nombre = "Andoni"
console.log(nombre)
// Texto apellido
let apellido = "Sánchez"
console.log(apellido)
// Texto estudiante que contenga nombre y apellido
// con espacio entre medias
let estudiante = (nombre + " " + apellido)
console.log(estudiante)
// Texto estudianteMayus que contenga estudiante en mayusculas y minusculas
let estudianteMayus = estudiante
let estudianteMin = estudiante

console.log(estudianteMayus.toUpperCase === estudiante.toUpperCase)
console.log(estudianteMin.toLowerCase === estudiante.toLowerCase)
// Numero de letra del estudiante contando los espacios
console.log(estudiante.trim().length)
// Primera letra del nombre
console.log(estudiante.indexOf(nombre))
// Ultima letra del apellido
console.log(estudiante.lastIndexOf(apellido))
// eliminar espacios de estudiante
console.log(estudiante.length)
// Nombre contenido en estudiante
console.log(estudiante = nombre)