"use strict";
var forma = document.getElementById("forma"),
    txtFecha = forma["fecha"],
    txtclave = forma["Clave"],
    txtFechaYHora = forma["fechaYHora"],
    txtFechaYHoraLocal = forma["fechaYHoraLocal"],
    txtSemana = forma["semana"],
    txtMes = forma["mes"],
    salidaFecha = document.getElementById("salidaFecha"),
    salidaFecha1 = document.getElementById("salidaFecha1"),
    salidaclave = document.getElementById("salidaclave"),
    salidaFechaYHora = document.getElementById("salidaFechaYHora"),
    salidaFechaYHoraLocal = document.getElementById("salidaFechaYHoraLocal"),
    salidaSemana = document.getElementById("salidaSemana"),
    salidaMes = document.getElementById("salidaMes");
    
    //nombre
    "use strict";
    var forma = document.getElementById("forma"),
        campos =  ["nombre","clave", "telefono"],
        salidas = ["salidaNombre","salidaClave", "salidaTelefono"];
     
    forma.addEventListener("submit", procesa, false);
   
    function procesa(){
        for (var i = 0, longitud = campos.length; i < longitud; i++) {
            var campo = forma[campos[i]];
            var salida = document.getElementById(salidas[i]);
            salida.value = campo.value;
        }
        var nombre = forma["nombre"].value;
        //forma["nombre"].value = "Hola "+ nombre;
