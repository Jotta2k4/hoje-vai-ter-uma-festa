const botao = document.getElementsByClassName('fogos');
const conteudo = document.getElementsByClassName('conteudo');
const texto1 = document.getElementsByClassName('texto-1');
const texto2 = document.getElementsByClassName('texto-2');

function fogos(){
    botao[0].style.visibility = 'hidden';
    conteudo[0].style.display = 'block';
    texto1[0].style.visibility = 'visible';
}

function mostraTexto1(){
    texto1[0].style.visibility = 'visible';
    texto2[0].style.visibility = 'hidden';
}

function mostraTexto2(){
    texto1[0].style.visibility = 'hidden';
    texto2[0].style.visibility = 'visible';
}
