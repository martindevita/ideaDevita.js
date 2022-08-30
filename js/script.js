//1) creo class Remera con sus caracterisiticas
class Remeras {
    constructor(id, modelo, talle, precio, stock, cantidad, img) {
        this.id = id;
        this.modelo = modelo;
        this.talle = talle;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = cantidad
        this.img = img;
    }
}


//2) creo diferentes remeras y las guardo en el array "remeras"
const remera1 = new Remeras(1, 'La creación', "XL", 4001, 10, 1, "./multimedia/ultimaCena.png");
const remera2 = new Remeras(2, 'La Última cena', "L", 4002, 5, 1, "./multimedia/ultimaCena.png");
const remera3 = new Remeras(3, 'La Noche Estrellada', "M", 4003, 8, 1, "./multimedia/ultimaCena.png");
const remera4 = new Remeras(4, 'La Joven de la Perla', "S", 4004, 15, 1, "./multimedia/ultimaCena.png");
const remera5 = new Remeras(5, 'El Nacimiento de Venus', "XS", 4005, 7, 1, "./multimedia/nacimientoVenus.png");
const remera6 = new Remeras(6, 'El Nacimiento de Venus', "XL", 4006, 6, 1, "./multimedia/nacimientoVenus.png");
const remera7 = new Remeras(7, 'El Nacimiento de Venus', "L", 4007, 4, 1, "./multimedia/nacimientoVenus.png");
const remera8 = new Remeras(8, 'El Nacimiento de Venus', "S", 4008, 6, 1, "./multimedia/nacimientoVenus.png");

const remeras = [remera1, remera2, remera3, remera4, remera5, remera6, remera7, remera8];

localStorage.setItem("remeras", JSON.stringify([remeras]))


//3) muestro las remeras en el DOM
const contenedorRemeras = document.getElementById("contenedorRemeras");

remeras.forEach(remera => {
    const divRemera = document.createElement('div');
    divRemera.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12', 'cardMio', 'my-1', 'mx-0.5');
    divRemera.innerHTML = `
        <div class="cardRem">
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
});


// 4) creo un array vacío (carrito) para luego darle funacionalidad al boton de "añadir carrito"
let carrito = [];


// 5) localStorage del carrito una vez que el DOM se haya cargado
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actuCarrito()
    }
})


// 6) funcion agregar al carrito
const agregarAlCarrito = (id) => {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = remeras.find((remera) => remera.id === id);
        carrito.push(item);
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
            onClick: function () {
                console.log("Diste click")
            } // Callback after click
        }).showToast();
    }
    actuCarrito()
}


// 7) muestro los productos añadidos al carrito y actualizo el mismo con una función
const contenedorCarrito = document.getElementById("contCarrito")
const updateCarrito = document.getElementById("botonCarrito")

updateCarrito.addEventListener("click", actuCarrito)


// 8) funcion actu carrito
function actuCarrito() {
    contenedorCarrito.innerHTML = ""

    let i = "";
    carrito.forEach(remera => {
        i +=
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
                                <p>Cantidad:<span id="cantidad">${remera.cantidad}</span> </p>
                                <button onClick = "eliminarProdCarrito(${remera.id})" class="btn btn-primary">
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

        contenedorCarrito.innerHTML = i;

    });

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acu, prod) => acu + prod.precio, 0)
    precioTotal2.innerText = carrito.reduce((acu, prod) => acu + prod.precio, 0)

    localStorage.setItem("carrito", JSON.stringify(carrito))
}


// 9) funcion para eliminar productos del carrito y vaciarlo

// btn eliminar
const eliminarProdCarrito = (remId) => {
    const item = carrito.find((rem) => rem.id === remId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1);
    actuCarrito()

    console.log(carrito)
    localStorage.getItem(carrito)
}
//btn vaciar
const botonVaciar = document.getElementById("vaciarCarrito")
botonVaciar.addEventListener("click", () => {
    carrito.length = 0
    actuCarrito()
})


// 10) contador del carrito 
const contadorCarrito = document.getElementById("contadorCarrito")


// 11) precio total carrito
const precioTotal = document.getElementById("precioTotal")
const precioTotal2 = document.getElementById("precioTotal2")


// 12) btn finalizar compra
const botonFinalizarCompra = document.getElementById("btnFinalizar")

botonFinalizarCompra.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Desea finalizar su compra?',
        text: "Revise nuevamente su carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, finalizar compra',
        cancelButtonText: 'No, seguir comprando',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Compra finalizada',
                'Muchas gracias por su compra, en breve nos pondremos en contacto para organizar la entrega',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Perfecto!',
                'Puede seguir comprando :)',
                'error'
            )
        }
    })
})


// 13) agrego fetch con api de dolar blue
const divDolarHoy = document.getElementById("dolarHoy")

fetch("https://criptoya.com/api/dolar")
    .then(info => info.json())
    .then(({ blue }) => {
        divDolarHoy.classList.add("letraForm")
        divDolarHoy.innerHTML = `
            <h6>Cotización Dolar Blue Hoy: u$s ${blue}</h6>
            `
    })

setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
        .then(info => info.json())
        .then(({ blue }) => {
            divDolarHoy.innerHTML = ""
            divDolarHoy.classList.add("letraForm")
            divDolarHoy.innerHTML = `
            <h6>Cotización Dolar Blue Hoy: u$s ${blue}</h6>
            `
        })
}, 30000)

