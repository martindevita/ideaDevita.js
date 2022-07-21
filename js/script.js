class Remera {
    constructor(id, modelo, talle, stock, precio, img) {
        this.id = id
        this.modelo = modelo
        this.talle = talle
        this.stock = stock
        this.precio = precio
        this.img = img
    }
}

let carrito = []

const remera1 = new Remera(1, "La creación", "XL", 10, 4000,)
const remera2 = new Remera(2, "La Última Cena", "L", 12, 4000)
const remera3 = new Remera(3, "La Noche Estrellada", "M", 8, 4000)
const remera4 = new Remera(4, "La Joven De La Perla", "XL", 15, 4000)

const remeras = [remera1, remera2, remera3, remera4]

const divRemeras = document.getElementById("remeras")

remeras.forEach(remerasArray => {
    divRemeras.innerHTML += `
        <div id="${remerasArray.id}" class="card cardRemeras" style="width: 18rem;">
            <div>
                <img src="./multimedia/laUltimaCena.png" class="card-img-top imgRemeras" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${remerasArray.modelo}</h5>
                <p class="card-text">$${remerasArray.precio}</p>
                <a href="#" class="btn btn-success">COMPRAR</a>
                <button id="botonCarrito" type="button" class="btn btn-secondary my-3">Agregar Carrito</button>
            </div>
        </div> 
    `
})

remeras.forEach(remerasCarrito => {
    const botonCarrito = document.getElementById("botonCarrito")
    botonCarrito.addEventListener("click", () =>{  
        carrito.push(remeras)
        console.log(carrito)
    })

})