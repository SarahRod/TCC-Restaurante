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
    }
}

export class FormularioLogin extends Component {

    state = { ...initialState }

    enviaFormulario(){

        const restaurante = {...this.state.restaurante}

        var dados = sessionStorage.getItem('dados');

        const json = JSON.parse(dados);



        var novoDado = { ...json, ...restaurante };

        alert(novoDado)

        sessionStorage.setItem('dados', JSON.stringify(novoDado));

        const jsonRestaurante = sessionStorage.getItem('dados');

        const url =  `${DOMINIO}/restaurante/novo`;


        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: jsonRestaurante,
            success: function (resposta) {
                
                alert('Gravou')

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
        this.setState({ restaurante })      

    }

    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (
                <form className="form-group mt-5">
                    <Label className="h2 mb-1" texto="Login do restaurante" />
                    <div className="row mt-4 mb-4">
                        <InputCadastro className="col col-sm p-1 col-md col-lg p-1 ml-3 mr-3" id="txt-email-restaurante" name="email" 
                        type="email" placeholder="Email" value={this.state.restaurante.email} onChange={e => this.atualizaCampo(e)} />
                    </div>
                    <div className="row mb-5">
                        <InputCadastro className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-senha-restaurante" name="senha" type="password"
                            placeholder="Senha" value={this.state.restaurante.senha} onChange={e => this.atualizaCampo(e)} />
                        <InputCadastro className="col col-sm col-md col-lg p-1 mr-3" id="txt-confirmar-restaurante" name="txt-confirmar-restaurante" type="password"
                            placeholder="Confirmar Senha"/>
                    </div>
                    <div className="row justify-content-end">
                        <BotaoLink to="/bem-vindo" onClick={e => this.enviaFormulario(e)} className="col-4 col-sm-4 col-md-4 col-lg-4 btn-orange mr-3" texto="Próximo" />
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