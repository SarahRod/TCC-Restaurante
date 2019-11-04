import React, { Component } from 'react';
import Logo from '../../../recursos/imgs/img-login.png';
import { ImgRestaurante, OpcoesMenu, Li } from './styled';
import { DOMINIO, TOKEN, DOMINIO_IMG, FOTORESTAURANTEPADRAO } from '../../../link_config';
import { ERRO_REQUISICAO, Notificacao, INFO } from '../../../funcoes/Alerta'
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

        //RETIRA A MARCAÇÃO AO CLICAR EM OUTRA OPÇÃO
        $('.menu-cabecalho').click(function () {
            $('.menu-cabecalho').removeClass('border-bottom-laranja');
            $(this).addClass('border-bottom-laranja');
        });

        //RETIRA A MARCAÇÃO AO CLICAR NO LOGO
        $('.logo').click(function () {
            $('.menu-cabecalho').removeClass('border-bottom-laranja');
        });

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
                    
                    if (resposta.foto.length == 0) {
                        $(".foto-restaurante").attr("src", FOTORESTAURANTEPADRAO);
                    } else {
                        $(".foto-restaurante").attr("src", DOMINIO_IMG + resposta.foto);
                    }

                    $(".nome-restaurante").text(nome);

                }.bind(this),
                error: function (data) {
                    Notificacao(INFO, ERRO_REQUISICAO);

                }
            });
        }

    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: '1' }}>
                <Link className="navbar-brand logo" to="/restaurante">
                    <img src={Logo} style={{ maxWidth: '200px', marginTop: '-5px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse bg-light" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav ml-auto bg-light">
                        <Li className="nav-item menu" maxWidth="80px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/pedidos" id="pedidos">Pedidos</Link>
                        </Li>
                        <Li className="nav-item menu" maxWidth="150px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/cadastro-produto" id="cadastrar">Cadastrar Produto</Link>

                        </Li>
                        <Li className="nav-item menu" maxWidth="180px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/visualizar-produto">Catálogo de Produtos</Link>
                        </Li>
                        <Li className="nav-item menu" maxWidth="150px">
                            <Link className="nav-link text-secondary menu" to="/restaurante/cadastro-template">Meu site</Link>

                        </Li>

                    </ul>

                    <form className="form-inline bg-light">
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'rgb(76, 76, 76)' }}>
                                <img className="border rounded-circle foto-restaurante  mr-1" src='' style={{ width: 65 + 'px', height: 60 + 'px' }} />
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" >Editar Perfil</Link>
                                <Link className="dropdown-item" >Configurações</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" >Outros</Link>
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