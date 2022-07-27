const remeras = [
    {id:1, modelo:"La Creación", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
    {id:2, modelo:"La Última Cena", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
    {id:3, modelo:"La Noche Estrellada", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
    {id:4, modelo:"La Joven de la Perla", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"}
]

let carrito = []

const divRemeras = document.getElementById("remeras")

remeras.forEach(remerasArray => {
    divRemeras.innerHTML += `
        <div class="card cardRemeras" style="width: 18rem;">
            <div>
                <img src="${remerasArray.img}" class="card-img-top imgRemeras" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${remerasArray.modelo}</h5>
                <p class="card-text"><span>$${remerasArray.precio}</span></p>
                <a href="#" class="btn btn-success">COMPRAR</a>
                <button id="${remerasArray.id}" type="button" class="btn btn-secondary my-3">Agregar Carrito</button>
            </div>
        </div> 
    `
})

let botonCarrito = addEventListener ("click", añadirCarrito)

function añadirCarrito (remera) {
    carrito.push(document.getElementById("${remerasArray.id}"))
    console.log(carrito)
}

// let carrito = []

// class Remera {
//     constructor(id, modelo, talle, stock, precio, img) {
//         this.id = id
//         this.modelo = modelo
//         this.talle = talle
//         this.stock = stock
//         this.precio = precio
//         this.img = img
//     }
// }

// // function agregarCarrito (remerasArray) {
// //     const item = remeras.find((rem) => rem.id === remerasArray)
// //     carrito.push(item)
// //     console.log(carrito)
// // }

// const remera1 = new Remera(1, "La creación", "XL", 10, 4000,)
// const remera2 = new Remera(2, "La Última Cena", "L", 12, 4000)
// const remera3 = new Remera(3, "La Noche Estrellada", "M", 8, 4000)
// const remera4 = new Remera(4, "La Joven De La Perla", "XL", 15, 4000)

// const remeras = [remera1, remera2, remera3, remera4]

// const divRemeras = document.getElementById("remeras")

// remeras.forEach(remerasArray => {
//     divRemeras.innerHTML += `
//         <div id="${remerasArray.id}" class="card cardRemeras" style="width: 18rem;">
//             <div>
//                 <img src="./multimedia/laUltimaCena.png" class="card-img-top imgRemeras" alt="...">
//             </div>
//             <div class="card-body">
//                 <h5 class="card-title">${remerasArray.modelo}</h5>
//                 <p class="card-text"><span>$${remerasArray.precio}</span></p>
//                 <a href="#" class="btn btn-success">COMPRAR</a>
//                 <button id="botonCarrito" type="button" class="btn btn-secondary my-3">Agregar Carrito</button>
//             </div>
//         </div> 
//     `
// }

// let botonCarrito = document.getElementById("botonCarrito")

// let remeraAñadida

// let remeraCarrito 

// remeras.forEach(remId => {
//     botonCarrito.addEventListener("click", () => {
//         carrito.push (remeraAñadida => {
//             remId.id,
//             remId.modelo,
//             remId.precio,
//             remId.img,
//             cantidad = 0
//         })
//     })
// })

// console.log(carrito)

// let remerasCarrito

// let remeraAñadida

// remeras.forEach((remerasArray) => {
//     let botonCarrito = document.getElementById(`botonCarrito`).lastElementChild.lastElementChild
//     botonCarrito.addEventListener("click", () => {
//         remeraAñadida = {
//             id: remerasArray.id,
//             modelo: remerasArray.modelo,
//             precio: remerasArray.precio,
//             imagen: remerasArray.img,
//             cantindad: cantidad = 0
//         }
//     })

//     if(carrito.some(remerasCarrito => remerasCarrito.id === remeraAñadida.id)){
//         remerasCarrito = carrito.find(remerasCarrito => remerasCarrito.id === remeraAñadida.id)
//         remerasCarrito.cantidad += 1
//     }
// })

// const agregarCarrito = remerasArray (=> {
//     const item = remeras.find((rem) => rem.id === remerasArray)
//     carrito.push(item)
//     console.log(carrito))
// }
