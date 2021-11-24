let establecimientos = [
  {
    nombre: "Carlos Villalba",
  },
  {
    nombre: "Estaban Echegarria",
  },
  {
    nombre: "Luz Rosales",
  },
  {
    nombre: "El Salto",
  },
  {
    nombre: "Centro Ingeniero Watson",
  },
  {
    nombre: "Miguel Cerbantes",
  },
];

let cursos = [
  {
    titulo: "INGLES: NIVEL",
    nivel: 4,
    modalidad: "Presencial",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[0].nombre,
    precio: 1500,
    imagen: "img/calendar-1.webp",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 1,
    modalidad: "Virtual",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[1].nombre,
    precio: 1500,
    imagen: "img/calendar-2.jpg",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 2,
    modalidad: "Presencial",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[2].nombre,
    precio: 1500,
    imagen: "img/calendar-3.webp",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 1,
    modalidad: "Virtual",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[3].nombre,
    precio: 1500,
    imagen: "img/calendar-1.webp",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 1,
    modalidad: "Presencial",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[5].nombre,
    precio: 1500,
    imagen: "img/calendar-2.jpg",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 2,
    modalidad: "Virtual",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[1].nombre,
    precio: 1500,
    imagen: "img/calendar-3.webp",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 3,
    modalidad: "Presencial",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[1].nombre,
    precio: 1500,
    imagen: "img/calendar-1.webp",
  },
  {
    titulo: "INGLES: NIVEL",
    nivel: 3,
    modalidad: "Virtual",
    diasYHorarios: "Lunes a Viernes 14hs a 18hs",
    fecha: "18/02/2022",
    sede: establecimientos[4].nombre,
    precio: 1500,
    imagen: "img/calendar-2.jpg",
  },
];
const filtrarEstablecimiento = () => {
  $("#cursos").empty();
  const nombreEstablecimiento = $("#select-sede").val();

  const nivel = parseInt($("#select-level").val());

  const elem = cursos.filter((curso) => {
    if (nivel === 0) {
      return curso.sede === nombreEstablecimiento;
    } else {
      return curso.nivel === nivel && curso.sede === nombreEstablecimiento;
    }
  });

  cargarElementos(elem);
};

const filtrarNivel = () => {
  $("#cursos").empty();
  const nivel = parseInt($("#select-level").val());
  const nombreEstablecimiento = $("#select-sede").val();

  const elem = cursos.filter((curso) => {
    if (nombreEstablecimiento === 0) {
      return curso.nivel === nivel;
    } else {
      return curso.nivel === nivel && curso.sede === nombreEstablecimiento;
    }
  });

  cargarElementos(elem);
};

const cargarElementos = (elem) => {
  const padre = document.getElementById("cursos");
  elem.forEach((curso) => {
    const hijo = document.createElement("div");
    hijo.classList.add("card-container");
    padre.appendChild(hijo);
    hijo.innerHTML = `<img
    src=${curso.imagen}
    class="image-calendar"
    alt="image-calendar"
    />
    <div class="description">
    <h3 class="title-course">${curso.titulo + " " + curso.nivel}</h3>
    <span class="item-description">${curso.modalidad}</span>
    <span class="item-description"
      >${curso.diasYHorarios}</span
    >
    <span class="item-description">${curso.fecha}</span>
    <span class="item-description"
      >Sede: <a href="detalle-establecimiento.html">${curso.sede}</a>
    </span>
    <span class="important-description">Precio: $${curso.precio}</span>
    <a href="inscripcion.html" class="btn">Inscribirse</a>
    </div>`;
  });
};

$(document).ready(function () {
  var select = document.getElementById("select-sede");

  establecimientos.forEach((establecimiento) => {
    var option = document.createElement("option");
    option.text = establecimiento.nombre;
    option.value = establecimiento.nombre;
    select.appendChild(option);
  });

  const padre = document.getElementById("cursos");

  cursos.forEach((curso) => {
    const hijo = document.createElement("div");
    hijo.classList.add("card-container");
    padre.appendChild(hijo);
    hijo.innerHTML = `<img
    src=${curso.imagen}
    class="image-calendar"
    alt="image-calendar"
    />
    <div class="description">
    <h3 class="title-course">${curso.titulo + " " + curso.nivel}</h3>
    <span class="item-description">${curso.modalidad}</span>
    <span class="item-description"
      >${curso.diasYHorarios}</span
    >
    <span class="item-description">${curso.fecha}</span>
    <span class="item-description"
      >Sede: <a href="detalle-establecimiento.html">${curso.sede}</a>
    </span>
    <span class="important-description">Precio: $${curso.precio}</span>
    <a href="inscripcion.html" class="btn">Inscribirse</a>
    </div>`;
  });
});
