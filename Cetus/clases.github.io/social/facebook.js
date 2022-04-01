
let registrarse = document.getElementById("reg");
registrarse.addEventListener('click', registro);
function registro(){
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

