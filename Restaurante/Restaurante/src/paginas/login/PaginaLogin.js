import React, { Component, Fragment } from 'react';
import FormularioLogin from '../../componentes/formulario/login/Login';

import '../../recursos/css/style.css'

//OMPONENTE DA PÁGINA DE LOGIN
export class PaginaLogin extends Component {
    render() {
        return (
            <Fragment>
                <div className="pt-5 d-flex flex-row align-items-center img-background"  style={{ minHeight: 900 + 'px' }}>
                    <FormularioLogin />
                </div>


            </Fragment>
        )
    }

}