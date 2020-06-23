class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.frameAtual = 0;
  }
  
  exibe() {
    image(this.imagem,0,height-135, 110,135, this.calculaMatrizX(),this.calculaMatrizY(),220,270);
    this.anima();
  }
  
  anima() {
    this.frameAtual++;
    if(this.frameAtual > 15){
      this.frameAtual= 0;
    }
  }
  
  calculaMatrizX(){
    let i = this.frameAtual;
    return i % 4 * 220;
  }
  
  calculaMatrizY(){
    let i = this.frameAtual;
    return (i-(i % 4))/4*270;
  }
  
}