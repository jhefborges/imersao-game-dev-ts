let imagemCenario;
let imagemPersonagem;
let cenario;
let somDojogo;
let personagem;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png'); 
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 5);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  somDoJogo.setVolume(0.1);
  somDoJogo.play();
}

function draw() {
  
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  
}