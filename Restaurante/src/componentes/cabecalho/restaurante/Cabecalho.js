import React, { Component } from 'react';
import Logo from '../../../recursos/imgs/img-login.png';
import { ImgRestaurante, OpcoesMenu } from './styled';
import { DOMINIO, TOKEN, DOMINIO_IMG } from '../../../link_config';
import $ from 'jquery';
import { BotaoLink } from '../../globais/botao/Botao';
import { LinksMenu } from '../../globais/botao/styled';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import './style.css';

export class CabecalhoPaginaRestaurante extends Component {

    apagarLocalStorage() {

        //Limpa os storages
        localStorage.clear();
        sessionStorage.clear();

        this.props.history.push("/cadastro/endereco");
    }

    componentDidUpdate(){
        $('a').click(function(){
            $('a').removeClass('border-bottom-laranja');
            $(this).addClass('border-bottom-laranja');
        });
    }

    componentDidMount() {

       

        const url = `${DOMINIO}/restaurante/este`;

        if (TOKEN != null) {
            $.ajax({
                url: url,
                type: 'GET',
                headers: {"token": TOKEN},
                success: function (resposta) {

                    localStorage.setItem('id', JSON.stringify(resposta.id));
                    localStorage.setItem('nome', JSON.stringify(resposta.razaoSocial));

                    $(".foto-restaurante").attr("src", DOMINIO_IMG + resposta.foto);

                }.bind(this),
                error: function (data) {
                    console.log(data);

                }
            });
        }

    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Link className="navbar-brand" to="/restaurante">
                    <img src={Logo} style={{ maxWidth: 180 + 'px' }} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <OpcoesMenu className="row w-100 align-items-center ml-auto bg-light mr-4">
                        <div className="nav-item col col-sm col-md col-lg ">
                            <LinksMenu className="nav-link text-secondary text-center" to="/restaurante">Pedidos</LinksMenu>
                        </div>
                        <div className="nav-item col col-sm col-md col-lg">
                            <Link className="nav-link text-secondary text-center" to="/restaurante/cadastro-produto">Cadastrar Produto</Link>
                        </div>
                        <div className="nav-item col col-sm col-md col-lg">
                            <Link className="nav-link text-secondary text-center" to="/restaurante/visualizar-produto">Catálogo de Produtos</Link>
                        </div>

                        <img className="border rounded-circle foto-restaurante  mr-4" src='' style={{ width: 65 + 'px', height: 60 + 'px' }} />

                        <BotaoLink to="/" class="col col-sm col-md col-lg-3" texto="Logout" onClick={e => this.apagarLocalStorage(e)} />

                    </OpcoesMenu>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(CabecalhoPaginaRestaurante);