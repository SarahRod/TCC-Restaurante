import React, { Component} from 'react';
import { InputCadastro } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import Corpo from '../../../corpo/Corpo';

/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/endereco',
    width: 'w-75'
}

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    restaurante: {
        nome: '',
        cnpj: '',
        telefone: ''
    }
}

export class FormularioLogin extends Component {

    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (
                <form className="form-group mt-5">
                    <Label className="h2 mb-1" texto="Login do restaurante" />
                    <div className="row mt-4 mb-4">
                        <InputCadastro className="col col-sm p-1 col-md col-lg p-1 ml-3 mr-3" id="txt-email-restaurante" name="txt-email-restaurante" type="email" placeholder="Email" />
                    </div>
                    <div className="row mb-5">
                        <InputCadastro className="col col-sm col-md col-lg p-1 ml-3 mr-3" id="txt-senha-restaurante" name="txt-senha-restaurante" type="password"
                            placeholder="Senha" />
                        <InputCadastro className="col col-sm col-md col-lg p-1 mr-3" id="txt-confirmar-restaurante" name="txt-confirmar-restaurante" type="password"
                            placeholder="Confirmar Senha" />
                    </div>
                    <div className="row justify-content-end">
                        <BotaoLink to="/bem-vindo" className="col-4 col-sm-4 col-md-4 col-lg-4 btn-orange mr-3" texto="Próximo" />
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