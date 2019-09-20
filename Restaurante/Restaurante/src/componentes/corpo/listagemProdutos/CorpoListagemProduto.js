import React, { Fragment, Component } from 'react';
import '../../../recursos/css/style.css';
import $ from 'jquery';
import { FaSearch } from 'react-icons/fa';
import {DOMINIO} from "../../../link_config"
import ItensLista  from './../../lista/ItensLista';
import { InputGroup, FormControl, ListGroup, Container } from 'react-bootstrap';

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
        let token = localStorage.getItem("token");
        
        $.ajax({
            url: url,
            type: 'get',
            headers: { "token": token},
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
                <Container p='2'>
                    <InputGroup className="item-list-p p-1 mx-auto mt-5 mb-5 w-25">
                        <FormControl
                            className="border-light"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="btnGroupAddon"
                        />
                        <InputGroup.Prepend className="border-light">
                            <InputGroup.Text className="border-light bg-transparent" id="btnGroupAddon"><FaSearch/></InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <ListGroup className="p-1 w-75 mx-auto mb-5 ">
                        {this.state.itens.map(item => (
                            <ItensLista item = {item || ""} />
                        ))}
                    </ListGroup>
                </Container>
            </Fragment>
        )
    }
    
}
export default CorpoListagemProduto;