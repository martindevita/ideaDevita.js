//1) creo clase Remera con sus caracterisiticas

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

//2) creo diferentes remeras y las guardo en el array "remeras"

const remera1 = new Remeras (1, 'La creación', "XL", 4000, 10, "./multimedia/ultimaCena.png");
const remera2 = new Remeras (2, 'La Última cena', "L", 4000, 5, "./multimedia/ultimaCena.png");
const remera3 = new Remeras (3, 'La Noche Estrellada', "M", 4000, 8, "./multimedia/ultimaCena.png");
const remera4 = new Remeras (4, 'La Joven de la Perla', "S", 4000, 15, "./multimedia/ultimaCena.png");
const remera5 = new Remeras (5, 'El Nacimiento de Venus', "XS", 4000, 7, "./multimedia/nacimientoVenus.png");
const remera6 = new Remeras (6, 'El Nacimiento de Venus', "XL", 4000, 6, "./multimedia/nacimientoVenus.png");
const remera7 = new Remeras (7, 'El Nacimiento de Venus', "L", 4000, 4, "./multimedia/nacimientoVenus.png");
const remera8 = new Remeras (8, 'El Nacimiento de Venus', "S", 4000, 6, "./multimedia/nacimientoVenus.png");

const remeras = [remera1, remera2, remera3, remera4, remera5, remera6, remera7, remera8];

localStorage.setItem("remeras", JSON.stringify([remeras]))

//3) muestro las remeras en el DOM

const contenedorRemeras = document.getElementById("contenedorRemeras");

remeras.forEach(remera => {
    const divRemera = document.createElement('div');
    divRemera.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12', 'cardMio');
    divRemera.innerHTML = `
        <div>
            <div id="${remera.id}">
                <img src="${remera.img}" class="card-img-top img-fluid py-3" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${remera.modelo}</h3>
                    <p class="card-text">$${remera.precio}</p>
                    <button class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>`;

    contenedorRemeras.appendChild(divRemera);

    document.getElementById(`${remera.id}`).lastElementChild.lastElementChild.addEventListener("click", () => {
        agregarAlCarrito(remera.id);
    });
}
);

//creo un array vacío (carrito) para luego darle funacionalidad al boton de "añadir carrito"
const carrito = [];

const agregarAlCarrito = (id) => {
    const remera = remeras.find(remera => remera.id === id);
    carrito.push(remera);
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to bottom left, #30655A, #0229BA)",
        },
        onClick: function(){
            console.log("Diste click")
        } // Callback after click
    }).showToast();

    console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// funcion para eleminar producto del carrito

// document.getElementById(`${remera.id}`).addEventListener("click", () => {
//     eliminarRemCarrito(remera.id);
// });

// document.getElementById(`${remera.id}`)

// const eliminarRemCarrito = (remId) => {
//     const item = carrito.find((rem) => rem.id === remId)
//     const indice = carrito.indexOf(item)
//     carrito.splice(indice, 1)
//     productosCarrito()
// }


// muestro el carrito en el DOM creando diferentes cards
const contenedorCarrito = document.getElementById("contCarrito");
const productosCarrito = document.getElementById("botonCarrito");

// if(localStorage.getItem("carrito")){
//     carrito = JSON.parse(localStorage.getItem("carrito"))

//     productosCarrito.addEventListener('click', () => {
//         carrito.forEach(remera => {
//             contenedorCarrito.innerHTML +=

//                 `<div class="card text-bg-light mb-3" style="max-width: 540px;">
//                     <div class="row g-0">
//                         <div class="col-md-4">
//                             <img src="${remera.img}" class="img-fluid rounded-start my-1" alt="...">
//                         </div>
//                         <div class="col-md-8">
//                             <div class="card-body">
//                                 <h5 class="card-title">${remera.modelo}</h5>
//                                 <p class="card-text"><span>$${remera.precio}</span></p>
//                                 <div>
//                                     <p class="card-text"><small class="text-muted">Talle seleccionado: ${remera.talle}</small></p>
//                                     <button id="${remera.id}" class="btn btn-primary">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//                                             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//                                             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//         })

//     })
// }else{
//     localStorage.setItem("carrito", JSON.stringify(carrito))
// }

    productosCarrito.addEventListener('click', () => {
        contenedorCarrito.innerHTML = ""

        let i = "";
        carrito.forEach(remera => {
            i+=        
                `<div class="card text-bg-light mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${remera.img}" class="img-fluid rounded-start my-1" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${remera.modelo}</h5>
                                <p class="card-text"><span>$${remera.precio}</span></p>
                                <div>
                                    <p class="card-text"><small class="text-muted">Talle seleccionado: ${remera.talle}</small></p>
                                    <button id="${remera.id}" class="btn btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        contenedorCarrito.innerHTML = i;

    });


// carrito.forEach(productoCarrito => {
//     document.getElementById("botonEliminarProd").addEventListener("click", () => {
//         eliminarProductoCart(productoCarrito.id)
//     })

//     const eliminarProductoCart = (id) => {
//         const productoCarrito = productoCarrito.find (productoCarrito => productoCarrito.id === id);
//         carrito.remove(productoCarrito)
//     }

//     carrito.splice(carrito.indexOf(productoCarrito), 1)
// })

// carrito.forEach(productoCarrito =>{
    

//     eliminarProductoCart.addEventListener(`click`, () => {
//         document.getElementById(`productoCarrito${productoCarrito.id}`).remove()

//         carrito.splice(carrito.indexOf(productoCarrito), 1)
//     })
// })

// console.log(carrito)
// carrito.forEach((productosCarrito) => {
//     const botonEliminarProductoCart = document.getElementById(`productoEnCarrito${productoEnCarrito.id}`).lastElementChild.lastElementChild
    
//     botonEliminarProductoCarrito.addEventListener("click", () => {
//         document.getElementById(`productoEnCarrito${productoEnCarrito.id}`).remove()
        
//         carrito.splice(carrito.indexOf(productoEnCarrito), 1)

//     })
// })
