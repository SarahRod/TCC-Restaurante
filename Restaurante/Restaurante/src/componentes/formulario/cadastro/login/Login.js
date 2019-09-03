import React, { Component} from 'react';
import { InputCadastro } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import Corpo from '../../../corpo/Corpo';
import { DOMINIO } from '../../../../link_config';
import $ from 'jquery';

/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/endereco',
    width: 'w-75'
}

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    restaurante: {
        email: '',
        senha: ''
    },

    classErro: '',
    textoErro: ''
}

export class FormularioLogin extends Component {

    state = { ...initialState }

    //MENSAGEM DE ERRO DA VALIDAÇÃO
    erroValidacao(e) {
        this.setState({
            classErro: 'alert show alert-danger',
            textoErro: `Esse e-mail já está cadastrado`
        })
    }



    enviaFormulario(){

        const restaurante = {...this.state.restaurante}

        var dados = sessionStorage.getItem('dados');

        const json = JSON.parse(dados);



        var novoDado = { ...json, ...restaurante };

        alert(novoDado)

        sessionStorage.setItem('dados', JSON.stringify(novoDado));

        const jsonRestaurante = sessionStorage.getItem('dados');

        this.props.history.push("/bem-vindo");

        const url =  `${DOMINIO}/restaurante/novo`;


        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: jsonRestaurante,
            contentType:'application/json',
            success: function (resposta) {
                
                alert('Gravou')

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);
                alert('naõ gravou')
            }
        });
    }

     //ENVIA OS DADOS DO FORMULÁRIO PARA O SESSION STORAGE
     validaCampos(e) {
        e.preventDefault();

        const restaurante = this.state.restaurante;
        const email = restaurante.email;

        //REALIZA AS REQUISIÇÕES NA API DE VALIDAÇÃO
        const URL_EMAIL = `${DOMINIO}/restaurante/valida/email/${email}`;

        $.ajax({
            url: URL_EMAIL,
            dataType: "text",
            type: 'GET',
            success: function (data) {
                if (data == "false") {
                    this.enviaFormulario(data)

                } else {
                    this.erroValidacao(data)
                }

            }.bind(this),
            error: function (data) {

                console.log('Erro:', data);

            }
        });

    }

    //ATUALIZA AS INPUTS COM OS ESTADOS 
    atualizaCampo(e) {
        const restaurante = { ...this.state.restaurante }
        restaurante[e.target.name] = e.target.value
        this.setState({
            restaurante,
            textoErro: initialState.textoErro,
            classErro: initialState.classErro
        })     

    }

    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (
                <form className="form-group mt-5">
                    <Label className="h2 mb-1" texto="Login do restaurante" />
                    <span className={this.state.classErro}>{this.state.textoErro}</span>
                    <div className="row mt-4 mb-4">
                        <InputCadastro className="col col-sm p-1 col-md col-lg p-1 ml-3 mr-3" id="email" name="email" 
                        type="email" placeholder="Email" value={this.state.restaurante.email} onChange={e => this.atualizaCampo(e)} />
                    </div>
                    <div className="row mb-5">
                        <InputCadastro className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-senha-restaurante" name="senha" type="password"
                            placeholder="Senha" value={this.state.restaurante.senha} onChange={e => this.atualizaCampo(e)} />
                        <InputCadastro className="col col-sm col-md col-lg p-1 mr-3" id="txt-confirmar-restaurante" name="txt-confirmar-restaurante" type="password"
                            placeholder="Confirmar Senha"/>
                    </div>
                    <div className="row justify-content-end">
                        <BotaoLink to="/bem-vindo" onClick={e => this.validaCampos(e)} className="col-4 col-sm-4 col-md-4 col-lg-4 btn-orange mr-3" texto="Próximo" />
                    </div>

                </form>
        )
    }

    /*CORPO DA PÁGINA, COM  FORMULÁRIO DENTRO */
    render() {
        return (
            <Corpo {...propriedadesCabecalho}>{/*CABECALHO RECEBE AS PROPRIEDADES DA CONST*/}
                {this.renderForm()}

            </Corpo>
        )
    }
}