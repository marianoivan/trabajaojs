function number (numero1, numero2){
    if(numero1 > numero2){
        console.log(`${numero1} es mayor que ${numero2}`)
    }else if (numero2 > numero1){
        console.log(`${numero2} es mayor que ${numero1}`)
    }else{
        console.log("soy iguales")
    }

}

number(20, 12);
number(2, 5)
number(10, 10)



function multiplo (numero5){
    if(numero5 % 5 === 0){
        console.log("es multiplo de 5")
    }else{
        console.log("no es multiplo de 5")
    }
}

multiplo(10)
multiplo(8)



function par (numero){
    if(numero % 2 === 0){
        console.log("es par")
    }else{
        console.log("no es par")
    }
}

par(8)
par(5)

function numero10  (numero){
    console.log(numero);
    if(numero === 10){
        return;
    }
    
    return numero10(numero + 1);
}

numero10(1);



function repetir (hola, numero){
    for(let i = 0; i < numero; i++){
        console.log(hola);
    }
}

repetir ("hola", 5)


let lista = ["mariano", "ivan", "luca", "hugo"]

function array (recorre){
    
    for(let i = 0; i < recorre.length; i++){
        console.log(recorre [i]);
    }
}




array(lista);


let numeros = [0, 1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10]

function listadenumeros (recorrer){
    for(let i = 0; i < recorrer.length; i++){
        if( recorrer[i] == 4){
            continue;
        }
        console.log(recorrer[i]);
    }
    
}

listadenumeros(numeros);


let multiplicar = [0, 1, 2, 3 ,4 ,5]



function lista1 (multi, num2){
    for(i = 0; i < multi.length; i++){
        let resultado = multi[i] * num2;
        console.log(resultado)
    }
        }

    let numeroparamulti = 2;

lista1(multiplicar, numeroparamulti);



