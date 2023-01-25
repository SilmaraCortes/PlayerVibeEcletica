let musica = document.querySelector('audio');

document.querySelector('.botao-pay').addEventListener('click', tocarMusica);

function tocarMusica() {
    musica.play();
}