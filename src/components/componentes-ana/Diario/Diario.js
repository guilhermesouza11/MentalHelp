import React from "react";
import '../css/Diario.css';
import diário from "../img/diario.png"

function Diário() {
  return (
    <div className="background-p">
      <div className="container-p">
        <div className="text-p">
          <h1 className="title-p">Crie um diário e comece sua jornada.</h1>
          <p className="parag-p">Que tal começar compartilhando o motivo de estar aqui? Divida um pouco da sua vida conosco, tenha liberdade pra escrever o que quiser.<br />
          Está sem inspiração? Dê uma olhadinha na página e acompanhe o que outras pessoas estão compartilhando.</p>
        </div>
        <div className="img-d">
          <img class="image-p"src={diário} alt="Imagem de uma mulher ao lado de um bloco de mensagens grande." />
        </div>
       </div>
      </div>
  )
}

export default Diário