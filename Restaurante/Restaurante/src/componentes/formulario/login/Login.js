import React, { Component } from 'react';
import { Label } from '../../globais/label/Label';
import LogoGoDinner from '../../../recursos/imgs/img-login.png';
import { InputCadastro } from '../../globais/input/Input';
import { BotaoGrande } from '../../globais/botao/styled';
import $ from 'jquery';
import { DOMINIO } from '../../../link_config';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";


//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    restaurante: {
        email: '',
        senha: '',
    },

    classErro: '',
    textoErro: ''
}

class FormularioLogin extends Component {

    state = { ...initialState }

    //PROPRIEDADES DO WITH ROUTER
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    //ENVIA A REQUISIÇÃO
    enviaFormulario() {

        const restaurante = { ...this.state.restaurante }

        const url = `${DOMINIO}/login/restaurante`;

        const email = this.state.restaurante.email;

        const senha = this.state.restaurante.senha;

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "email": email, "senha": senha }),
            dataType: 'json',
            contentType: "application/json",
            success: function (resposta) {

                console.log(JSON.stringify(resposta));

                const respostaJson = JSON.stringify(resposta)

                if(respostaJson == '{"error":"Usuario não cadastrado"}'){
                    console.log(resposta)
                    alert('usuário não cadastrado')
                   
                }else{
                    alert('Acesso permitido')
                }
                

            }.bind(this),
            error: function (data) {
                alert('Erro:', data);

            }
        });
    }

    //ENVIA OS DADOS DO FORMULÁRIO PARA O SESSION STORAGE
    validaCampos(e) {
        e.preventDefault();

        const bordasCampoVazio = 'border border-danger';

        //VERIFICA SE OS CAMPOS ESTÃO PRENCHIDOS
        if (!$('#email').val()) {
            $('#email').addClass(bordasCampoVazio);
        }

        if (!$('#senha').val()) {
            $('#senha').addClass(bordasCampoVazio);
        }

        if (!$('#email').val() || !$('#senha').val()) {
            this.erroValidacao(e = "campoVazio")
        } else {
            this.enviaFormulario(e)
        }

    }

    //ATUALIZA AS INPUTS COM OS ESTADOS 
    atualizaCampo(e) {
        const restaurante = { ...this.state.restaurante }
        restaurante[e.target.name] = e.target.value;

        const bordasCampoVazio = 'border border-danger';


        //REMOVE A BORDA VERMELHA DOS CAMPOS PREENCHIDOS
        if (!$('#email').val() == '') {
            $('#email').removeClass(bordasCampoVazio);
        }

        if (!$('#senha').val() == '') {
            $('#senha').removeClass(bordasCampoVazio);
        }



        this.setState({
            restaurante,
            textoErro: initialState.textoErro,
            classErro: initialState.classErro
        })

    }

    /* FORMULÁRIO DO LOGIN */
    render() {
        return (
            <form className="form-group col col-sm col-md col-lg-10">
                <span className={this.state.classErro}>{this.state.textoErro}</span>
                <div className="row justify-content-center mb-5">
                    <img src={LogoGoDinner} className="img-fluid icone-img" />
                </div>
                <div className="row mb-4">
                    <div className="mx-auto h2">Bem-vindo(a) a GoDinner</div>
                </div>
                <div className="row  justify-content-center mb-2">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <Label className="h5" texto="Email" />
                        <InputCadastro className="form-control p-1" type="email" id="email" name="email"
                            placeholder="Digite a seu email .." value={this.state.restaurante.email} onChange={e => this.atualizaCampo(e)} />
                    </div>
                </div>
                <br />
                <div className="row  justify-content-center mb-5">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <Label className="h5" texto="Senha" />
                        <InputCadastro className="form-control p-1" type="password" id="senha" name="senha"
                            placeholder="Digite a sua senha .." value={this.state.restaurante.senha} onChange={e => this.atualizaCampo(e)} />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <BotaoGrande onClick={e => this.validaCampos(e)} to="/cadastro" className="btn col-7 col-sm-7 col-md-7 col-lg-7 p-1">Entrar</BotaoGrande>
                </div>
                <div className="row mt-4 justify-content-center">
                    <BotaoGrande to="/cadastro" className="btn col-7 col-sm-7 col-md-7 col-lg-7 p-1">Cadastrar</BotaoGrande>
                </div>
            </form>
        )
    }

}

export default withRouter(FormularioLogin);