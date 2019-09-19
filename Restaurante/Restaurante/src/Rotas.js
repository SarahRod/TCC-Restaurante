import React, { Component, Fragment } from 'react';
import FormularioDados from './componentes/formulario/cadastro/dadosCadastro/DadosCadastro';
import FormularioEndereco from './componentes/formulario/cadastro/enderecoCadastro/EnderecoCadastro';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FormularioLogin from './componentes/formulario/cadastro/login/Login';
import { FormularioBemVindo } from './componentes/formulario/cadastro/bemVindo/BemVindo'
import { PaginaLogin } from './paginas/login/PaginaLogin';
import { PaginaCadastro } from './paginas/cadastro/paginaCadastro';
import { Rodape } from './componentes/rodape/cadastro/rodape';
import CorpoListagemProdutos from "./componentes/corpo/listagemProdutos/CorpoListagemProduto";
import { PaginaCadastroProduto } from './paginas/cadastroProduto/PaginaCadastroProduto';
import CabecalhoPaginaRestaurante from './componentes/cabecalho/restaurante/Cabecalho';
import { MenuRestaurante } from './componentes/menu/Menu';
import { CorpoIndex } from './componentes/corpo/index/Corpo';

export const estaAutenticado = () => localStorage.getItem("token") != null || sessionStorage.getItem("dados") != null;

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

export class RotaPaginas extends Component {

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>

                        <Route path="/" exact component={PaginaLogin} />

                        <Route
                            path="/cadastro" render={({ match: { url } }) => (
                                <Fragment>
                                    <Route path={`${url}/`} component={FormularioDados} exact />
                                    <PrivateRoute path={`${url}/endereco`} component={FormularioEndereco} />
                                    <PrivateRoute path={`${url}/login`} component={FormularioLogin} />
                                    <PrivateRoute path={`${url}/bem-vindo`} component={FormularioBemVindo} />
                                    <Rodape />
                                </Fragment>

                            )}
                        />

                        <Route path="/restaurante" render={({ match: { url } }) => (
                            <Fragment>
                                <CabecalhoPaginaRestaurante />
                                <PrivateRoute path={`${url}/`} component={CorpoIndex} exact />
                                <PrivateRoute path={`${url}/cadastro-produto`} component={PaginaCadastroProduto} />
                                <PrivateRoute path={`${url}/visualizar-produto`} component={CorpoListagemProdutos} />
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