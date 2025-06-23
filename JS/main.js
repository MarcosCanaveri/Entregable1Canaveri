let apellido = (prompt("Apellido"))
let nombre = (prompt("Nombre"))
let edad = (prompt("Edad"))
let nacionalidad = (prompt("nacionalidad"))
let documento = (prompt("Número de documento"))
//let visitantes = (prompt("Cantidad de visitantes"))
console.log("Apellido: ", apellido)
console.log("Nombre: ", nombre)
console.log("Edad: ", edad)
console.log("Nacionalidad: ", nacionalidad)
console.log("Documento: ", documento)

let visitantes = parseInt(prompt("Cantidad de visitantes 1, 2, 3, 4, 5, 6"))
let dias = (prompt("Cantidad de dias"))


switch (visitantes) {
    case 1:
        preciopordia = 100000
        preciototal = preciopordia * dias
        console.log("Habitación simple")
        console.log("El precio total es de $", preciototal)
        if (dias >= 5 && dias <= 9) {
            let preciofinal = preciototal / 100 * 90
            console.log("El precio total con descuento es de $", preciofinal)
        }
        else (dias >= 10); {
            let preciofinal = preciototal / 100 * 80
            console.log("El precio total con descuento es de $", preciofinal)
        }
        break
    case 2:
        preciopordia = 180000
        preciototal = preciopordia * dias
        console.log("habitación doble")
        console.log("El precio total es de $", preciototal)
        if (dias >= 5 && dias <= 9) {
            let preciofinal = preciototal / 100 * 90
            console.log("El precio total con descuento es de $", preciofinal)
        }
        else (dias >= 10); {
            let preciofinal = preciototal / 100 * 80
            console.log("El precio total con descuento es de $", preciofinal)
        }
        break
    case 3:
        preciopordia = 260000
        preciototal = preciopordia * dias
        console.log("Habitación triple")
        console.log("El precio total es de $", preciototal)
        if (dias >= 5 && dias <= 9) {
            let preciofinal = preciototal / 100 * 90
            console.log("El precio total con descuento es de $", preciofinal)
        }
        else (dias >= 10); {
            let preciofinal = preciototal / 100 * 80
            console.log("El precio total con descuento es de $", preciofinal)
        }
        break
    case 4:
        preciopordia = 340000
        preciototal = preciopordia * dias
        console.log("habitación cuadruple")
        console.log("El precio total es de $", preciototal)
        if (dias >= 5 && dias <= 9) {
            let preciofinal = preciototal / 100 * 90
            console.log("El precio total con descuento es de $", preciofinal)
        }
        else (dias >= 10); {
            let preciofinal = preciototal / 100 * 80
            console.log("El precio total con descuento es de $", preciofinal)
        }
        break
    case 5:
        preciopordia = 420000
        preciototal = preciopordia * dias
        console.log("habitación quintuple")
        console.log("El precio total es de $", preciototal)
        if (dias >= 5 && dias <= 9) {
            let preciofinal = preciototal / 100 * 90
            console.log("El precio total con descuento es de $", preciofinal)
        }
        else (dias >= 10); {
            let preciofinal = preciototal / 100 * 80
            console.log("El precio total con descuento es de $", preciofinal)
        }
        break
    case 6:
        preciopordia = 500000
        preciototal = preciopordia * dias
        console.log("Habitación sextuple")
        console.log("El precio total es de $", preciototal)
        if (dias >= 5 && dias <= 9) {
            let preciofinal = preciototal / 100 * 90
            console.log("El precio total con descuento es de $", preciofinal)
        }
        else (dias >= 10); {
            let preciofinal = preciototal / 100 * 80
            console.log("El precio total con descuento es de $", preciofinal)
        }
        break
    default:
        console.log("Selección erronea, intente de nuevo por favor")
}



let habitacionessimples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let habitacionsdobles = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let habitacionestriples = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let habitacionescuadruples = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let habitacionesquintuples = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let habitacionessextuples = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

console.log(habitacionessimples)
console.log(habitacionesdobles)
console.log(habitacionestriples)
console.log(habitacionescuadruples)
console.log(habitacionesquintuples)
console.log(habitacionessextuples)