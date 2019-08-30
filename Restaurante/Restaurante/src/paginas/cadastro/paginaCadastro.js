import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RotaFormularioCadastro } from "../../Rotas";
import Rodape from '../../componentes/rodape/rodape'

export class PaginaCadastro extends Component {
    render() {
        return (
            <BrowserRouter>
                <RotaFormularioCadastro />
                <Rodape />
            </BrowserRouter>
        )
    }
}