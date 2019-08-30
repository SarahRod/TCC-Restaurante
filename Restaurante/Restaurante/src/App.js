import React, { Fragment } from 'react';
import { PaginaCadastro } from "./paginas/cadastro/paginaCadastro"
import {PaginaHomeGoDinner} from "./paginas/Godinner/paginaHomeGoDinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './recursos/css/style.css';
import 'popper.js/dist/popper.min.js';
import './recursos/css/styleHomeGoDinner.css';


function App() {
  return (
  <PaginaCadastro/>
    // <PaginaHomeGoDinner/>
  );
}

export default App;
