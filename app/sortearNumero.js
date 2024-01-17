const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();
const elementoMenor = document.getElementById('menor-valor');
const elementoMaior = document.getElementById('maior-valor');

function gerarNumero() 
{
    const numSecreto = parseInt(Math.random() * maiorValor + 1);
    console.log(numSecreto);
    return numSecreto
}

elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;