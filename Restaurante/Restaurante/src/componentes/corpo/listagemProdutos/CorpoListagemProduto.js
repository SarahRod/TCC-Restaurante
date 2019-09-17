import React, { Fragment, Component } from 'react';
import Cabecalho from "../../cabecalho/restaurante/Cabecalho";
import '../../../recursos/css/style.css';
import $ from 'jquery';
import {DOMINIO} from "../../../link_config"
import ItensLista  from './../../lista/ItensLista';

class CorpoListagemProduto extends Component{

    constructor(){
        super();
        this.state = {
            itens:[]
        }
    }

    componentDidMount() {
        let id = localStorage.getItem("id");
        // let url = `${DOMINIO}/exibicao/${id}`;
        let url = `${DOMINIO}/produto/todos/${id}`;
        let token = localStorage.getItem("token");
        
        $.ajax({
            url: url,
            type: 'get',
            data: { "token": token},
            dataType: 'json',
            contentType: 'application/json',
            success: function (resposta) {
                console.log(resposta)
                this.setState({itens: resposta})
                console.table(this.state.itens);

            }.bind(this),
            error: function (data) {
                console.log('====================================');
                console.log(data);
                console.log('====================================');
            }
        });
    }

    render(){


        return(
            <Fragment>
                <div className="list-group p-1 w-50 container mb-5 ">
                    {this.state.itens.map(item => (
                        <ItensLista item = {item || ""} />
                    ))}
                </div>
            </Fragment>
        )
    }
    
}
export default CorpoListagemProduto;