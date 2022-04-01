// var btn = document.getElementById('ingresar');
// var clave = document.getElementById('clave');
// var correo = document.getElementById('correo');
// var usuario = ["cesar", "user", "user3"]
// var clave = ["123", "1234"]

// function validacion(correo, clave) {
//     if (correo == '1' || clave == '1') {
//       alert('Los datos son correctos FELICIDADES CACHA A LA DULCE');
//       click ("entrar")
//       return false;
//     }
//     else{
//       alert('[ERROR] valores incorrectos');
//       return false;
//     }
//     return true;
//   }
let registrarse = document.getElementById("reg");
registrarse.addEventListener('click', registro);
function validacion(){
    let formulario=document.getElementById('inputs')
    let correcto = true;
    for(i in formulario){
        if(formulario[i].value ==""){
            correcto=false;
        }
    }
    if(correcto){
        alert ('Registro Existoso');
    }else{
        alert('Registro incorrecto')
    }
}