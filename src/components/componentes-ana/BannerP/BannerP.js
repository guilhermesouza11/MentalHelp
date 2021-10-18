import React from "react";
import '../css/BannerP.css';
import trello from '../img/trellologo.png';
import notion from'../img/notionlogo.png';
import calendário from "../img/calendario.png";
import calendário2 from "../img/calendario2.png"
 
function BannerP() {
  return(
    <div className="container-p">
      <div className="box-p">
        <div className="card-p">
          <h1 className="card-title">Como vencer a Procrastinação?</h1>
          <div className="list-container">
            <ul className="list-p"> 
               <li className="elem-list">Mantenha uma lista de afazeres diários</li>
               <li className="elem-list">Programe seu dia para não esquecer de nada.</li>
               <li className="elem-list">Divida tarefas grandes em pequenas partes: A tarefa parece muito difícil? Divida ela em etapas.</li>
               <li className="elem-list">Estabeleça habitos saudáveis: Utilize nosso calendário para marcar os dias que você cumpriu com seu novo hábito! É importante não pular nenhum dia.</li>
               <li className="elem-list">Tenha foco em uma tarefa por vez.Não queria fazer mil coisas ao mesmo tempo.</li>
            </ul>
         </div>
        </div>

        <div className="card-p">
          <h1 className="card-title">Aplicativos Recomendados:</h1>
        <div className="logos-apps">
          <a href="https://trello.com/pt-BR?&aceid=&adposition=&adgroup=113770574286&campaign=11821318527&creative=486381205189&device=c&keyword=trello&matchtype=e&network=g&placement=&ds_kids=p59407427523&ds_e=GOOGLE&ds_eid=700000001550057&ds_e1=GOOGLE&gclid=EAIaIQobChMI8sXfno_L8wIVDBCRCh3abgBiEAAYAiAAEgIuePD_BwE&gclsrc=aw.ds" target="_blank" rel="noreferrer">
          <img className="logo-app-tips"src={trello} alt="logo do site Trello"/>
          </a>
        </div>
        <div className="logos-apps">
         <a href="https://www.notion.so/pt-br" target="_blank" rel="noreferrer" >
         <img className="logo-app-tips"src={notion} alt="logo do site Notion"/>
         </a>
        </div>
        </div>

        <div className="card-p">
          <h1 className="card-title">Checklist</h1>
        <div className="checklist-content">
      <ul>
      <li className="check">Terminar todas as metas até o final da semana.</li>
      <li className="check-1">Escrever meu TCC até 11/21.</li>
      <li className="check-1">Concluir meu curso até 12/21.</li>
      <li className="check-1">Ser finalista do bootcamp da EloGroup.</li>
      <li className="check">Me exercitar 3 vezes na semana.</li>
      <li className="check">Estudar inglês 4 vezes na semana.</li>
      </ul>
  </div>
  </div>

  <div className="card-p">
    <h1 className="card-title">Calendário</h1>
  <div className="calendar">
      <img className="calend" src={calendário} alt="imagem ilustrativa de um calendário." />
      <img className="calend" src={calendário2} alt="imagem ilustrativa de um calendário." />
  </div>
  </div>
   </div>
    </div>
   
  )
};

export default BannerP