import React, { Component, Fragment } from 'react';
import FormularioDados from './componentes/formulario/cadastro/dadosCadastro/DadosCadastro';
import FormularioEndereco from './componentes/formulario/cadastro/enderecoCadastro/EnderecoCadastro';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import  FormularioLogin  from './componentes/formulario/cadastro/login/Login';
import { FormularioBemVindo } from './componentes/formulario/cadastro/bemVindo/BemVindo'
import { PaginaLogin } from './paginas/login/PaginaLogin';
import { PaginaCadastro } from './paginas/cadastro/paginaCadastro';

export class RotaFormularioCadastro extends Component {
    render() {
        return (
           <Fragment>
               <BrowserRouter>
                    <Switch>
                        <Route path="/cadastro" exact component={FormularioDados} history ={this.history} />
                        <Route path="/cadastro/endereco" component={FormularioEndereco} history ={this.history} />
                        <Route path="/cadastro/login" component={FormularioLogin} history ={this.history} />
                        <Route path="/cadastro/bem-vindo" component={FormularioBemVindo} history ={this.history} />
                        <Route path="/login" component={FormularioBemVindo} history ={this.history} />
                    </Switch>
                </ BrowserRouter>                
           </Fragment>
        )
    }
}

export class RotaPaginas extends Component {
    render() {
        return (
           <Fragment>
               <BrowserRouter>
                    <Switch>
                        <Route path="/login" exact component={PaginaLogin} history ={this.history} />
                        <Route path="/cadastro" component={PaginaCadastro} history ={this.history} />
                    </Switch>
                </ BrowserRouter>                
           </Fragment>
        )
    }
}