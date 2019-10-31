import React, { Component } from 'react';
import './style.css'
import { FaSyncAlt } from "react-icons/fa";
import { DOMINIO, CORES_STATUS, FOTOLANCHEPADRAO, DOMINIO_IMG } from '../../../link_config';
import $ from 'jquery';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import ModalProduto from '../../modals/Modalproduto';
import { ERRO_REQUISICAO, Notificacao, INFO } from '../../../funcoes/Alerta'

const estadoInicial = {
    pedidos: []
}

export class SeusPedidos extends Component {

    state = { ...estadoInicial };

    componentDidMount() {

        this.visualizarPedidos();
    }

    visualizarPedidos(e) {

        this.setState({ estadoInicial: [] });

        let id = localStorage.getItem("id");
        let token = localStorage.getItem("token");

        const url = `${DOMINIO}/pedidos/emabertos/${id}`;

        $.ajax({
            url: url,
            method: 'get',
            headers: { "token": token },
            dataType: 'json',
            contentType: 'application/json',
            success: function (resposta) {

                this.setState({ pedidos: resposta });

            }.bind(this),
            error: function (data) {

                Notificacao(INFO, ERRO_REQUISICAO);
            }
        });
    }

    render() {
        return (
            <main className="container pb-5">
                             <ModalProduto show={this.state.isOpen} onClose={this.toggleModal}>
                        <div className="d-flex flex-row-reverse bd-highlight mt-2 mb-2">
                            <IoMdClose className="close"/>
                        </div>   
                        <div className="modal-header h-50 pt-0 ">                         
                            <figure className="figure w-100 h-100">    
                                {/* <img className="mx-auto rounded w-100 h-100"
                                    src={this.state.item.foto.length == 0? FOTOLANCHEPADRAO : DOMINIO_IMG + this.state.item.foto[0].foto } 
                                    alt={this.state.item.foto.length == 0? "foto produto" : this.state.item.foto[0].legenda }/> */}
                            </figure>

                        </div>
                        <div className="modal-body ">
                            <div className="modal-title">
                                {/* <h3>{this.state.item.nome}</h3> */}
                            </div>                            
                            <div className="w-100 hm-25" style={{overflow: 'auto', height: 150}}>
                                <p className="text-break">
                                    {/* {this.state.item.descricao} */}
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <p className="text-success">
                                {/* R$ {this.state.item.preco} */}
                            </p>
                        </div>
                </ModalProduto>
                <div className="ml-2 border mx-auto text-center rounded mensagem-slogan mb-5">Rapidez  + Qualidade =  +Dinheiro +Clientes </div>
                <div className="row mb-5 mx-auto select-data">
                    <div className="col-6 col-lg-9">
                        <button type="button" class="btn btn-warning font-weight-bold"><FaSyncAlt className="mr-2" />Atualizar</button>
                    </div>
                    <div className="col-6 col-lg-3">
                        <select class="custom-select max-select" id="inlineFormCustomSelect">
                            <option selected>Data de pedido</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>


                </div>
                <div className="row border-bottom mx-auto pl-3 w-75 pb-2" style={{ maxWidth: '80%', cursor: 'pointer' }}>
                    <span className="col-6 col-sm-6 col-md-6 col-lg-3 text-sencodary" >Em produção</span>
                    <span className="col-6 col-sm-6 col-md-6 col-lg-3 text-secondary" >Sendo entregue</span>
                </div>
                {this.state.pedidos.map(item => (
                    <div className="card mx-auto mt-5 max slider" id={item.id}>
                        <div className="text-right pr-3 pt-2 mb-2">
                            <span className={`${CORES_STATUS[item.statusPedido.id]} rounded-circle mr-2 circle`}></span>
                            <font className="">{item.statusPedido.descricao}</font>
                        </div>

                        <div className=" text-right pr-3">

                            <font className="text-success mr-3">Pedido: {item.pedido} </font><font className="text-info">Previsão:19:20</font>

                        </div>

                        <div className="row mt-3">
                            <span className="col col-sm col-md col-lg text-primary text-right pr-5">Saida de entrega: 19:00</span>
                        </div>
                        {item.produtos.map(item => (
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="font-weight-bold">{item.quantidade}x</span> {item.produto.nome}</li>
                            </ul>
                        ))}
                        <div className="p-4 text-muted">

                            <blockquote className="text-muted">Pedido realizado por: {item.consumidor.nome}</blockquote>
                            <blockquote className="text-success">Valor total: {item.valorTotal}</blockquote>
                            <blockquote className="text-muted h6">Obs: {item.descricao}</blockquote>

                        </div>
                    </div >
                ))}

            </main >
        );
    }
}