
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) 
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) 
    {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) 
    {
        return gerarNumeroAleatorio();
    } 
    else 
    {
        return numeroEscolhido;
    }
}

function verificarChute() 
{
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) 
    {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        //'Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativa + '!'
        //alert('Acertou');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else 
    {
        tentativas = tentativas + 1;
        if (chute > numeroSecreto) 
        {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } 
        else 
        {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
}

function limparCampo() 
{
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() 
{ 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    //responsiveVoice.speak(texto);
}

function exibirTextoNaTela(tag, texto) 
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0} );

}

function reiniciarJogo() 
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
