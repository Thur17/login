// Obtém o formulário de login
var form = document.querySelector('form');

// Adiciona um manipulador de eventos para o envio do formulário
form.addEventListener('submit', function(event) {
  // Cancela o envio do formulário para que possamos processá-lo com JavaScript
  event.preventDefault();

  // Obtém o nome de usuário e senha do formulário
  var username = form.elements.username.value;
  var password = form.elements.password.value;

  // Verifica se o nome de usuário e a senha são válidos
  if (username === 'marcio' && password === '1234') {
    // Se forem válidos, redireciona para a página de dashboard
    window.location.href = 'home.html';
  } else {
    // Se forem inválidos, exibe uma mensagem de erro
    alert('Usuário ou senha incorretos!');
  }
});
