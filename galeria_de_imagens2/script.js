var galeria = {
  x: 1,
  gradient: 1,
  recuar: function () {
    this.gradient = document.getElementsByClassName("posicao");
        if(this.x === 10) {
            this.x = 10;
        } else {
            this.x++;
        }
          this.gradient[0].style.backgroundImage = "url('../imagens-meramente-ilustrativas/2/"+ this.x +".jpg')";
  },
  avancar: function () {
    this.gradient = document.getElementsByClassName("posicao");
        if(this.x === 1) {
            this.x = 1;
        } else {
            this.x--;
        }
        this.gradient[0].style.backgroundImage = "url('../imagens-meramente-ilustrativas/2/"+ this.x +".jpg')";
  }
};
