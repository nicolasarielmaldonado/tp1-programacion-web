window.onload = () => {
  setInterval(() => {
    plusSlides(1);
  }, 3500);
};

let provincias = ["Buenos Aires", "Santa Fe", "La Pampa", "Cordoba"];

let establecimientos = [
  {
    nombre: "Carlos Villalba",
    direccion: "Sarumin 1234",
    email: "carlosvillalba@gmail.com",
    localidad: "Moron",
    provincia: provincias[0],
    precio: 3500,
  },
  {
    nombre: "Estaban Echegarria",
    direccion: "Hobbiton 333",
    email: "estabanechegarria@gmail.com",
    localidad: "Funes",
    provincia: provincias[1],
    precio: 2500,
  },
  {
    nombre: "Luz Rosales",
    direccion: "Gandolfo 43321",
    email: "luzrosales@gmail.com",
    localidad: "San Andres",
    provincia: provincias[0],
    precio: 2750,
  },
  {
    nombre: "El Salto",
    direccion: "Froddi 222",
    email: "elsalto@gmail.com",
    localidad: "Santa Rosa",
    provincia: provincias[2],
    precio: 3000,
  },
  {
    nombre: "Centro Ingeniero Watson",
    direccion: "Legolos 5585",
    email: "ingenierowatson@gmail.com",
    localidad: "General Pico",
    provincia: provincias[2],
    precio: 2200,
  },
  {
    nombre: "Miguel Cerbantes",
    direccion: "Gimblo 2245",
    email: "miguelcerbantes@gmail.com",
    localidad: "Jesus Maria",
    provincia: provincias[3],
    precio: 4300,
  },
];

provincias.forEach((provincia) => {
  var option = document.createElement("option");
  option.text = provincia;
  option.value = provincia;
  var select = document.getElementById("provincia");
  select.appendChild(option);
});

function changeProvincia() {
  let select = document.getElementById("establishment");
  select.innerHTML = "";
  let disabledOption = document.createElement("option");
  disabledOption.text = "";
  disabledOption.value = "";
  disabledOption.selected = true;
  disabledOption.disabled = true;
  select.appendChild(disabledOption);
  establecimientos.forEach((establecimiento) => {
    if (
      establecimiento.provincia === document.getElementById("provincia").value
    ) {
      let option = document.createElement("option");
      option.text = establecimiento.nombre;
      option.value = establecimiento.nombre;
      select.appendChild(option);
    }
  });
}

function changeEstablecimiento() {
  let precioDiv = document.getElementById("precio");
  establecimientos.forEach((establecimiento) => {
    if (
      establecimiento.nombre === document.getElementById("establishment").value
    ) {
      precioDiv.value = establecimiento.precio;
      document.getElementById("establishmentNombre").innerHTML =
        establecimiento.nombre;
      document.getElementById("establishmentDireccion").innerHTML =
        establecimiento.direccion;
      document.getElementById("establishmentLocalidad").innerHTML =
        establecimiento.localidad;
      document.getElementById("establishmentProvincia").innerHTML =
        establecimiento.provincia;
      document.getElementById("establishmentEmail").innerHTML =
        establecimiento.email;
    }
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
