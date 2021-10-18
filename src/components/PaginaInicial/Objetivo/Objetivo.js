import React from 'react';
import './Objetivo.css';
import '../../global.css';
import imagemPaginaInicial2 from '../../../img/imagemPaginaInicial2.png';

function Paginainicial2 (){
  return (
    <>
      <div className="background">
        <div className="flex-container" id="componenteObjetivo">
          <div className="container-objetivo">
            <h1>Por mais difícil que seja o caminho você não está sozinho.</h1>
            <p>Nosso objetivo é criar uma rede de apoio para te auxiliar a cuidar de si mesmo. Escreva sobre sua jornada e acompanhe seu crescimento pessoal.</p>
          </div>
          <div>
            <img className="tamanho-img" src={imagemPaginaInicial2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Paginainicial2;