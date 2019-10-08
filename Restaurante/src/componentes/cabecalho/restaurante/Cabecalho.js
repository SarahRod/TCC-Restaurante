import React, { Component } from 'react';
import Logo from '../../../recursos/imgs/img-login.png';
import { ImgRestaurante, OpcoesMenu } from './styled';
import { DOMINIO, TOKEN, DOMINIO_IMG } from '../../../link_config';
import $ from 'jquery';
import { BotaoLink } from '../../globais/botao/Botao';
import { LinksMenu, BotaoLaranja } from '../../globais/botao/styled';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import './style.css';
import { MdArrowDropDown } from "react-icons/md";



export class CabecalhoPaginaRestaurante extends Component {


    apagarLocalStorage() {

        //Limpa os storages
        localStorage.clear();
        sessionStorage.clear();

        this.props.history.push("/cadastro/endereco");
    }

    componentDidUpdate() {
        // $('.menu').click(function () {
        //     $('.menu').removeClass('border-bottom-laranja');
        //     $(this).addClass('border-bottom-laranja');
        // });

        const nome = localStorage.getItem("nome");
        $(".nome-restaurante").text(nome);

    }

    componentDidMount() {

        const url = `${DOMINIO}/restaurante/este`;

        let token = localStorage.getItem('token');

        if (token != null) {
            $.ajax({
                url: url,
                type: 'GET',
                headers: { "token": token },
                success: function (resposta) {

                    let nome = JSON.stringify(resposta.razaoSocial);
                    nome = nome.replace(/"/g, " ")

                    localStorage.setItem('id', JSON.stringify(resposta.id));
                    localStorage.setItem('nome', nome);

                    $(".foto-restaurante").attr("src", DOMINIO_IMG + resposta.foto);
                    $(".nome-restaurante").text(nome);


                }.bind(this),
                error: function (data) {
                    console.log(data);

                }
            });
        }

    }

    render() {
        return (
            // <Navbar bg="light" expand="lg">
            //     <Link className="navbar-brand" to="/restaurante">
            //         <img src={Logo} style={{ maxWidth: 180 + 'px' }} />
            //     </Link>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <OpcoesMenu className="row w-100 align-items-center ml-auto bg-light mr-4">
            //             <div className="nav-item col col-sm col-md col-lg ">
            //                 <LinksMenu className="nav-link text-secondary text-center menu" to="/restaurante">Pedidos</LinksMenu>
            //             </div>
            //             <div className="nav-item col col-sm col-md col-lg">
            //                 <Link className="nav-link text-secondary text-center menu" to="/restaurante/cadastro-produto">Cadastrar Produto</Link>
            //             </div>
            //             <div className="nav-item col col-sm col-md col-lg">
            //                 <Link className="nav-link text-secondary text-center menu" to="/restaurante/visualizar-produto">Catálogo de Produtos</Link>
            //             </div>

            //             <img className="border rounded-circle foto-restaurante  mr-4" src='' style={{ width: 65 + 'px', height: 60 + 'px' }} />

            //             <BotaoLaranja to="/" className="btn" onClick={e => this.apagarLocalStorage(e)}>Logout</BotaoLaranja>

            //         </OpcoesMenu>

            //     </Navbar.Collapse>
            // </Navbar>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: '1' }}>
                <Link className="navbar-brand" to="/restaurante">
                    <img src={Logo} style={{ maxWidth: 180 + 'px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse bg-light" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav ml-auto bg-light">
                        <li className="nav-item active">
                            <LinksMenu className="nav-link text-secondary menu" to="/restaurante">Pedidos</LinksMenu>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary menu" to="/restaurante/cadastro-produto">Cadastrar Produto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary menu" to="/restaurante/visualizar-produto">Catálogo de Produtos</Link>
                        </li>
                    </ul>
                    <form className="form-inline bg-light">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'rgb(76, 76, 76)' }}>
                                <img className="border rounded-circle foto-restaurante  mr-1" src='' style={{ width: 65 + 'px', height: 60 + 'px' }} />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Ação</a>
                                <a className="dropdown-item" href="#">Outra ação</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Algo mais aqui</a>
                            </div>
                        </div>
                        <BotaoLaranja to="/" className="btn" onClick={e => this.apagarLocalStorage(e)}>Logout</BotaoLaranja>
                    </form>
                </div>
            </nav>
        )
    }

}

export default withRouter(CabecalhoPaginaRestaurante);