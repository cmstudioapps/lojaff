let data = new Date
let mes = data.getMonth() +1
let dia = data.getDate()
let ano = data.getFullYear()
let hora = data.getHours()
let minutos = data.getMinutes()
let diaAnterior = localStorage.getItem ("diaAnterior")


let Dados = {
nome: localStorage.getItem("nome") || "sem nome",

Dia: `${dia}/${mes}/${ano}`, 
Horário: `${hora} : ${minutos}`


}

const url = "https://api.sheetmonkey.io/form/iYhdxWckkGUXM6bGP5cy7p"

function enviar() {

fetch(url, {

method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify(Dados)


}).then(response => response)
.then(dt => {
console.log("Dados enviados")
}).catch(erro => console.log("Erro no envio de dados",erro))
}

if (dia != diaAnterior) {

  diaAnterior = dia
  localStorage.setItem("diaAnterior",diaAnterior)

enviar()
}