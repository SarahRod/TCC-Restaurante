import React, { Component, Fragment } from 'react';
import { CabecalhoLogin } from '../../componentes/cabecalho/login/style';
import { FormularioLogin } from '../../componentes/formulario/login/Login';
import { CorpoLogin } from '../../componentes/corpo/login/Corpo';
import '../../recursos/css/style.css'

export class PaginaLogin extends Component {
    render() {
        return (

            /*CABECALHO RECEBE AS PROPRIEDADES DA CONST*/
            <Fragment>
                <CabecalhoLogin />
                < CorpoLogin >
                    <FormularioLogin />
                </CorpoLogin >
            </Fragment>


        )
    }

}