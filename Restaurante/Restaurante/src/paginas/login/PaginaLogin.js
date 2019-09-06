import React, { Component, Fragment } from 'react';
import { FormularioLogin } from '../../componentes/formulario/login/Login';
import { CorpoLogin } from '../../componentes/corpo/login/Corpo';
import '../../recursos/css/style.css'

//OMPONENTE DA PÁGINA DE LOGIN
export class PaginaLogin extends Component {
    render() {
        return (
            <Fragment>
                < CorpoLogin >
                    <FormularioLogin />
                </CorpoLogin >
            </Fragment>
        )
    }

}