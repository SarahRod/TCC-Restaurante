import React, { Component, Fragment } from 'react';
import FormularioDados from './componentes/formulario/cadastro/dadosCadastro/DadosCadastro';
import FormularioEndereco from './componentes/formulario/cadastro/enderecoCadastro/EnderecoCadastro';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FormularioLogin from './componentes/formulario/cadastro/login/Login';
import { FormularioBemVindo } from './componentes/formulario/cadastro/bemVindo/BemVindo'
import { Lista } from './componentes/lista/Lista'
import { PaginaLogin } from './paginas/login/PaginaLogin';
import { PaginaCadastro } from './paginas/cadastro/paginaCadastro';
import { Rodape } from './componentes/rodape/cadastro/rodape';

import ItensLista from './componentes/lista/Lista';
import $ from 'jquery';


import CorpoListagemProdutos from "./componentes/corpo/listagemProdutos/CorpoListagemProduto";


import { PaginaCadastroProduto } from './paginas/cadastroProduto/PaginaCadastroProduto';

import CabecalhoPaginaRestaurante from './componentes/cabecalho/restaurante/Cabecalho';
import { MenuRestaurante } from './componentes/menu/Menu';
import { CorpoIndex } from './componentes/corpo/index/Corpo';

export const estaAutenticado = () => localStorage.getItem("token") != null;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        estaAutenticado() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

/*PROPRIEDADES DO CABEÇALHO*/
const teste = {
    nome: "Sarah"
}


export class RotaPaginas extends Component {

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        
                        {
                            /*Só p testar pág de Listagem de produtos */
                            /*  */
                        }

                        <Route path="/" exact component={PaginaLogin} />

                        <Route
                            path="/cadastro" render={({ match: { url } }) => (
                                <Fragment>
                                    <Route path={`${url}/`} component={FormularioDados} exact />
                                    <Route path={`${url}/endereco`} component={FormularioEndereco} />
                                    <Route path={`${url}/login`} component={FormularioLogin} />
                                    <Route path={`${url}/bem-vindo`} component={FormularioBemVindo} />

                                    <Route path={`${url}/produtos`} component={CorpoListagemProdutos} />
                                    <Rodape />

                                </Fragment>

                            )}
                        />
                        <Route
                            path='/cadastroProduto' render={({match:{url}}) =>(
                              <Fragment>
                                  <Route path={`${url}/`} component={PaginaCadastroProduto}/>
                              </Fragment>  
                            )}
                        />

                        <Route path="/restaurante" render={({ match: { url } }) => (
                            <Fragment>
                                <CabecalhoPaginaRestaurante/>
                                <br/>
                                <PrivateRoute path="/" component={CorpoIndex} />
                                <Rodape />
                            </Fragment>

                        )}
                        />

                    </Switch>
                </ BrowserRouter>
            </Fragment>
        )
    }
}