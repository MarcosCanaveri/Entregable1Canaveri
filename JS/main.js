
//armar carrito
const habitaciones = [
    {
        id: 1,
        nombre: "Simple",
        precio: 100000,
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

const cartRooms = []
let roomsContainer = document.getElementById("rooms-Container")

function renderHabitaciones(roomsArray) {
    roomsArray.forEach(habitacion => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${habitacion.nombre}</h3>
                          <p>${habitacion.precio}</p>
                          <button class="habitacionReservar" id="${habitacion.id}">Reservar</button>`
        roomsContainer.appendChild(card)                  
    })
    agregarAlCarrito(habitaciones)
}

renderHabitaciones(habitaciones)

function agregarAlCarrito (roomsArray) {
    const addButton = document.querySelectorAll(".habitacionReservar")
    addButton.forEach(Button => {
        Button.onclick = (e) => {
            const roomId = e.currentTarget.id
            const selectedRoom = roomsArray.find(habitacion => habitacion.id == roomId)
            cartRooms.push(selectedRoom)
            console.log(cartRooms)

            localStorage.setItem("cartRooms", JSON.stringify(cartRooms))
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

const reservaForm = document.getElementById('reservaForm');

reservaForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fechaLlegada = document.getElementById('fechaLlegada').value;
  const fechaSalida = document.getElementById('fechaSalida').value;
  const habitacion = document.getElementById('habitacion').value;

  // Validar los datos (ejemplo básico)
  if (nombre === "" || apellido === "" || fechaLlegada === "" || fechaSalida === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Crear objeto con los datos de la reserva
  const reserva = {
    nombre: nombre,
    apellido: apellido,
    fechaLlegada: fechaLlegada,
    fechaSalida: fechaSalida,
    habitacion: habitacion
  };

  // Enviar los datos (aquí se podría implementar una llamada a un servidor)
  console.log("Reserva creada:", reserva);
  alert("Reserva realizada con éxito!");

  // Limpiar el formulario (opcional)
  reservaForm.reset();
});

