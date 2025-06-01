// Controle simples para tocar e pausar música com clique
const musica = document.getElementById('music.mp3');

musica.volume = 0.2; // Volume baixo para não incomodar

document.body.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});
