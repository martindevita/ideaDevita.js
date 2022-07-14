class Remera {
    constructor(modelo, talle, stock, precio){
        this.modelo = modelo
        this.talle = talle
        this.stock = stock
        this.precio = precio
    }
}

const remera1 = new Remera ("la creacion", "XL", 10, 2500)
const remera2 = new Remera ("la ultima cena", "L", 12, 2400)
const remera3 = new Remera ("la noche estrellada", "M", 8, 2000)
const remera4 = new Remera ("la joven de la perla", "XL", 15, 2700)

const remeras = [remera1, remera2, remera3, remera4]

let continuar, modeloSeleccion, modeloComprar, acumulador, cantidadAComprar

do{
    do{
        modeloSeleccion = prompt(`Ingrese el modelo que desea comprar
                            1- la creacion
                            2- la ultima cena
                            3- la noche estrellada
                            4- la joven de la perla`).toLowerCase()

        modeloComprar = remeras.find(remera => remera.modelo == modeloSeleccion)

        if(modeloComprar == undefined){
            alert("Modelo no encontrado")
        }else{
            console.log(modeloComprar)
        }

    } while((modeloSeleccion.length == 0) || (modeloComprar.length == 0))

    do{
        cantidadAComprar = parseInt(prompt("Ingrese cantidad de remeras que desea comprar"))
        if(cantidadAComprar <= 0){
            alert("ingrese una cantidad válida")
        }else{
            alert(`usted va a compar ${cantidadAComprar} remeras`)
        }

    }while (isNaN(cantidadAComprar))

    alert(`usted eligió ${modeloSeleccion}`)

    continuar = prompt("Desea finalizar la compra? (si/no)").toLowerCase()

}while (continuar != "si")

