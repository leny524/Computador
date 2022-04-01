let subs= 2000;

/* module.exports.saludar = function (){

    console.log('Dylan David');
    }
module.exports.num = subs;  */
module.exports = {
    num : subs,
    saludar : () => {
        console.log('Hola dylan'); 
    },
    sumar : (a, b)=> a + b,
    mostrar: a=> a + 20
}