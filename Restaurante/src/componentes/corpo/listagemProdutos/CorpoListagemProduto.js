import React, { Fragment, Component } from 'react';
import '../../../recursos/css/style.css';
import $ from 'jquery';
import { FaSearch } from 'react-icons/fa';
import {DOMINIO, TOKEN} from "../../../link_config"
import ItensLista  from './../../lista/ItensLista';
import { InputGroup, FormControl, ListGroup, Container } from 'react-bootstrap';
import { CorpoCemVh } from '../styled';

class CorpoListagemProduto extends Component{

    constructor(){
        super();
        this.state = {
            itens:[]
        }
    }

    componentDidMount() {
        let id = localStorage.getItem("id");
      
        let url = `${DOMINIO}/produto/exibicao/${id}`;
      


        $.ajax({
            url: url,
            method: 'get',
            headers: {"token": TOKEN},
            dataType: 'json',
            contentType: 'application/json',
            success: function (resposta) {

                this.setState({itens: resposta})

            }.bind(this),
            error: function (data) {
                
                console.log(data)
            }
        });
    }

    render(){


        return(
                <CorpoCemVh className="mx-auto" style={{ maxWidth: 80 + '%'}}>
                    <InputGroup className="item-list-p p-1 mx-auto mt-5 mb-5 w-25 shadow-none">
                        <FormControl
                            className="border-0"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="btnGroupAddon"
                        />
                        <InputGroup.Prepend className="border-0">
                            <InputGroup.Text className="border-0 bg-transparent" id="btnGroupAddon"><FaSearch/></InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <ListGroup className="p-1 w-75 mx-auto mb-5 ">
                        {this.state.itens.map(item => (
                            <ItensLista item = {item || ""} />
                        ))}
                    </ListGroup>
                </CorpoCemVh>
        )
    }
    
}
export default CorpoListagemProduto;