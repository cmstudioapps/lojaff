let data = new Date
let mes = data.getMonth() +1
let dia = data.getDate()
let ano = data.getFullYear()
let hora = data.getHours()
let minutos = data.getMinutes()

let Dados = {
nome: localStorage.getItem("nome") || "sem nome",

Data: {
Dia: `${dia}/${mes}/${ano}`, 
Horário: `${hora} : ${minutos}`
}

}

const url = "https://api.sheetmonkey.io/form/iYhdxWckkGUXM6bGP5cy7p"

fetch(url, {

method: "POST",
body: JSON.stringify(Dados)


})