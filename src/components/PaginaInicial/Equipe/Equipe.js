import React from 'react';
import './Equipe.css';
import imgPerfilAna from '../../../img/imgPerfilAna.png';
import imgPerfilAugusto from '../../../img/imgPerfilAugusto.png';
import imgPerfilErica from '../../../img/imgPerfilErica.png';
import imgPerfilGabriela from '../../../img/imgPerfilGabriela.png';
import imgPerfilGuilherme from '../../../img/imgPerfilGuilherme.png';

function Equipe(){
  return(
    <>
    <div className="background-equipe">
      <div className="flex-container equipe">
        <div>
          <h1 className="titulo-equipe">Equipe</h1>
        </div>
        <div>
          <p className="texto-descricao">Equipe com ideias constantes e muita vontade de aprender, formada a partir do bootcamp da <strong>EloGroup</strong> 💖</p>
        </div>
        <div className="list-equipe">
          <div className="item-equipe">
            <a href="https://www.linkedin.com/in/anacrln">
              <img className="imgPerfil" src={imgPerfilAna} alt="" />
            </a>
            <p className="texto-nome">Ana Carolina</p>
            <div className="barra"></div>
            <p className="texto-frase">Conhecimento é sempre a melhor escolha.</p>
          </div>
          <div className="item-equipe">
            <a href="https://www.linkedin.com/in/augusto-moura-5072b5181">
              <img className="imgPerfil" src={imgPerfilAugusto} alt="" />
            </a>
            <p className="texto-nome">Augusto Moura</p>
            <div className="barra"></div>
            <p className="texto-frase">O conhecimento é uma ferramenta, e como qualquer ferramenta, seu impacto está nas mãos de quem usa.</p>
          </div>
          <div className="item-equipe">
            <a href="https://www.linkedin.com/in/erica-santoss">
              <img className="imgPerfil" src={imgPerfilErica} alt="" />
            </a>
            <p className="texto-nome">Érica Santos</p>
            <div className="barra"></div>
            <p className="texto-frase">“Uma pessoa que nunca cometeu um erro , nunca tentou nada de novo.” <br /> -Albert Einstein.</p>
          </div>
          <div className="item-equipe">
            <img className="imgPerfil" src={imgPerfilGabriela} alt="" />
            <p className="texto-nome">Gabriela Ferreira</p>
            <div className="barra"></div>
            <p className="texto-frase">Cuidar de si é o primeiro passo para realizar seu grande sonho.</p>
          </div>
          <div className="item-equipe">
            <a href="https://www.linkedin.com/in/guilhermesouzadossantos/">
              <img className="imgPerfil" src={imgPerfilGuilherme} alt="" />
            </a>
            <p className="texto-nome">Guilherme Souza</p>
            <div className="barra"></div>
            <p className="texto-frase">"É possível erradicar pequenos bloqueios mentais do cotidiano, com pequenos passos, e sabemos que a tecnologia, sabendo usar, pode nos proporciona esse efeito."</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Equipe;