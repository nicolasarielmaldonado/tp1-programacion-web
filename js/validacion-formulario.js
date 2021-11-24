let max = 1000;
function validar() {
  var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
  var mensaje = "";
  var error = 0;
  var regextelefono = /^[0-9]{4}\-[0-9]{4}$/;
  console.log("Llegó a la función");
  reset();
  if ($("#nombre").val() == "") {
    mensaje += "<p>El campo nombre es obligatorio.</p>";
    error++;
    $("#nombre").addClass("error-inscripcion");
  }
  if ($("#apellido").val() == "") {
    mensaje += "<p>El campo apellido es obligatorio.</p>";
    error++;
    $("#apellido").addClass("error-inscripcion");
  }
  if (!$("#telefono").val().match(regextelefono)) {
    mensaje += "<p>Debe agregar un número de telefóno (Formato: 1234-1234).</p>";
    error++;
  }
  if (!$("#email").val().match(regexemail)) {
    mensaje += "<p>Debe ser un email válido.</p>";
    error++;
    $("#email").addClass("error-inscripcion");
  }
  if ($("#provincias option:selected").val() == 0) {
    mensaje += "<p>Debe seleccionar una provincia.</p>";
    error++;
    $("#provincias").addClass("error-inscripcion");
  }

  if (
    $("#provincias option:selected").val() != 0 &&
    $("#municipios option:selected").val() == 0
  ) {
    mensaje += "<p>Debe seleccionar un municipio.</p>";
    error++;
    $("#municipios").addClass("error-inscripcion");
  }
  if ($("#comments").val() == "") {
    mensaje += "<p>Debe ingresar un comentario</p>";
    error++;
    $("#comments").addClass("error-inscripcion");
  }
  if (error > 0) {
    $("#mensaje-inscripcion").append(mensaje);
    return false;
  } else {
    return true;
  }
}
function reset() {
  $("#nombre").removeClass("error-inscripcion");
  $("#apellido").removeClass("error-inscripcion");
  $("#provincias").removeClass("error-inscripcion");
  $("#email").removeClass("error-inscripcion");
  $("#municipios").removeClass("error-inscripcion");
  $("#telefono").removeClass("error-inscripcion");
  $("#comments").removeClass("error-inscripcion");
  $("#mensaje-inscripcion").empty();
}

function obtenerItemLocalStorage() {
  const establecimiento = localStorage.getItem("establecimiento");
  const lenguaje = localStorage.getItem("lenguaje");
  const horario = localStorage.getItem("horario");
  const precio = localStorage.getItem("precio");

  return (datosDeInscripcion = { establecimiento, lenguaje, horario, precio });
}

function renderizarDatosEnSeccion() {
  const datos = obtenerItemLocalStorage();

  $("#datos-sede-horario").html(
    `Inscripción al curso de idioma ${datos.lenguaje} en la sede ${datos.establecimiento} en el turno ${datos.horario}.`
  );
  $("#datos-precio").html(`Precio: $${datos.precio}`);
}

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function obtenerProvincias() {
  fetch(
    "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      for (provincia of data.provincias) {
        const prov = document.createElement("option");
        prov.value = parseInt(provincia.id) + 1;
        prov.textContent = provincia.nombre;
        provincias.appendChild(prov);
      }
    });
}

function mostrarModal(e){
  $("#modal").show();
  e.preventDefault();
  console.log(e);
}

$(document).ready(function () {
  let form = $("#form");
    form.onsubmit = function(e) {
        e.preventDefault
    }
  renderizarDatosEnSeccion();
  obtenerProvincias();
  $('#modal').hide();

  $("#form").submit(function () {
    return validar();
  });
  $("#nombre").keyup(function () {
    validar();
  });
  $("#apellido").keyup(function () {
    validar();
  });
  $("#telefono").keyup(function () {
    validar("#telefono");
  });
  $("#email").keyup(function () {
    validar("#email");
  });
  $("#comments").keyup(function () {
    validar();
    $("#comments").attr('maxlength', max);
    var disponible = $("#comments").val().length;
    console.log(disponible);
    var mensaje = "";

    if(max>=disponible){
      $("#msg").remove();
      mensaje = `<p id="msg">${disponible} de ${max} caracteres disponibles</p>`;
      $("#comments").addClass("contador");
      $("#contador").append(mensaje);
    }
  });
  $("#provincias").change(function (e) {
    validar();
    fetch(
      `https://apis.datos.gob.ar/georef/api/municipios?provincia=${
        $("#provincias option:selected").val() - 1
      }&max=1000`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        for (municipio of data.municipios) {
          const muni = document.createElement("option");
          muni.value = parseInt(municipio.id) + 1;
          muni.textContent = municipio.nombre;
          municipios.appendChild(muni);
        }
      });
  });
});
