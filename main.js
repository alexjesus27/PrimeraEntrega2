//variables a usar

let helado1 = 0;
let helado2 = 0;
let helado3 = 0;
let helado4 = 0;
let helado5 = 0;
let helado6 = 0;
let totalHelados = 0;

let baseVegana = 0;
let baseNormal = 0;

let precioNormal = 3000;
let precioVegano = 3500;

let total = 0;
let seguir;

const listaHelados = [];


//funcion para ls helados
const contHelado = (helado) =>{
    switch(helado){
        case 1:
            helado1 = helado1 + 1;
            alert("hemos agregado su helado");
            break;
        case 2:
            helado2 = helado2 + 1;
            alert("hemos agregado su helado");
            break;
        case 3:
            helado3 = helado3 + 1;
            alert("hemos agregado su helado");
            break;
        case 4:
            helado4 = helado4 + 1;
            alert("hemos agregado su helado");
            break;
        case 5:
            helado5 = helado5 + 1;
            alert("hemos agregado su helado");
            break
        case 6:
            helado6 = helado6 + 1;
            alert("hemos agregado su helado");
            break;

        default:
            alert("No es una opcion de helado");
    }
}

//funcion para las base
const seleccionBase = (tipoBase) =>{
    if(tipoBase == 1){
        baseVegana = baseVegana + 1;
    }else{
        baseNormal = baseNormal + 1;
    }          
}

//objeto

function Helado(nombreHelado, base){
    this.nombreHelado = nombreHelado;
    this.base = base;
}

// principal
alert("Bienvenido a thailand ice cream rolls");

do{
    let tipoHelado = parseInt(prompt("Por favor indique el sabor del helado: \n1.helado1 \n2.helado2 \n3.helado3 \n4.helado4 \n5.helado5 \n6.helado6 \n7.salir" ));
    if( tipoHelado === 7) break;
    let base = parseInt(prompt("Que tipo de base va a querer su helado, \n1.vegano, \n2.normal"));
    
    contHelado(tipoHelado);
    seleccionBase(base);
    suPedido = new Helado(tipoHelado, base);
    listaHelados.push(suPedido);

    seguir = prompt("desea agregar otro helado? si/no");

}while(seguir === "si" || seguir === "SI");

totalHelados = helado1 + helado2 + helado3 + helado4 + helado5 + helado6;

total = (precioNormal * baseNormal) + (precioVegano * baseVegana);

if (total !=0){
alert("El total a pagar por sus " + totalHelados + " helados seria "+ total);
}

console.log("Los helados del cliente seran");
console.log(listaHelados);
