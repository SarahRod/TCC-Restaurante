import React, { Component } from 'react';
import './style.css'
import { FaSyncAlt } from "react-icons/fa";
import { DOMINIO, CORES_STATUS } from '../../../link_config';
import $ from 'jquery';

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
                     
                // resposta.map(item => {


                //     switch (  item.statusPedido.id) {
                //         case 1:
                //             $(`#${item.id}`).addClass('bg-success');
                //           this.prev();
                //           break;
              
                //         // case ARROW_RIGHT_KEYCODE:
                //         //   event.preventDefault();
                //         //   this.next();
                //         //   break;
              
                //         default:
                //       }

                //     }),
                

                // resposta.map(item => {
                //     let data = resposta.map(item => item.dataDoPedido);

                //     var d1 = new Date(data),
                //      d2 = new Date(d1);
                //     d2.setMinutes(d1.getMinutes() + 30);
                //     alert(d2);

                //     let pedido = `${d2.getHours()}:${d2.getMinutes()} `

                //    let  novaResposta = {...resposta, "pedido": pedido }

                   this.setState({ pedidos: resposta });
                  

                //    console.log(novaResposta);
                // })

                // resposta.previsao = resposta.dataDoP 


            }.bind(this),
            error: function (data) {

                console.log(data)
            }
        });
    }

    render() {
        return (
            <main className="container pb-5">
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
                                {/* <li className="list-group-item">1x Refrigerante </li>
                            <li className="list-group-item">2x Hamburguer Top</li> */}
                            </ul>
                        ))}
                        <div className="p-4 text-muted">

                            <blockquote className="text-muted">Pedido realizado por: {item.consumidor.nome}</blockquote>
                            <blockquote className="text-success">Valor total: {item.valorTotal}</blockquote>
                            <blockquote className="text-muted h6">Obs: {item.descricao}</blockquote>

                        </div>
                    </div >
                ))}
                <div className="card mx-auto mt-5 max slider">

                    <div className="text-right pr-3 pt-2 mb-2">
                        <span className="bg-success rounded-circle mr-2 circle"></span>
                        <font className="">Em produção</font>
                    </div>
                    <div className=" text-right pr-3">
                        <font className="text-success mr-3">Pedido: 18:35</font><font className="text-info">Previsão:19:20</font>
                    </div>
                    <div className="row mt-3">
                        <span className="col col-sm col-md col-lg text-primary text-right pr-5">Saida de entrega: 19:00</span>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">2x Hamburguer Top</li>
                    </ul>
                    <div className="p-4 text-muted">

                        <blockquote className="text-muted">Pedido realizado por: Sarah Rodrigues</blockquote>
                        <blockquote className="text-success">Valor total: 50,30</blockquote>
                        <blockquote className="text-muted h6">Obs: Lorem Ipsum é simplesmente uma simulação de texto da indústria  ...</blockquote>

                    </div>
                </div >
                <div className="card mx-auto mt-5 max slider">
                    <div className="text-right pr-3 pt-2 mb-2">
                        <span className="bg-warning rounded-circle mr-2 circle"></span>
                        <font className="">Espera</font>
                    </div>
                    <div className=" text-right pr-3">
                        <font className="text-success mr-3">Pedido: 18:35</font><font className="text-info">Previsão:19:20</font>
                    </div>
                    <div className="row mt-3">
                        <span className="col col-sm col-md col-lg text-danger text-right pr-5">Saida de entrega: 19:00</span>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">1x Refrigerante </li>
                        <li className="list-group-item">2x Hamburguer Top</li>
                    </ul>
                    <div className="p-4 text-muted">

                        <blockquote className="text-muted">Pedido realizado por: Sarah Rodrigues</blockquote>
                        <blockquote className="text-success">Valor total: 50,30</blockquote>
                        <blockquote className="text-muted h6">Obs: Lorem Ipsum é simplesmente uma simulação de texto da indústria  ...</blockquote>

                    </div>
                </div>

            </main >
        );
    }
}