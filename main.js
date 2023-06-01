document.getElementById('form-atividade').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obter o valor do nome completo e separá-lo em nome e sobrenome
    var nomeCompleto = document.getElementById('Nome').value;
    var partesNome = nomeCompleto.trim().split(' ');
  
    var nome = '';
    var sobrenome = '';
  
    if (partesNome.length > 1) {
      nome = partesNome[0];
      sobrenome = partesNome.slice(1).join(' ');
    } else {
      alert('Por favor, informe o nome completo.');
      return;
    }
  
    // Obter o valor do número de telefone
    var numero = document.getElementById('Numero').value;
  
    // Criar uma nova linha na tabela
    var table = document.querySelector('table');
    var newRow = table.insertRow();
  
    // Inserir células com os valores do nome e do número de telefone
    var cell1 = newRow.insertCell();
    cell1.textContent = nome + ' ' + sobrenome;
    var cell2 = newRow.insertCell();
    cell2.textContent = numero;
  
    // Limpar os campos do formulário
    document.getElementById('Nome').value = '';
    document.getElementById('Numero').value = '';
  });
  