function promediar(){    
    var nota_1=document.getElementById("matematica").value;
    var nota_2=document.getElementById("comunicacion").value;
    var nota_3=document.getElementById("ciencias").value;
    var nota_4=document.getElementById("cultura").value;
    sumar= parseInt(nota_1)+parseInt(nota_2)+parseInt(nota_3)+parseInt(nota_4);
    promedio = sumar/4;
    if(promedio < 13){
        document.getElementById("indicador").innerHTML="Esta desaprobado con: "+promedio;
    }
    else{
        document.getElementById("indicador").innerHTML="Esta aprobado con: "+promedio;
    }
}