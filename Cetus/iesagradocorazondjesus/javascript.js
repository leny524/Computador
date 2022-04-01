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

function Calcular() { 
    var vr1 = document.getElementById('t1').value; 
    var vr2 = document.getElementById('t2').value; 
    var vr3 = document.getElementById('t3').value; 
    var vr4 = document.getElementById('t4').value; 
    var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4))/4; document.getElementById('promedio').innerHTML = "Nota promedio:  " + p; 
    var name =document.getElementById("alumnos").value;
    document.getElementById("nombre_alumno").innerHTML= "Alumnos(a) :   " + name;
}


    

