import React, { Component, Fragment } from 'react';
import {
    DivOpecoes, DivOpecoesTitulo, CabecalhoGraficos,
    CorpoGraficos, IconeOpcoes
} from './styled';
import { FiTrendingUp } from "react-icons/fi";
import Talher from '../../../recursos/icons/talher.png';
import Pedido from '../../../recursos/icons/pedido.png';
import Chat from '../../../recursos/icons/chat.png';
import $ from 'jquery';
import { DOMINIO, TOKEN } from '../../../link_config';
import { Link } from 'react-router-dom';
import { CorpoCemVh } from '../styled';
import { FaClipboardCheck } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRestaurante } from '../../cabecalho/restaurante/actions';

//COMPONENTE DO CORPO DA PÁGINA DE LOGIN
const CorpoIndex = React.memo(class CorpoIndex extends Component {

    componentWillMount() {
        this.props.getRestaurante();

    };

    componentWillUpdate() {
        $("#pedidos-div").click(function () {
            $("#pedidos").addClass("border-bottom-laranja");
        });
        $("#cadastrar-div").click(function () {
            $("#cadastrar").addClass("border-bottom-laranja");
        });
    }

    render() {
        const { razaoSocial } = this.props.restaurante;
        return (
            <CorpoCemVh className="mx-auto">
                <div className="row text-center mt-3">
                    <h1 className="mx-auto nome-restaurante">{razaoSocial}</h1>
                </div>
                <div className="row text-center mt-2 border-bottom">
                    <h3 className="mx-auto">Painel Administrativo {razaoSocial} </h3>

                </div>
                <div className="row mt-5">
                    <Link to="/restaurante/pedidos" id="pedidos-div" className="col col-sm col-md col-lg h4 nav-link text-dark">
                        < DivOpecoes theme={{ cor: 'marrom' }}>
                            <IconeOpcoes src={Pedido} />
                        </DivOpecoes>
                        <DivOpecoesTitulo className="pt-1" theme={{ cor: 'marrom' }}>
                            Pedido
                </DivOpecoesTitulo>
                    </Link>
                    <Link to="/restaurante/cadastro-produto" id="cadastrar-div" className="col col-sm col-md col-lg h4 nav-link text-dark">
                        < DivOpecoes theme={{ cor: 'laranja' }}>
                            <IconeOpcoes src={Talher} />
                        </ DivOpecoes>
                        <DivOpecoesTitulo className="pt-1" theme={{ cor: 'laranja' }}>
                            Cadastrar
                </DivOpecoesTitulo>
                    </Link>
                    <Link to="/restaurante" className="col col-sm col-md col-lg h4 nav-link text-dark">
                        <DivOpecoes theme={{ cor: 'verde' }}>
                            <IconeOpcoes src={Chat} />
                        </DivOpecoes>
                        <DivOpecoesTitulo className="pt-1" theme={{ cor: 'verde' }}>
                            Chat
                </DivOpecoesTitulo>
                    </Link>
                </div>
                <div className="row mt-5">
                    <div className="col col-sm col-md col-lg h4">
                        <CabecalhoGraficos className="border border-secondary pt-1">
                            <FiTrendingUp className="ml-3 mr-4" />
                            Gráfico de vendas do mês
                </CabecalhoGraficos>
                        <CorpoGraficos className="border border-secondary">

                        </CorpoGraficos>
                    </div>
                </div>

            </CorpoCemVh>
        )
    }

});

const mapStateToProps = state => ({ restaurante: state.restaurante.restaurante });
const mapDispatchToProps = dispatch => bindActionCreators({ getRestaurante }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CorpoIndex);