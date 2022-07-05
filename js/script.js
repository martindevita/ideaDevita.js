let eliminaciones1, eliminaciones2

do {
    eliminaciones1 = parseFloat(prompt("Ingrese cantidad de eliminaciones en la primera partida"))
    eliminaciones2 = parseFloat(prompt("Ingrese cantidad de eliminaciones en la segunda partida"))

    if(eliminaciones1 < 5){
        alert("Lo sentimos usted no ha superado el riquisto mínimo de 5 eliminaciones en la primer partida, buena suerte para la próxima")
    } else if (isNaN(eliminaciones1)){
        alert ("Por favor ingrese números válidos")
    }
    
    if(eliminaciones2 < 3){
        alert("Lo sentimos usted no ha superado el riquisto mínimo de 3 eliminaciones en la segunda partida, buena suerte para la próxima")
    }  else if (isNaN(eliminaciones2)){
        alert ("Por favor ingrese números válidos")
    }

}while (isNaN(eliminaciones1) || isNaN(eliminaciones2))

const eliminacionesTotal = (eli1, eli2) => eli1 + eli2
alert (eliminacionesTotal(eliminaciones1, eliminaciones2))

// if (eliminacionesTotal >=8 && eliminacionesTotal <=20){
//     if(eliminacionesTotal <=12){
//         alert("Usted se encuentra entre el 50% de las personas")
//     } else if (eliminacionesTotal <=16){
//         alert("Usted se encuentra entre el 30% de las personas")
//     } else {
//         alert("Usted se encuentra entre el 20% de las personas")
//     }    
// }
