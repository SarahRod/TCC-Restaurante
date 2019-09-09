import React from 'react';
import { PaginaCadastro } from "./paginas/cadastro/paginaCadastro";
import { PaginaLogin } from './paginas/login/PaginaLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './recursos/css/style.css';
import 'jquery/dist/jquery.js';
import 'jquery/dist/jquery.slim.js';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery-mask-plugin/dist/jquery.mask'
import { RotaPaginas } from './Rotas';
import 'bootstrap';



function App() {
  return (
    // <PaginaCadastro />
    <RotaPaginas/>
  );
}

export default App;
