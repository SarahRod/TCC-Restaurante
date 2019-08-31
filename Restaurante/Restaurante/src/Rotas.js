import React, { Component, Fragment } from 'react';
import FormularioDados from './componentes/formulario/cadastro/dadosCadastro/DadosCadastro';
import { FormularioEndereco } from './componentes/formulario/cadastro/enderecoCadastro/EnderecoCadastro';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { FormularioLogin } from './componentes/formulario/cadastro/login/Login';
import { FormularioBemVindo } from './componentes/formulario/cadastro/bemVindo/BemVindo'

export class RotaFormularioCadastro extends Component {
    render() {
        return (
           <Fragment>
               <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={FormularioDados} history ={this.history} />
                        <Route path="/endereco" component={FormularioEndereco} history ={this.history} />
                        <Route path="/login" component={FormularioLogin} history ={this.history} />
                        <Route path="/bem-vindo" component={FormularioBemVindo} history ={this.history} />
                    </Switch>
                </ BrowserRouter>                
           </Fragment>
        )
    }
}

export class RotaSetaCadastro extends Component {
    render() {
        return (
           <Fragment>
               <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={FormularioDados} />
                        <Route path="/endereco" component={FormularioEndereco} />
                        
                    </Switch>
                </ BrowserRouter>                
           </Fragment>
        )
    }
}