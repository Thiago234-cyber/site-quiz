// Função para verificar a resposta e exibir a mensagem correspondente
function verificarResposta() {
  var resposta = document.getElementById('resposta').value;
  var mensagem = document.getElementById('mensagem');

  // Verifique se a resposta está correta 
  if (resposta.toLowerCase() === 'Silencio dos Inocentes'.toLowerCase()) {
    mensagem.innerHTML = 'Você acertou! Redirecionando para a página do filme...';

    // Aguarde 5 segundos (5000 milissegundos) 
    setTimeout(function () {
      window.location.href = 'index2.html'; //
    }, 5000);
  } else {
    mensagem.innerHTML = 'Você errou! Tente novamente.';
  }
}

