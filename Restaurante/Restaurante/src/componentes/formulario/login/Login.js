import React, { Component } from 'react';
import { Label } from '../../globais/label/Label';
import LogoGoDinner from '../../../recursos/imgs/img-login.png';
import { InputCadastro } from '../../globais/input/Input';
import { BotaoGrande } from '../../globais/botao/styled';


export class FormularioLogin extends Component {

    /* FORMULÁRIO DO LOGIN */
    render() {
        return (
            <form className="form-group col col-sm col-md col-lg-10">
                <div className="row justify-content-center mb-5">
                    <img src={LogoGoDinner} className="img-fluid icone-img" />
                </div>
                <div className="row mb-4">
                    <div className="mx-auto h2">Bem-vindo(a) a GoDinner</div>
                </div>
                <div className="row  justify-content-center mb-2">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <Label className="h5" texto="Email" />
                        <InputCadastro className="form-control p-1" type="password" id="" name="" placeholder="Digite a seu email .." />
                    </div>
                </div>
                <br />
                <div className="row  justify-content-center mb-5">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <Label className="h5" texto="Senha" />
                        <InputCadastro className="form-control p-1" type="password" id="" name="" placeholder="Digite a sua senha .." />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <BotaoGrande to="/cadastro" className="btn col-7 col-sm-7 col-md-7 col-lg-7 p-1">Entrar</BotaoGrande>
                </div>
                <div className="row mt-4 justify-content-center">
                    <BotaoGrande to="/cadastro" className="btn col-7 col-sm-7 col-md-7 col-lg-7 p-1">Cadastrar</BotaoGrande>
                </div>
            </form>
        )
    }

}