import React, { Component } from 'react';
import {
    DivOpecoes, DivOpecoesTitulo, CabecalhoGraficos,
    CorpoGraficos, IconeOpcoes
} from './styled';
import { FiTrendingUp } from "react-icons/fi";
import Talher from '../../../recursos/icons/talher.png';
import Pedido from '../../../recursos/icons/pedido.png';
import Chat from '../../../recursos/icons/chat.png';
import $ from 'jquery';
import { DOMINIO } from '../../../link_config';

//COMPONENTE DO CORPO DA PÁGINA DE LOGIN
export class CorpoIndex extends Component {

    state = {
        nome: ''
    }

   

componentDidMount() {

    let token = localStorage.getItem('token');
    token = token.replace(/"/g, "");
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);

    const url = `${DOMINIO}/restaurante/este`;


    $.ajax({
        url: url,
        type: 'get',
        headers: { 'token': token },
        dataType: 'json',
        contentType: "application/json",
        success: function (resposta) {

            const nome = resposta.razaoSocial

            $(".nome-restaurante").text(nome)
            $(".painel-nome-restaurante").text("Painel Administrativo - " + nome)


        }.bind(this),
        error: function (data) {
            console.log(data);

        }
    });
}


render() {
    return (
        <div className="container mt-5">
            <div className="row text-center mt-3">
                <div className="col col-sm col-md col-lg h1 nome-restaurante" >{this.state.nome}
                </div>
            </div>
            <div className="row text-center mt-2 border-bottom">
                <div className="col col-sm col-md col-lg h4 painel-nome-restaurante">

                </div>
            </div>
            <div className="row mt-5">
                <div className="col col-sm col-md col-lg h4">
                    < DivOpecoes theme={{ cor: 'marrom' }}>
                        <IconeOpcoes src={Pedido} />
                    </DivOpecoes>
                    <DivOpecoesTitulo className="pt-1" theme={{ cor: 'marrom' }}>
                        Pedido
                </DivOpecoesTitulo>
                </div>
                <div className="col col-sm col-md col-lg h4">
                    < DivOpecoes theme={{ cor: 'laranja' }}>
                        <IconeOpcoes src={Talher} />
                    </ DivOpecoes>
                    <DivOpecoesTitulo className="pt-1" theme={{ cor: 'laranja' }}>
                        Cadastrar
                </DivOpecoesTitulo>
                </div>
                <div className="col col-sm col-md col-lg h4">
                    <DivOpecoes theme={{ cor: 'verde' }}>
                        <IconeOpcoes src={Chat} />
                    </DivOpecoes>
                    <DivOpecoesTitulo className="pt-1" theme={{ cor: 'verde' }}>
                        Chat
                </DivOpecoesTitulo>
                </div>
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

        </div>
    )
}

}