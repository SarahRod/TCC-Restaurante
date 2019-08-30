import React, {Component, Fragment} from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuGoDinner from '../../componentes/menu/MenuGoDinner';
import CabecalhoGoDinner from '../../componentes/cabecalho/cabecalhoGoDinner/CabecalhoGoDinner';
import RodapeGoDinnerHome from '../../componentes/rodape/rodapeGoDinnerHome/RodapeGoDinnerHome';

export class PaginaHomeGoDinner extends Component{
    render(){
        return(
            <div>
                <MenuGoDinner/>
                <CabecalhoGoDinner/>
                <RodapeGoDinnerHome/>
            </div>
        )
    }
}