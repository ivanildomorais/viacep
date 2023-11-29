document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cep = document.getElementById('cepInput').value;
    buscarCEP(cep);
  });
  
  function buscarCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          document.getElementById('result').innerHTML = 'CEP não encontrado.';
        } else {
          const resultado = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
          `;
          document.getElementById('result').innerHTML = resultado;
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  