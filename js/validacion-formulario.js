
function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var mensaje =""; 
    var error =0;                
    var regextelefono = /[0-9]+$/;
    console.log("Llegó a la función");
    reset();
    if ($("#nombre").val()==""){
        
        mensaje+= "<p>El campo nombre es obligatorio </p>";
        error++;
        $("#nombre").addClass('error-inscripcion');
    }
    if($("#apellido").val()==""){
        mensaje+= "<p>El campo apellido es obligatorio </p>";
        error++;
        $("#apellido").addClass('error-inscripcion');
    }
    if (!($('#telefono').val().match(regextelefono))) { 
        mensaje+= "<p>Debe agregar un número de telefóno</p>";  
        error++;
    }
    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error-inscripcion');
    }
    if ($("#provincia option:selected").val()==0){
        mensaje+= "<p>Debe seleccionar una provincia</p>";
        error++;
        $("#provincia").addClass('error-inscripcion');
    }
    if ($("#localidad option:selected").val()==0){
        mensaje+= "<p>Debe seleccionar una localidad</p>";
        error++;
        $("#localidad").addClass('error-inscripcion');
    }
    
    
    if (error>0){
        console.log(error);
        $("#mensaje-inscripcion").append(mensaje); 
        return false;
    }
   
    else{
        return true;
    }

}
function reset(){
    $("#nombre").removeClass('error-inscripcion');
    $("#apellido").removeClass('error-inscripcion');
    $("#provincia").removeClass('error-inscripcion');
    $("#email").removeClass('error-inscripcion');
    $("#localidad").removeClass('error-inscripcion');
    $("#telefono").removeClass('error-inscripcion');
    $("#mensaje-inscripcion").empty();
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validar();
    });
    $("#nombre").keyup(function() {
        validar();
    });
    $("#apellido").keyup(function() {
        validar();
    });
    $('#telefono').keyup(function() {
        validar("#telefono");
    });
    $("#email").keyup(function() {
        validar("#email");
    });
    $("#provincia").change(function() {
        validar();
    });
   /* $("#localidad").change(function() {
        validar();
    });*/
       
});

const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  fetch("https://apis.datos.gob.ar/georef/api/localidades?formato=json&max=5000", options)
    .then(response => response.json())
    .then(data => {
      let localidades = data.results;
      return localidades.map (localidades => {

      })
    });