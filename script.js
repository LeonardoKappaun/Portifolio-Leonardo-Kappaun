// Menu em hambúguer em telas menores
const hamburguer = document.getElementById("hamburguer");
const navegacao = document.getElementById("navegacao");

hamburguer.addEventListener("click", () => {
  navegacao.classList.toggle("aberto");
});

// Fecha o menu ao clicar em um link
navegacao.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navegacao.classList.remove("aberto");
  });
});

// ocultando mensagem de envio
const msgEnvio = document.getElementById('msg-envio');
msgEnvio.style.display = 'none';

// Função para validar e enviar o formulário
const form = document.getElementById('formulario');
function enviarFormulario() {
  const nome = document.getElementById('campo-nome').value.trim();
  const email = document.getElementById('campo-email').value.trim();
  const msg = document.getElementById('campo-msg').value.trim();

  // Validaçãop de campos vazios
  if (nome === '' || email === '' || msg === '') {
    alert(
      'Existem campos sem preencher! Preencha todos os campos para enviar.',
    );
    return;
  }

  // Validação do campo de email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert(
      'Seu email é inválido. Digite um email válido.\nExemplo: usuario@dominio.com',
    );
    return;
  }

  //Confirmação de envio e limpeza dos campos
  form.reset();
  msgEnvio.style.display = 'block';
}
