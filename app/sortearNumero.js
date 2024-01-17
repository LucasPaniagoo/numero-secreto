const menorValor = 11;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();
const elementoMenor = document.getElementById('menor-valor');
const elementoMaior = document.getElementById('maior-valor');


function gerarNumero() 
{
    return parseInt(Math.random() * maiorValor + 1)
}

elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;