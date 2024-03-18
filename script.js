document.getElementById('formulario').addEventListener('submit', function (event){
event.preventDefault();

var nome = document.getElementById('nome').value;
var idade = document.getElementById('idade').value;
var email = document.getElementById('email').value;

adicionarLinha(nome, idade, email);

});

function adicionarLinha( nome, idade, email) {
    var tabela = document.getElementById('tabelaUsuarios');
    var novaLinha = tabela.insertRow();
    var celula1 = novaLinha.insertCell(0);
    var celula2 = novaLinha.insertCell(1);
    var celula3 = novaLinha.insertCell(2);
    celula1.innerHTML = nome;
    celula2.innerHTML = idade;
    celula3.innerHTML = email;
}

