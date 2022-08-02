//1) Creo la clase Producto, con las propiedades id, nombre, precio y cantidad.

class Remeras {
    constructor(id, modelo, talle, precio, stock, img) {
        this.id = id;
        this.modelo = modelo;
        this.talle = talle;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

//2) Creo productos y los almaceno en un array.

const remera1 = new Remeras (1, 'La creación', "XL", 4000, 10, "./multimedia/ultimaCena.png");
const remera2 = new Remeras (2, 'La Última cena', "L", 4000, 5, "./multimedia/ultimaCena.png");
const remera3 = new Remeras (3, 'La Noche Estrellada', "M", 4000, 8, "./multimedia/ultimaCena.png");
const remera4 = new Remeras (4, 'La Joven de la Perla', "S", 4000, 15, "./multimedia/ultimaCena.png");
const remera5 = new Remeras (5, 'El Nacimiento de Venus', "XS", 4000, 7, "./multimedia/nacimientoVenus.png");
const remera6 = new Remeras (6, 'El Nacimiento de Venus', "XL", 4000, 6, "./multimedia/nacimientoVenus.png");
const remera7 = new Remeras (7, 'El Nacimiento de Venus', "L", 4000, 4, "./multimedia/nacimientoVenus.png");
const remera8 = new Remeras (8, 'El Nacimiento de Venus', "S", 4000, 6, "./multimedia/nacimientoVenus.png");

const remeras = [remera1, remera2, remera3, remera4, remera5, remera6, remera7, remera8];

//3) Muestro los productos modificando el DOM. 

const contenedorRemeras = document.getElementById("contenedorRemeras");

remeras.forEach(remera => {
    const divRemera = document.createElement('div');
    divRemera.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12', 'cardMio');
    divRemera.innerHTML = `
        <div class="tamCard">
            <div>
                <img src="${remera.img}" class="card-img-top img-fluid py-3" alt="...">
                <div class="card-body">
                <h3 class="card-title">${remera.modelo}</h3>
                <p class="card-text">$${remera.precio}</p>
                <button id="boton${remera.id}" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>`;
    contenedorRemeras.appendChild(divRemera);

    const boton = document.getElementById(`boton${remera.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(remera.id);
    }
    );
}
);

const carrito = [];

const agregarAlCarrito = (id) => {
    const remera = remeras.find(remera => remera.id === id);
    carrito.push(remera);
}

// 5) Muestro el carrito de compras modificando el DOM.

const contenedorCarrito = document.getElementById("contCarrito");
const productosCarrito = document.getElementById("botonCarrito");

productosCarrito.addEventListener('click', () => {
    let aux = "";
    carrito.forEach(remera => {
        aux += `<div class="card col-xl-3 col-md-6 col-sm-12 cardMio">
                    <div>
                        <img class="tamImagen py-3" src="${remera.img}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                        <h3 class="card-title">${remera.modelo}</h3>
                        <p class="card-text">${remera.precio}</p>
                        </div>
                    </div>
                </div>`;
    }
    );
    contenedorCarrito.innerHTML = aux;
}
);

// const remeras = [
//     {id:1, modelo:"La Creación", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
//     {id:2, modelo:"La Última Cena", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
//     {id:3, modelo:"La Noche Estrellada", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
//     {id:4, modelo:"La Joven de la Perla", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/laUltimaCena.png"},
//     {id:5, modelo:"El Nacimiento de Venus", talle:"XL", precio: 4000, stock: 10, img:"./multimedia/nacVenus.png"},
// ]

// const contenedorRemeras = document.getElementById("remeras")

// remeras.forEach (remera => {
//     // const divRemera = document.createElement('div');
//     // divRemera.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12', 'cardMio');
//     contenedorRemeras.innerHTML += `
        // <div class="card cardRemeras my-3" style="width: 18rem;">
        //     <div>
        //         <img src="${remera.img}" class="card-img-top imgRemeras" alt="...">
        //     </div>
        //     <div class="card-body">
        //         <h5 class="card-title">${remera.modelo}</h5>
        //         <p class="card-text"><span>$${remera.precio}</span></p>
        //         <a href="#" class="btn btn-success">COMPRAR</a>
        //         <button id="botonCarrito${remera.id}"type="button" class="btn btn-primary my-3">Agregar Carrito</button>
        //     </div>
        // </div>`
    
//     contenedorRemeras.appendChild(divRemera);

//     const botonCarrito = document.getElementById(`botonCarrito${remera.id}`);

//     botonCarrito.addEventListener('click', () => {
//         agregarAlCarrito(remera.id);
//     }
//     );
// })

// const carrito = []

// const agregarAlCarrito = (id) => {
//     const remera = remeras.find(remera => remera.id === id)
//     carrito.push(remera)
// }


// class Compradores {
//     constructor(nombre, descripción, email){
//         this.nombre = nombre
//         this.descripción = descripción
//         this.email = email
//     }
// }

// let compradores = []

// if(localStorage.getItem('compradores')){
//     compradores = JSON.parse (localStorage.getItem("compradores"))
// }else {
//     localStorage.setItem("compradores", JSON.stringify(compradores))
// }

// const formCompradores = document.getElementById("formCompradores")

// formCompradores.addEventListener("submit", (c) => {
//     c.preventDefault()
//     console.log(c.target)
//     let datForm = new FormData(c.target)

//     let comprador = new Compradores (datForm.get("nombre") , datForm.get("descripción"), datForm.get("email"))
//     compradores.push(comprador)
//     console.log(compradores)
//     localStorage.setItem("compradores", JSON.stringify(compradores))
//     formCompradores.reset()
// })


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
