import React from "react";
import '../css/BannerDicas.css';
import procrastinação from '../img/procrastinacao.png';
import ansiedade from '../img/ansiedade.png';
import foco from '../img/foco.png';
import memoria from '../img/memoria.png';
import solidao from '../img/solidao.png';
import burnout from '../img/burnout.png';

function BannerDicas() {
  return(
<div className="dicas-background">
<div className="box">
  <div className="card">
    <h1 className="main-text">Procrastinação</h1>
    <img className="cards-photos"src={procrastinação} alt="Imagem de uma moça sentada na frente do computador sem estar fazendo suas tarefas." />
    <p className="sec-text">Para você que deixa tudo para o último  momento, venha aprender bons      hábitos.</p>
    <div className="button-sm">
       <button className="saiba-mais">Saiba Mais</button>
    </div>
  </div>
  
  <div className="card">
    <h1 className="main-text">Ansiedade</h1>
    <img className="cards-photos"src={ansiedade} alt="Uma imagem de uma pessoa meditando." />
    <p className="sec-text">Para você que não consegue viver um dia de cada vez, venha aprender a respirar.</p>
    <div className="button-sm">
       <button className="saiba-mais">Saiba Mais</button>
    </div>
  </div>

  <div className="card">
    <h1 className="main-text">Foco</h1>
    <img className="cards-photos"src={foco} alt="Uma imagem de uma pessoa sentada em um banco."/>
    <p className="sec-text">Para você que possui um objetivo, mas não consegue ter foco, venha aprender alguns métodos.</p>
    <div className="button-foco">
       <button className="saiba-mais">Saiba Mais</button>
    </div>
  </div>

  <div className="card">
    <h1 className="main-text">Memória</h1>
    <img className="cards-photos"src={memoria} alt="Uma imagem de um homem ensinando uma criança a andar de skate." />
    <p className="sec-text">Para você está  esta tendo dificuldades de recordar, venha aprender algumas técnicas pra te auxiliar.</p>
    <div className="button-memoria">
       <button className="saiba-mais">Saiba Mais</button>
    </div>
  </div>

  <div className="card">
    <h1 className="main-text">Solidão</h1>
    <img className="cards-photos"src={solidao} alt="Imagem ilustrando uma pessoa isolada." />
    <p className="sec-text">Para você que está se sentindo só, venha descobrir o quão importante você é.</p>
    <div className="button-sm">
       <button className="saiba-mais">Saiba Mais</button>
    </div>
  </div>

  <div className="card">
    <h1 className="main-text">Burnout</h1>
    <img className="cards-photos"src={burnout} alt="Imagem ilustrando uma pessoa cheia de notificações no celular." />
    <p className="sec-text">Para você sobrecarregado pela rotina, venha aprender maneiras para tirar o pé do acelerador.</p>
    <div className="button-sm">
       <button className="saiba-mais">Saiba Mais</button>
    </div>
  </div>

  </div>
</div> 

  )
} 

export default BannerDicas