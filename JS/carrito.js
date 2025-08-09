let cartContainer = document.getElementById("cart-section")
let cartStorage = localStorage.getItem("cartHabitaciones")
cartStorage = JSON.parse(cartStorage)

function renderHabitaciones(cartItems) {
    cartItems.forEach(habitacion => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${habitacion.nombre}</h3>
                          <p>${habitacion.precio}</p>`
        cartContainer.appendChild(card)
    })
}
renderHabitaciones(cartStorage)