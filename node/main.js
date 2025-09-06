let data = new Date();

let hora = data.getHours();
let minutos = data.getMinutes();

let saudacao;

if (hora < 12) {
  saudacao = "Bom dia!";
} else if (hora < 18) {
  saudacao = "Boa tarde!";
} else {
  saudacao = "Boa noite!";
}

console.log(`Olá ${saudacao} Agora são ${hora} horas e ${minutos} minutos.`);
