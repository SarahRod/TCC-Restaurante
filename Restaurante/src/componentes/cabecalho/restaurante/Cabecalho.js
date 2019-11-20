import React, { Component } from 'react';
import Logo from '../../../recursos/imgs/img-login.png';
import { Li } from './styled';
import { DOMINIO_IMG } from '../../../link_config';
import $ from 'jquery';
import { BotaoLaranja } from '../../globais/botao/styled';
import { withRouter, Link } from 'react-router-dom';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRestaurante } from './actions';


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

    }

    componentWillMount() {
        this.props.getRestaurante();

    };

    componentWillUpdate() {
        let id = this.props.restaurante.id;

        if (id !== null) {
            localStorage.setItem('id', this.props.restaurante.id);
        }
    }

    render() {
        const { foto } = this.props.restaurante;
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
                        <Li className="nav-item" maxWidth="70px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/pedidos" id="pedidos">Pedidos</Link>
                        </Li>
                        <Li className="nav-item" maxWidth="150px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/cadastro-produto" id="cadastrar">Cadastrar Produto</Link>

                        </Li>
                        <Li className="nav-item" maxWidth="180px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/visualizar-produto">Catálogo de Produtos</Link>
                        </Li>
                        <Li className="nav-item" maxWidth="80px">
                            <Link className="nav-link text-secondary menu-cabecalho" to="/restaurante/cadastro-template">Meu site</Link>

                        </Li>

                    </ul>

                    <form className="form-inline bg-light">
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'rgb(76, 76, 76)' }}>
                                <img className="border rounded-circle foto-restaurante  mr-1" src={`${DOMINIO_IMG}${foto}`} style={{ width: 65 + 'px', height: 60 + 'px' }} />
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/restaurante/pagamento" >Pagamento</Link>
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

const mapStateToProps = state => ({ restaurante: state.restaurante.restaurante });
const mapDispatchToProps = dispatch => bindActionCreators({ getRestaurante }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CabecalhoPaginaRestaurante));