
//armar carrito
const habitaciones = [
    {
        id: 1,
        nombre: "Simple",
        precio: 100000
    },

    {
        id: 2,
        nombre: "Doble",
        precio: 180000
    },

    {
        id: 3,
        nombre: "Triple",
        precio: 260000
    },

    {
        id: 4,
        nombre: "Cuadruple",
        precio: 340000
    },

    {
        id: 5,
        nombre: "Quintuple",
        precio: 420000
    },

    {
        id: 6,
        nombre: "Sextuple",
        precio: 500000
    },
]

const cartHabitaciones = []
let reservas = document.getElementById("Reservas")

function renderHabitaciones(habitacionesArray) {
    habitacionesArray.forEach(habitacion => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${habitacion.nombre}</h3>
                          <p>${habitacion.precio}</p>
                          <button class="habitacionReservar" id="${habitacion.id}">Reservar</button>`
        habitacionesContainer.appendChild(card)                  
    });
    agregarAlCarrito(habitaciones)
}

renderHabitaciones(habitaciones)

function agregarAlCarrito (habitacionesArray) {
    const addButton = document.querySelectorAll(".habitacionAgregar")
    addButton.forEach(Button => {
        Button.onclick = (e) => {
            const habitacionID = e.currentTarget.id
            const selectedHabitacion = habitacionesArray.find(habitacion => habitacion.id == habitacionID)
            cartHabitaciones.push(selectedHabitacion)
            console.log(cartHabitaciones)

            localStorage.setItem("cartHabitaciones", JSON.stringify(cartHabitaciones))
        }
    })

}

let restar = document.getElementById("minus-button")
let sumar = document.getElementById("plus-button")
let counter = document.getElementById("counter")
let contador = 0

sumar.onclick = () => {
    contador++
    counter.innerHTML = contador
    restar.disabled = false
}

restar.onclick = () => {
    if(contador === 0) {
        restar.disabled = true
    } else{
    contador--
    counter.innerHTML = contador
    }
}

let input = document.getElementById("search")
const usuarios = [apellido, nombre, documento, mail]
Input.onchange = () => {
    const usuario = usuario.find(usuarios === input.value)
}

