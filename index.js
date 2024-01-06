function validarFormulario() {
  var campoA = document.getElementById("campoA").value;
  var campoB = document.getElementById("campoB").value;
  var mensagemElement = document.getElementById("mensagem");

  // Converte os valores dos campos para números
  campoA = parseFloat(campoA);
  campoB = parseFloat(campoB);

  // Verifica se o número B é maior que o número A
  if (campoB > campoA) {
    mensagemElement.textContent = "Formulário válido! B é maior que A.";
    mensagemElement.style.color = "green";
  } else {
    mensagemElement.textContent =
      "Formulário inválido! B precisa ser maior que A.";
    mensagemElement.style.color = "red";
  }
}
