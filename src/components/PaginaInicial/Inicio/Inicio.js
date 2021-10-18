import React from 'react';
import './Inicio.css';
import '../../global.css';
import imagemPaginaInicial1 from '../../../img/imagemPaginaInicial1.png';

function PaginaInicial1(){
  return (
    <>
      <div id="paginaInicio" className="flex-container">
        <div className="container-inicio">
          <div>
            <h1>Cuide-se compartilhando<br />suas experiencias!</h1>
            <p className="texto-inicio">O Mental Help oferece caminhos e dicas para você desenvolver suas capacidades e levar uma vida mais leve e saudável com foco no seu emocional. Comece sua jornada hoje mesmo!</p>
          </div>
          <div className="btns-inicio">
            <button className="btn-cadastro">Cadastre-se</button>
            <button className="btn-diarios">Veja alguns diários</button>
          </div>
        </div>
        <div>
          <img className="tamanho-img" src={imagemPaginaInicial1} alt="" />
        </div>
      </div>
    </>
  )
}

export default PaginaInicial1;