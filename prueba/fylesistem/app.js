const os =require ('os');
const fs =require ('fs');

const mi =require ('./lenin.js');
const { saludar, mostrar, sumar } = require('./lenin.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
/* console.log(mi.num);
console.log(saludar());
console.log(mostrar(2));
console.log(sumar(5, 10)); */
setTimeout( () => {
    console.log('Termine')
}, 5000);

//let rpta = mi.sumar(10,5);
/* let rpta = mi.mostrar(2);
console.log(rpta); */
/* mi.saludar();
console.log(mi.num); */
/* let cpu_string = JSON.stringify(cpu); */

/* fs.appendFile(('Lenin.txt'),`Información del cpu: ${cpu_string} `,function(error){
    if(error){
        console.log('Error al crear archivo');
    }
    
    }); */
