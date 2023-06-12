const nombre_ticket = document.querySelector("#nombre-ticket")
const apellido_ticket = document.querySelector("#apellido-ticket")
const email_ticket = document.querySelector("#email-ticket")
const cantidad_ticket = document.querySelector("#cantidad-ticket")
const categoria_ticket = document.querySelector("#categoria-ticket")
let mensaje_total = document.querySelector("#mensaje_total")
const btn_borrar = document.querySelector("#btn-borrar")
const btn_resumen = document.querySelector("#btn-resumen")

function total_pago() {
  let categoria = nombre_ticket.value
  console.log(nombre_ticket.set);
  window.alert("nombre=" + nombre_ticket.value + "\napellido:"+apellido_ticket.value+"\nemail: "+email_ticket.value+"\ncant tickect: "+cantidad_ticket.value+"\ncategoria: "+categoria_ticket.value+"\nmensaje: "+mensaje_total.textContent);
}
function prueba() {
  window.alert("Recibido!!!")
}