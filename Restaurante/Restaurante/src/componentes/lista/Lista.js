import React, { Component } from 'react';
import ItensLista  from './ItensLista';
import '../../recursos/css/style.css'


class Lista extends Component{

    constructor(props){
        super();
        this.state = {itens: props.item};

        console.log(props.item);
        
        
    }

    render() {
        return (
            <div className="list-group p-1 w-100 container mb-5 ">
                
            </div>
        );
    }
}
export default Lista;
