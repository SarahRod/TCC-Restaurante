import React, { Component } from 'react';
import './style.css'

export class SeusPedidos extends Component {
    render() {
        return (
            <main className="container mb-5">
                <div className="ml-2 border mx-auto text-center rounded mensagem-slogan">Rapidez  + Qualidade =  +Dinheiro +Clientes </div>
                <div className="row mb-5 mx-auto justify-content-end select-data">
                    <select class="custom-select ml-5 max-select" id="inlineFormCustomSelect">
                        <option selected>Data de pedido</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="row border-bottom mx-auto mb-4 pl-3 w-75 pb-2" style={{ maxWidth: '80%', cursor: 'pointer' }}>
                    <span className="col-6 col-sm-6 col-md-6 col-lg-3 text-sencodary" >Em produção</span>
                    <span className="col-6 col-sm-6 col-md-6 col-lg-3 text-secondary" >Sendo entregue</span>
                </div>
                <div class="card mx-auto" style={{ maxWidth: '50rem' }}>
                    <div class="text-right pr-3 pt-2 mb-2">
                        <span className="bg-primary rounded-circle mr-2 circle"></span>
                        <font className="">Finalizado</font>
                    </div>
                    <div class=" text-right pr-3">
                        <font className="text-success mr-3">Pedido: 18:35</font><font className="text-info">Previsão:19:20</font>
                    </div>
                    <div class="row ml-2 mt-3">
                        <font className="col-6 col-sm-6 col-md-6 col-lg-8">4x Batata Frita</font>
                        <span className="col-5 col-sm-5 col-md-5 col-lg-3 text-primary border-bottom border-primary text-center">Saida de entrega: 19:00</span>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">1x Refrigerante </li>
                        <li class="list-group-item">2x Hamburguer Top</li>
                    </ul>
                    <div class="p-4 text-muted">

                        <blockquote className="text-muted">Pedido realizado por: Sarah Rodrigues</blockquote>
                        <blockquote className="text-success">Valor total: 50,30</blockquote>
                        <blockquote className="text-muted h6">Obs: Lorem Ipsum é simplesmente uma simulação de texto da indústria  ...</blockquote>

                    </div>
                </div >
            </main >
        );
    }
}