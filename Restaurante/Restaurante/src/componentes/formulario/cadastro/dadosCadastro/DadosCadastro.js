import React, { Component, Fragment } from 'react';
import { Input } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import Corpo from '../../../corpo/Corpo'

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
        telefone: ''
    }
}

export class FormularioDados extends Component {

    state = { ...initialState }


    //ENVIA OS DADOS DO FORMULÁRIO PARA O SESSION STORAGE
    enviaFormulario(e) {
        const restaurante = this.state.restaurante;
        
        sessionStorage.setItem('dadosRestaurante', JSON.stringify(restaurante));
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

            /* FORMULÁRIO DO ENDEREÇO */
            <form className="form-group mt-4" >
                <Label className="h2 mb-4" texto="Dados do Restaurante" />
                <div className="row mb-4">
                    <Input className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-nome-restaurante" name="nome" type="text"
                        placeholder="Nome do restaurante" value={this.state.restaurante.nome} onChange={e => this.atualizaCampo(e)} />
                </div>
                <div className="row mb-5">
                    <Input className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-cnpj-restaurante" name="cnpj" type="text"
                        placeholder="CNPJ do restaurante" value={this.state.restaurante.cnpj} onChange={e => this.atualizaCampo(e)} />
                    <Input className="col col-sm col-md col-lg p-1 mr-3" id="txt-telefone-restaurante" name="telefone" type="text"
                        placeholder="Telefone do restaurante" value={this.state.restaurante.telefone} onChange={e => this.atualizaCampo(e)} />
                </div>
                {/*LINHA DO  BOTÃO COM A ROTA PARA O PRÓXIMA PÁGINA  */}
                <div className="row justify-content-end">
                    <BotaoLink onClick={e => this.enviaFormulario(e)} to="/endereco" className="col-4 col-sm-4 col-md-4 col-lg-4 btn-orange mr-3" texto="Próximo" />
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