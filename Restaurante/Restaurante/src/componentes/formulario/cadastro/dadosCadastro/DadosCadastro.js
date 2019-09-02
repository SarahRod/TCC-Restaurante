import React, { Component } from 'react';
import { InputCadastro } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import Corpo from '../../../corpo/Corpo';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import $ from 'jquery';
import { DOMINIO } from '../../../../link_config';

/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/',
    width: 'w-25'
}

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    restaurante: {
        nome: '',
        cnpj: '',
        telefone: '',
    },

    classErro: '',
    textoErro: ''
}

class FormularioDados extends Component {

    state = { ...initialState }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    //REDIRECIONA O COMPONENTE VALIDADO
    campoValidado(e) {

        this.props.history.push("/endereco");

        const restaurante = { ...this.state.restaurante }

        sessionStorage.setItem('dados', JSON.stringify(restaurante));
    }

    //MENSAGEM DE ERRO DA VALIDAÇÃO
    erroValidacao(e) {
        this.setState({
            classErro: 'alert show alert-danger',
            textoErro: `Esse CNPJ já está cadastrado`
        })
    }

    //ENVIA OS DADOS DO FORMULÁRIO PARA O SESSION STORAGE
    validaCampos(e) {
        e.preventDefault();

        const restaurante = this.state.restaurante;
        const cnpj = restaurante.cnpj;

        //REALIZA AS REQUISIÇÕES NA API DE VALIDAÇÃO
        // const URL_CNPJ = `${DOMINIO}/restaurante/valida/cnpj/${cnpj}`;
        // fetch(URL_CNPJ)
        //     .then(resposta => resposta.json())
        //     .then(data => this.campoValidado(data))
        //     .catch(erro => this.erroValidacao(erro));
        // fetch(`${DOMINIO}/restaurante/valida/cnpj/`, {
        //     method: 'POST',
        //     // headers: new Headers(),
        //     body: { cnpj: cnpj },
        // }).then(resposta => resposta.json())
        //     .then(data => this.campoValidado(data))
        //     .catch(erro => this.erroValidacao(erro));
        // $.ajax({
        //     url : `${DOMINIO}/restaurante/valida/cnpj/`,
        //     dataType : "json",
        //     type : 'GET',
        //     data: { cnpj :  cnpj },
        //     success : function(data){
        //         this.campoValidado(data)  
        //         alert('entrou')   
        //     }.bind(this),
        //     error: function(data){

        //        alert('erro');

        //     }
        // });

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

            /* FORMULÁRIO DO ENDEREÇO */
            <form className="form-group mt-5" >
                <span className={this.state.classErro}>{this.state.textoErro}</span>
                <Label className="h2 mb-4" texto="Dados do Restaurante" />
                <div className="row mb-4">
                    <InputCadastro className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-nome-restaurante" name="nome" type="text"
                        placeholder="Nome do restaurante" value={this.state.restaurante.nome} onChange={e => this.atualizaCampo(e)} />
                </div>
                <div className="row mb-5">
                    <InputCadastro className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-cnpj-restaurante" name="cnpj" type="text"
                        placeholder="CNPJ do restaurante" value={this.state.restaurante.cnpj} onChange={e => this.atualizaCampo(e)} />
                    <InputCadastro className="col col-sm col-md col-lg p-1 mr-3" id="txt-telefone-restaurante" name="telefone" type="text"
                        placeholder="Telefone do restaurante" value={this.state.restaurante.telefone} onChange={e => this.atualizaCampo(e)} />
                </div>
                {/*LINHA DO  BOTÃO COM A ROTA PARA O PRÓXIMA PÁGINA  */}
                <div className="row justify-content-end">
                    <BotaoLink onClick={e => this.validaCampos(e)} to="/endereco" className="col-4 col-sm-4 col-md-4 col-lg-4 btn-orange mr-3" texto="Próximo" />
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

export default withRouter(FormularioDados);