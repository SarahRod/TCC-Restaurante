import React, { Component } from 'react';
import { ItensLista } from './ItensLista'


export class Lista extends Component{
    render() {
        return (
            <div className="list-group p-2 w-75">
                <ItensLista/>
            </div>
        );
    }
}export default Lista;
