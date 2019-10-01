import React, { Component } from 'react';
import Logo from '../../../recursos/imgs/img-login.png';
import { ImgRestaurante, OpcoesMenu } from './styled';
import { DOMINIO } from '../../../link_config';
import $ from 'jquery';
import { BotaoLink } from '../../globais/botao/Botao';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';

export class CabecalhoPaginaRestaurante extends Component {

    apagarLocalStorage() {

        //Limpa os storages
        localStorage.clear();
        sessionStorage.clear();

        this.props.history.push("/cadastro/endereco");
    }

    componentDidMount() {

        let token = localStorage.getItem('token');
        token = token.replace(/"/g, "");
        localStorage.setItem('token', token);

        const url = `${DOMINIO}/restaurante/este`;

        $.ajax({
            url: url,
            type: 'get',
            headers: { 'token': token },
            dataType: 'json',
            contentType: "application/json",
            success: function (resposta) {

                localStorage.setItem('id', JSON.stringify(resposta.id));
                localStorage.setItem('nome', JSON.stringify(resposta.razaoSocial));

                $(".foto-restaurante").attr("src", resposta.foto);

            }.bind(this),
            error: function (data) {
                console.log(data);

            }
        });
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
                            <Link className="nav-link text-secondary" to="/restaurante">Pedidos</Link>
                        </div>
                        <div className="nav-item col col-sm col-md col-lg">
                            <Link className="nav-link text-secondary" to="/restaurante/cadastro-produto">Cadastrar Produto</Link>
                        </div>
                        <div className="nav-item col col-sm col-md col-lg">
                            <Link className="nav-link text-secondary" to="/restaurante/visualizar-produto">Catálogo de Produtos</Link>
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