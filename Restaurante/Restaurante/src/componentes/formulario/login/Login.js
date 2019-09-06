import React, { Component } from 'react';
import { Label } from '../../globais/label/Label';
import LogoGoDinner from '../../../recursos/imgs/img-login.png';
import { InputCadastro } from '../../globais/input/Input';
import { BotaoLink } from '../../globais/botao/Botao';


export class FormularioLogin extends Component {

    /* FORMULÁRIO DO LOGIN */
    render() {
        return (
            <form className="form-group ml-3 mr-3 col-lg-7 align-items-center">
                <div className="row mb-5 pl-5 align-items-center">
                    <img src={LogoGoDinner} className="img-fluid icone-img" />
                </div>
                <div className="row mb-5">
                    <div className="mx-auto h1">Bem-vindo(a) a GoDinner</div>
                </div>
                <div className="row  justify-content-md-center mb-3">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <Label className="ml-3 h5" texto="Email" />
                        <InputCadastro className="form-control p-1 ml-3 mr-3" type="password" id="" name="" placeholder="Digite a seu email .." />
                    </div>

                </div>
                <br />
                <div className="row  justify-content-md-center mb-5">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <Label className="ml-3 h5" texto="Senha" />
                        <InputCadastro className="form-control p-1 ml-3 mr-3" type="password" id="" name="" placeholder="Digite a sua senha .." />
                    </div>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    <BotaoLink to="/cadastro" className="col-8 col-sm-8 col-md-8 col-lg-7 p-1 ml-5 mr-3" texto="Entrar"></BotaoLink>
                </div>
                <div className="row mt-4 justify-content-md-center">
                    <BotaoLink to="/cadastro" className="col-8 col-sm-8 col-md-8 col-lg-7 p-1 ml-5 mr-3" texto="Cadastrar"></BotaoLink>
                </div>
            </form>
        )
    }

}