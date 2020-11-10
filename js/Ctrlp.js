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
               // function procesa(){
            var fechaValueAsDate = txtFecha.valueAsDate,
            fecha = new Date(txtFecha.value),
            hora = new Date("1970-01-01T" + txtHora.value),
            fechaYHora = new Date(txtFechaYHora.value),
            fechaYHoraLocal = new Date(txtFechaYHoraLocal.value),
            semana = txtSemana.valueAsDate,
            mes = txtMes.valueAsDate;
           
            salidaFecha.textContent = txtFecha.type + " | " + txtFecha.value;
            salidaHora.textContent = txtHora.type + " | " + txtHora.value + "|"
            + hora.toISOString();
            salidaFechaYHora.textContent = txtFechaYHora.type + " | " + txtFechaYHora.value + "|"
            + txtFechaYHora.toISOString();
            salidaFechaYHoraLocal.textContent = txtFechaYHoraLocal.type + " | " + txtFechaYHoraLocal.value + "|"
            + txtFechaYHoraLocal.toLocaleString();
           
            salidaSemana.textContent = txtSemana.type + " | " + txtSemana.value;
            salidaMes.textContent = txtMes.type + " | " + txtMes.value;
           
        }

