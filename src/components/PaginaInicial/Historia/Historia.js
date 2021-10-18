import React from 'react';
import './Historia.css';
import imagemPaginaInicial3 from '../../../img/imagemPaginaInicial3.png';

function Historia (){
  return (
    <>
      <div id="paginaInicial3" className="flex-container align-itens">
        <div className="texto-historia">
          <h1>Historia</h1>
          <p>
            A Mental Help nasceu em um BootCamp oferecido pela Elogroup. Formada por um grupo majoritário de programadores, nosso intuito é facilitar o acesso a informação sobre saúde mental.
          </p>
          <p>
            A proposta é estimular o compartilhamento de experiências para mostrar que o caminho é complicado, mas é necessário paciência para chegar em seu objetivo. 
            Criar um diário e acompanhar seu progresso irá te estimular a continuar sua caminhada com mais forças.
          </p>
        </div>
        <div className="">
          <img className="tamanho-img" src={imagemPaginaInicial3} alt="" />
        </div>
      </div>
    </>
  )
}

export default Historia;