import React, { Component } from 'react';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import Corpo from '../../../corpo/Corpo';
import ImgPizza from '../../../../recursos/imgs/pizza.jpg';
import { FaHome } from 'react-icons/fa'

/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/endereco',
    width: 'w-100'
}

export class FormularioBemVindo extends Component {

    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (
            <form className="form-group mt-4">
                <Label className="h1 mb-3" texto="Bem Vindo a GoDinner"/> <FaHome size={30}/>
                <div className="row mb-2  justify-content-center">
                    <img className=" img-login rounded-circle img-responsive" src={ImgPizza} alt="Imagem Empresa" />
                </div>
                <div className=" row justify-content-center mb-3">
                    <div className="input-file">
                        <span>Anexar Imagem</span>
                        <input type="file" className="upload" />
                    </div>
                </div>
                <div className="row mb-5">
                    <Label className="col col-sm col-md col-lg h2 text-center" texto="Pizza Do Teco" />
                </div>
                <div className="row mt-3 justify-content-center">
                    <BotaoLink to="/login" className="col-5 col-sm-4 col-md-5 col-lg-5 btn-orange ml-3 mr-3 " texto="Finalizar" />
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