function cadastrar() {
  var nome = document.getElementById('name-input').value;
  var email = document.getElementById('email-input').value;
  var idade = document.getElementById('age-input').value;

  // Verifica se algum dos campos está vazio ou se o e-mail não contém "@"
  if (nome === '' || email === '' || idade === '' || !email.includes('@')) {
    alert('Por favor, preencha todos os campos corretamente antes de cadastrar.');
  } else if (idade < 0 || idade > 150) {
    alert('Idade inválida.');
  } else if (idade < 18) {
    alert('Você ainda não possui idade suficiente.');
  } else {
    var link = '#'; // Coloque o link para onde deseja redirecionar
    window.location.href = link;
  }
}
