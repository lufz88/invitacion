const firstButton = document.getElementById("enviar-boton");
const volverBoton = document.getElementById("volver-boton");
const continuarBoton = document.getElementById("continuar-boton");
const nameInput = document.getElementById("name");
const seccionInicio = document.getElementById("inicio");
const seccionNoEsBelen = document.getElementById("no-es-belen");
const seccionSiEsBelen = document.getElementById("si-es-belen");
const belenParrafo = document.getElementById("belen-parrafo");
const seccionInvitacion = document.getElementById("invitacion");

let userName = "";
const names = ['belen', 'belén', 'belo', 'belu', 'bel', 'lulu', 'maria belen', 'maria belén', 'maría belen', 'maría belén']

const enviarNombre = () => {
  if(names.includes(userName.trim().toLowerCase())) {
    seccionInicio.style.display = "none";
    seccionSiEsBelen.style.display = "flex";
    belenParrafo.innerHTML = `Oh! usted es la diosa de Luis Viale, ${userName}.`
  } else {
    seccionInicio.style.display = "none";
    seccionNoEsBelen.style.display = "flex";
  }
}

const setearNombre = () => {
  userName = nameInput.value;
}

const volverAlInicio = () => {
  seccionInicio.style.display = "flex";
  seccionNoEsBelen.style.display = "none";
}

const irAInvitacion = () => {
  seccionSiEsBelen.style.display = "none";
  seccionInvitacion.style.display = "flex";
}

firstButton.addEventListener('click', enviarNombre);
volverBoton.addEventListener('click', volverAlInicio);
nameInput.addEventListener('change', setearNombre)
continuarBoton.addEventListener('click', irAInvitacion)

