import React, {useState} from 'react'
import logo from '../img/logo-mentalHelp2.png'
import '../css/LoginForm.css'

function LoginForm({Login, error}) {
const [details, setDetails] = useState({email: "", password: ""});

const submitHandler = e => {
  e.preventDefault();

  Login(details);
}

  return (
<form className="flex-container-login"  onSubmit={submitHandler}>
  <div className="logo-mentalHelp2">
    <img src={logo} alt="logo da Mental Help"/>
    </div>
  <div className="form-group">
    <label htmlFor="email"></label>
    <input placeholder="Email" type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
  </div>
  <div className="form-group">
    <label htmlFor="password"></label>
    <input placeholder="Digite sua senha" type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
    <h4 className="password">Esqueceu a senha?</h4>
    {(error !== "") ? (<div className="error">{error}</div>) : ""}
  </div>
 <input className="login-f" type="submit" value="Entrar" required></input>
</form>
  )
}

export default LoginForm