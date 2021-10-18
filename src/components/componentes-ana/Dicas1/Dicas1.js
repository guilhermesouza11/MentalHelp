import React from 'react';
import '../css/Dicas1.css';
import dicas from '../img/dicas.png'


function Dicas1() {
  return (
    <div className="flex-container tips">
        <div className="begin">
          <h1 className="main-tip">Um objetivo e diversos <br />caminhos.</h1>
          <p className="overview">Se sua a meta é cuidar de si mesmo e está com dúvida de como chegar lá escolha uma a opção abaixo com a qual mais se identifica e inicie sua jornada. </p>
        </div>
        <div className="img-man">
          <img src={dicas} alt="" />
        </div>
      </div>
  )
}

export default Dicas1