import React, { Fragment, Component } from 'react';
import Cabecalho from "../../cabecalho/restaurante/Cabecalho";
import '../../../recursos/css/style.css';
import $ from 'jquery';
import { FaSearch } from 'react-icons/fa';
import {DOMINIO} from "../../../link_config"
import ItensLista  from './../../lista/ItensLista';
import { InputGroup, FormControl } from 'react-bootstrap';

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
                <div class=" container p-2">
                    <InputGroup className="mx-auto mt-5 mb-5 w-25">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="btnGroupAddon"><FaSearch/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="btnGroupAddon"
                        />
                    </InputGroup>
                
                    <div className="list-group p-1 w-75 mx-auto mb-5 ">
                        {this.state.itens.map(item => (
                            <ItensLista item = {item || ""} />
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
    
}
export default CorpoListagemProduto;