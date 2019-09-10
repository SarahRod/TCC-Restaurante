import React from 'react';
import {
    DivOpecoes, DivOpecoesTitulo, CabecalhoGraficos,
    CorpoGraficos, IconeOpcoes
} from './styled';
import { FiTrendingUp } from "react-icons/fi";
import Talher from '../../../recursos/icons/talher.png';
import Pedido from '../../../recursos/icons/pedido.png';
import Chat from '../../../recursos/icons/chat.png';

//COMPONENTE DO CORPO DA PÁGINA DE LOGIN
export const CorpoIndex = (props) => (
    <div className="container mb-4">
        <div className="row text-center mt-3">
            <div className="col col-sm col-md col-lg h1">
                Pizza do Teco
            </div>
        </div>
        <div className="row text-center mt-2 border-bottom">
            <div className="col col-sm col-md col-lg h4">
                Painel Administrativo - Pizza do Teco
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