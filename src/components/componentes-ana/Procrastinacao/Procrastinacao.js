import React from 'react';
import '../css/Procrastinacao.css'
import procrastinação from '../img/procrastinacao-g.png'

function Procrastinação() {
  return (
<div className="background-p">
  <div className="container-p">
    <div className="text-pr">
      <h1 className="title-pr">Procrastinação</h1>
      <p className="parag-pr">Sabemos que deixar para fazer nossas tarefas depois só vai nos gerar estresse e ansiedade,<br /> mas ainda sim fazemos tudo na última hora.<br /> Pior, criamos o hábito de procrastinar até<br /> mesmo nas pequenas coisas. <br />
      Comece sua jornada para vencer a procrastinação de uma vez por todas.</p>
    </div>
    <div className="img-pr">
      <img class="image-pr"src={procrastinação} alt="Imagem de uma mulher sentada na frente do computador,sem fazer as tarefas necessárias"/>
    </div>
</div>
</div>
  )
}

export default Procrastinação