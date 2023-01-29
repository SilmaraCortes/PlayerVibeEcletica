let musicas = [
    {titulo:'Me adora', artista:'Pitty', src:'musicas/Me adora.mp3',
    img:'imagens/BATERIA.jpg'},
    {titulo:'Trevo (Tu)', artista:'Anavitória', src:'musicas/Trevo (Tu).mp3',
    img:'imagens/musicacalma.jpg'},
    {titulo:'Is this love', artista:'Bob Marley', src:'musicas/Is This Love.mp3',
    img:'imagens/musicadeamor.jpg'},
    {titulo:'Natural', artista:'Imagine Dragons', src:'musicas/Imagine_Dragons_-_Natural.mp3',
    img:'imagens/rockandroll.jpg'},
    {titulo:'Malandragem', artista:'Cássia Eller', src:'musicas/Cássia Eller - Malandragem.mp3',
    img:'imagens/musicaviolao.jpg'},
];


let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica --;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica ++;
    if (indexMusica > 5) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
       nomeMusica.textContent = musicas[index].titulo;
       nomeArtista.textContent = musicas[index].artista;
       imagem.src = musicas[index].img;
       duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}
