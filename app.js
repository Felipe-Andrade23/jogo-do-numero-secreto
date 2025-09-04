let listaDeNumerosSorteados = [];
let numeroLimete = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirmensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto 2.0');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirmensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo()
        }
    }
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimete + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimete){
        listaDeNumerosSorteados =[];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}