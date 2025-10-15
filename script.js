// const imagemVisualizacao = document.getElementById("visualizacao");
const imagemVisualizacao = document.querySelector("#visualizacao img");
// o querySelector pega o elemento escolhido dentro de algum Id ou Class
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector('#nome-cor-selecionada');
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

const opcoesTamanho = ['41 mm', '45 mm'];
const opcoesCores = [
    "Verde-cipreste",
    "Azul-inverno",
    "Meia-Noite",
    "Estelar",
    "Rosa-claro",
];

function atualizarCorSelecionada(){

    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);

    numCorSelecionada = opcaoCorSelecionada;

    const nomeCor = opcoesCores[numCorSelecionada];

    // console.log(nomeCor);

    tituloProduto.innerText = "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoesTamanho[numTamanhoSelecionado]; // toLowerCase() deixa tudo minúsculo

    nomeCorSelecionada.innerText = "Cor - " + nomeCor;
    
    // console.log(numImagemSelecionada);
    
    imagemVisualizacao.src = "imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-" + numImagemSelecionada + ".jpeg";

    imagemMiniatura0.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-0.jpeg";

    imagemMiniatura1.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "//imagem-0.jpeg";

    imagemMiniatura2.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-2.jpeg";


}

function atualizarTamanho(){
    
    const opcaoTamanhoSelecionado = document.querySelector(
        '[name="opcao-tamanho"]:checked').id.charAt(0);
    
    // console.log('clicou');
    
    numTamanhoSelecionado = opcaoTamanhoSelecionado;
    // console.log(numTamanhoSelecionado);

    const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[numCorSelecionada].toLowerCase() + "para caixa de " + tamanhoCaixa;

    if(tamanhoCaixa === '41 mm'){

        imagemVisualizacao.classList.add('caixa-pequena');
    }else{
        
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function atualizarImagemSelecionada(){
    const opcaoImagemSelecionada = document.querySelector(
        '[name="opcao-imagem"]:checked'
    ).id.charAt(0); //charAt pega o caractere na posição inserida
    // uma variável declarada dentro da função faz com que ela atualize cada vez que a função for inicializada

    // console.log(opcaoImagemSelecionada);
    numImagemSelecionada = opcaoImagemSelecionada;

    imagemVisualizacao.src = "imagens/opcoes-cores/imagens-" +opcoesCores[numCorSelecionada].toLowerCase() +"/imagem-" + numImagemSelecionada + ".jpeg";
}

// atualizarImagemSelecionada();