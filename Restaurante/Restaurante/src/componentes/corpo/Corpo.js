import React, { Fragment } from 'react';
import { Cabecalho } from '../cabecalho/cadastro/Cabecalho';
import './style.css'

export default (props) => (

    <Fragment>
        <Cabecalho {...props} />
        <main className="container d-flex flex-column align-items-center mb-5">

            {props.children}

        </main>
    </Fragment>

)
