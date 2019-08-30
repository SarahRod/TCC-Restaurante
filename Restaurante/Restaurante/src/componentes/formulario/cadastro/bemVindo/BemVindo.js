import React, { Component, Fragment } from 'react';
import { Input } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import Corpo from '../../../corpo/Corpo';
import ImgPizza from '../../../../recursos/imgs/pizza.jpg'

/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/endereco',
    width: 'w-100'
}

export class FormularioBemVindo extends Component {

    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (
            <Fragment>
                <form className="form-group mt-4">
                    <Label className="h2 mb-3" texto="Bem Vindo a GoDinner!!!" />
                    <div className="row mb-3 img">
                        <img className="col col-sm col-md col-lg img-login rounded-circle img-responsive" src={ImgPizza} alt="Imagem Empresa" />
                    </div>
                    <div className="row mb-5">
                        
                        <Input className="file-input" id="foto" name="foto" type="file" />
                        <Label className="mx-auto label-file" htmlFor="file" texto="Anexar Imagem" />
                    </div>
                    <div className="row mb-5">
                        <Label className="col col-sm col-md col-lg h2 text-center" texto="Pizza Do Teco" />
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <BotaoLink to="/login" className="col-4 col-sm-4 col-md-5 col-lg-5 btn-orange mr-3" texto="Finalizar" />
                    </div>

                </form>
            </Fragment>
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