//Clicar no botão para trocar imagem.
//Passo a passo:

//1 - pegar o elemento HTML dos botões e as imagens
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//2 - identificar o clique do botão pelo usuário
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //4 - marcar o botão clicado como selecionado
        botao.classList.add('selecionado');

        //5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        //6 - fazer apacerer a imagem de fundo correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');
    });
});



function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}