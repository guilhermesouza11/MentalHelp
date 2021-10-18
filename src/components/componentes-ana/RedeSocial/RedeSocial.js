import React from 'react'
import '../css/RedeSocial.css'
import comentar from '../img/comentar.png'

function RedeSocial() {
  return (
  
  <div className="flex-container">
     <div className="main-s">         
        <div className="new-post"> 
          <div className="form-s">
            <form action="" className="form-post">
            <textarea className="título-post" placeholder="Título" required></textarea>
            <textarea className="textarea" placeholder="Como você está se sentindo hoje?" required></textarea>
            <div className="btn-s">
            <input className="submit-s" type="submit" value="Publicar"></input>
            </div>
            </form>
          </div>
       </div>
     </div>
     <div className="container-post">
        <ul className="posts">
        <li className="user-post">
        <div className="info-post">
          <div className="name-day">
          <span className="title-s">25 e ainda perdida...</span>
          <p className="day">21 out 2021</p> 
           </div>
        </div>
          <p className="post">Completei 25 anos recentemente e ainda não sei o que quero fazer da vida. Embora esteja para terminar meu TCC não sei se isso é realmente o que eu quero.</p>
          <div className="comments">2 Comentários</div>
          <hr />
          <div className="comment">
            <img className="comment-2" src={comentar} alt="ícone de comentar,similar aos encontrados nas redes sociais."/>
             Comentar
          </div>          
          </li>
          </ul>      
          </div>

          <div className="container-post">
          <ul className="posts">
          <li className="user-post">
            <div className="info-post">
            <div className="name-day">
            <span className="title-s">Estou muito Cansado</span>
            <p className="day">22 out 2021</p> 
            </div>
            </div>
            <p className="post">Desde que a pandemia começou tenho tido o dobro de trabalho. Levei o estresse para casa e agora estou brigando até com meu cachorro. Não tenho dormido bem, não tenho comido bem, não tenho nem conseguido falar com meus amigos.
            Está bem difícil.</p>
           <div className="comments">3 Comentários</div>
           <hr />
           <div className="comment">
            <img className="comment-2"src={comentar} alt="ícone de comentar,similar aos encontrados nas redes sociais."/>
            Comentar
           </div> 
          </li>
          </ul>      
          </div>

          <div className="container-post">
          <ul className="posts">
          <li className="user-post">
          <div className="info-post">
          <div className="name-day">
           <span className="title-s">Tão só...</span>
           <p className="day">27 out 2021</p> 
          </div>
          </div>
          <p className="post">Tenho me sentido muito sozinha, sem direção e sem muita vontade de acordar. Perdi meu emprego há algumas semanas e sei que deveria estar procurando coisas novas, mas não consigo me esforçar. Meu emprego era tudo para mim e agora estou sem nada.</p>
          <div className="comments">7 Comentários</div>
           <hr />
          <div className="comment">
           <img className="comment-2"src={comentar} alt="ícone de comentar,similar aos encontrados nas redes sociais." />
             Comentar
          </div> 
          </li>
          </ul>      
          </div>

          <div className="container-post">
          <ul className="posts">
          <li className="user-post">
          <div className="info-post">
          <div className="name-day">
          <span className="title-s">O procrastinador</span>
           <p className="day">27 out 2021</p> 
          </div>
          </div>
          <p className="post">Tenho milhares de coisas para fazer, mas deixo tudo para cima da hora. Quero colocar minha vida nos trilhos para poder sair da pandemia como uma pessoa melhor.</p>
           <div className="comments">2 Comentários</div>
           <hr />
           <div className="comment">
             <img className
             className="comment-2"src={comentar} alt="ícone de comentar,similar aos encontrados nas redes sociais."/>
             Comentar
             </div> 
           </li>
           </ul>      
           </div>
        </div>
  
  
  

       

    
      
  

  )
}

export default RedeSocial 