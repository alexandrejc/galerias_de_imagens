var galeria = {
            posicao: 0,
            getPosicao: function () {
            	return this.posicao;
            },
            setPosicao: function (posicaoTotal) {
            	this.posicao = posicaoTotal;
            },
            imagens: function (ini) {
            	if ((galeria.getPosicao() > -5912) && (ini == 1)) {
            	   var contador = -739;
            	   contador += galeria.getPosicao();
                    galeria.setPosicao(contador);
                    with (document.getElementById("figura").style) {
                        position = "relative";
                        left = galeria.getPosicao() + "px";
                        transitionProperty = "left";
                        transitionDuration= ".4s";
                        transitionTimingFunction = "linear";
                        contador += galeria.getPosicao();
                  }
              }
              if ((galeria.getPosicao() < 0) && (ini == 0)) {
                    var contador = 739;
                    contador += galeria.getPosicao();
                    galeria.setPosicao(contador);
                    with(document.getElementById("figura").style) {
                        position = "relative";
                        left = galeria.getPosicao() + "px";
                        transitionProperty = "left";
                        transitionDuration= ".4s";
                        transitionTimingFunction = "linear";
                    }
                    contador += galeria.getPosicao();
              }
            },
};
