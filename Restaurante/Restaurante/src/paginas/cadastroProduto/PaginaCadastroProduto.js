import React, {Component, Fragment} from 'react';
import { CabecalhoPrincipal } from '../../componentes/cabecalho/cabecalhoPrincipal/cabecalhoPrincipal';
import {MenuPrincipal} from '../../componentes/menu/MenuPrincipal';
import {CadastroProduto} from '../../componentes/formulario/cadastro/produto/CadastroProduto';

export class PaginaCadastroProduto extends Component{
    render(){
        return(
            <Fragment>
                <CabecalhoPrincipal/>
                <MenuPrincipal/>
                <CadastroProduto/>
            </Fragment>
        )
    }
} 