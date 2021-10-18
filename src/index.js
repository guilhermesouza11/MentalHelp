import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/PaginaInicial/Header/Header';
import Inicio from './components/PaginaInicial/Inicio/Inicio';
import Objetivo from './components/PaginaInicial/Objetivo/Objetivo';
import Historia from './components/PaginaInicial/Historia/Historia';
import Equipe from './components/PaginaInicial/Equipe/Equipe';
import Footer from './components/PaginaInicial/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Inicio />
    <Objetivo />
    <Historia />
    <Equipe />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);