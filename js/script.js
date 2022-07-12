// let eliminaciones1, eliminaciones2

// do {
//     eliminaciones1 = parseFloat(prompt("Ingrese cantidad de eliminaciones en la primera partida"))
//     eliminaciones2 = parseFloat(prompt("Ingrese cantidad de eliminaciones en la segunda partida"))

//     if(eliminaciones1 < 5){
//         alert("Lo sentimos usted no ha superado el riquisto mínimo de 5 eliminaciones en la primer partida, buena suerte para la próxima")
//     } else if (isNaN(eliminaciones1)){
//         alert ("Por favor ingrese números válidos")
//     }

//     if(eliminaciones2 < 3){
//         alert("Lo sentimos usted no ha superado el riquisto mínimo de 3 eliminaciones en la segunda partida, buena suerte para la próxima")
//     }  else if (isNaN(eliminaciones2)){
//         alert ("Por favor ingrese números válidos")
//     }

// }while (isNaN(eliminaciones1) || isNaN(eliminaciones2))

// const eliminacionesTotal = (eli1, eli2) => eli1 + eli2
// alert (eliminacionesTotal(eliminaciones1, eliminaciones2))

// if (eliminacionesTotal (eliminaciones1, eliminaciones2) >=8 && eliminacionesTotal (eliminaciones1,eliminaciones2) <=20){
//     if(eliminacionesTotal (eliminaciones1, eliminaciones2) <=12){
//         alert("Usted se encuentra entre el 50% de las personas")
//     } else if (eliminacionesTotal (eliminaciones1, eliminaciones2) <=16){
//         alert("Usted se encuentra entre el 30% de las personas")
//     } else {
//         alert("Usted se encuentra entre el 20% de las personas")
//     }    
// }

class Remera {
    constructor(modelo, talle, stock, precio){
        this.modelo = modelo
        this.talle = talle
        this.stock = stock
        this.precio = precio
    }
}

const remera1 = new Remera ("la creación", "XL", 10, 2500)
const remera2 = new Remera ("la última cena", "L", 12, 2400)
const remera3 = new Remera ("la noche estrellada", "M", 8, 2000)
const remera4 = new Remera ("la joven de la perla", "XL", 15, 2700)

const remeras = [remera1, remera2, remera3, remera4]

console.log(remeras)

let  remeraAComprar = prompt("Ingrese el modelo de la remera que desea comprar").toLocaleLowerCase
    
let comprar = remeras.indexOf(remeraAComprar)

if(remeraAComprar = remera1.modelo){
    let unidades1 = parseInt(prompt("Indique cuantos unidades desea comprar"))
    if (unidades1 > 10){
        alert("Debe ingresar un valor menor a 10 ya que no hay stock")
        repetir = false
    }
} else if(remeraAComprar = remera2.modelo){
    let unidades2 = parseInt(prompt("Indique cuantos unidades desea comprar"))
    if (unidades2 > 12){
        alert("Debe ingresar un valor menor a 12 ya que no hay stock")
        repetir = false
    }
} else if(remeraAComprar = remera3.modelo){
    let unidades3 = parseInt(prompt("Indique cuantos unidades desea comprar"))
    if (unidades3 > 12){
        alert("Debe ingresar un valor menor a 8 ya que no hay stock")
        repetir = false
    }
} else if(remeraAComprar = remera4.modelo){
    let unidades4 = parseInt(prompt("Indique cuantos unidades desea comprar"))
    if (unidades4 > 12){
        alert("Debe ingresar un valor menor a 15 ya que no hay stock")
        repetir = false
    }
} else{
    alert ("Ingrese un modelo válidio")
    repetir = false
}

