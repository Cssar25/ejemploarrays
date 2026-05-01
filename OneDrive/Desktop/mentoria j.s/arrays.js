


let productos = ["mouse", "teclado", "monitor", "audifnos"];

for (let i = 0; i < productos.length ; i++){
console.log([productos[i]]);


}

let autos = ["BMW", "AUDI", "VOLVO", "KIA", "MERCEDES"];

for (let i = 0; i < autos.length ; i++){
    console.log([autos[i]]);
}

////

let numeros = [2,4,6,8]; //*2
let duplicados = [];

for (let i = 0; i < numeros.length; i++) 
    duplicados.push(numeros[i]*2);

console.log(duplicados)

/////

let numeros1 = [5,10,15,20];
let suma = 0; 

for (let i = 0; i < numeros1.length; i++){
    suma = suma +numeros1[i];
}
console.log("la suma es : ", suma);

// un array de números mezclados. Tu tarea es recorrer ese array usando un for y, si el número es par, agrégalo a un nuevo array llamado pares usando el método .push()"

let comida = ["arroz", "carne", "pan"]; 