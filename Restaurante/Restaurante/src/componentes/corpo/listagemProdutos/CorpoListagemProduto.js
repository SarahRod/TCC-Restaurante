import React, { Fragment, Component } from 'react';
import Cabecalho from "../../cabecalho/restaurante/Cabecalho";
import Lista from "../../lista/Lista";
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
        let url = `${DOMINIO}/produto/todos/${id}`;
        let token = localStorage.getItem("token");
        
        $.ajax({
            url: url,
            type: 'get',
            data: { "token": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbCIsImV4cCI6MTU2ODQxNTk2MCwiaWF0IjoxNTY4Mzk3OTYwfQ.wmYVdR823TkW7-7GICaQBy9INh-nyGvDL7MKizb3dbfe8ivbFVXuPBHyQwlAtTi_-JfYtxSNuojvr6qh93NR9Q'},
            dataType: 'json',
            contentType: 'application/json',
            success: function (resposta) {
                // console.log(resposta)
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
                <Cabecalho  />
                <div className="list-group p-1 w-100 container bg-danger mb-5 ">
                    {this.state.itens.map(item => (
                        <ItensLista item = {item || ""} />
                    ))}
                </div>
            </Fragment>
        )
    }
    
}

    
        
    


export default CorpoListagemProduto;