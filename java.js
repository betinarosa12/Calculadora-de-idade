function calcular() {
  let ano = 2024;
 
  let calculo = ano - parseInt(document.getElementById("input").value);

  if(calculo >= 18) {
    document.getElementById("mensagem").innerHTML = `Você tem ${calculo} anos,` + " você é maior de idade.";
  } else {
    document.getElementById("mensagem").innerHTML = `Você tem ${calculo} anos,` + " você é menor de idade.";
  }
}

function limpar() {
  document.getElementById("input").value = "";
  let resultado = document.getElementById("mensagem");

  resultado.innerHTML = "";
}
