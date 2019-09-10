import React, { Component, Fragment } from 'react';
import FormularioDados from './componentes/formulario/cadastro/dadosCadastro/DadosCadastro';
import FormularioEndereco from './componentes/formulario/cadastro/enderecoCadastro/EnderecoCadastro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormularioLogin from './componentes/formulario/cadastro/login/Login';
import { FormularioBemVindo } from './componentes/formulario/cadastro/bemVindo/BemVindo'
import { PaginaLogin } from './paginas/login/PaginaLogin';
import { PaginaCadastro } from './paginas/cadastro/paginaCadastro';
import { Rodape } from './componentes/rodape/cadastro/rodape';
import { CabecalhoPaginaRestaurante } from './componentes/cabecalho/restaurante/Cabecalho';
import { MenuRestaurante } from './componentes/menu/Menu';
import { CorpoIndex } from './componentes/corpo/index/Corpo';

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
                                    <Route path={`${url}/endereco`} component={FormularioEndereco} />
                                    <Route path={`${url}/login`} component={FormularioLogin} />
                                    <Route path={`${url}/bem-vindo`} component={FormularioBemVindo} />
                                    <Rodape />
                                </Fragment>

                            )}
                        />

                        <Route path="/restaurante" render={({ match: { url } }) => (
                            <Fragment>
                                <CabecalhoPaginaRestaurante />
                                <CorpoIndex/>
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