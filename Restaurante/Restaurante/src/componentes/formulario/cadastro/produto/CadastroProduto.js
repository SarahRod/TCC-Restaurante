import React, { Component, Fragment } from 'react';
import { CadastroImagem } from './CadastroImagem';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { DOMINIO } from '../../../../link_config';
import { SessaoCategoria } from './SessaoCategoria';

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    produto: {
        nome: '',
        preco: 0,
        desconto: "0",
        descricao: '',
        vendidos: 0
    },

    restaurante: {
        id: 1
    },

    categoria: {
        nome: ''
    },

    categoria: []

}

export class CadastroProduto extends Component {

    //ARMAZENA OS ESTADOS INICIAIS
    state = { ...initialState }

    enviaFormulario() {

        const token = localStorage.getItem('token');

        const produto = { ...this.state.produto };

        var novoproduto = { ...produto, 'restaurante': this.state.restaurante };

        const url = `${DOMINIO}/produto/novo`;

        $.ajax({

            url: url,
            contentType: "application/json",
            dataType: 'json',
            headers: { 'token': token },
            type: 'POST',
            data: JSON.stringify(novoproduto),


            success: function (resposta) {

                alert('Gravou');

                sessionStorage.setItem("id_produto", resposta.id);


            }.bind(this),
            error: function (data) {

                alert('nao gravou')
            }
        });
    }

    //ATUALIZA AS INPUTS COM OS ESTADOS 
    atualizaCampo(e) {
        const produto = { ...this.state.produto }
        produto[e.target.name] = e.target.value;


        this.setState({
            produto
        })

    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row mt-3 mb-5">
                        <h1 className="mx-auto">Cadastro de Produtos</h1>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <h4>1º Passo</h4>
                                <hr />
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <label className="h5">Nome do Produto</label>
                                        <input className="form-control  mb-2 mr-sm-2" type="text" name="nome" id="nome" value={this.state.produto.nome} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-3 mb-4">
                                        <label className="h5">Preço</label>
                                        <input className="form-control  mb-2 mr-sm-2" type="text" name="preco" id="preco" value={this.state.produto.preco} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                    <div className="col-3 mb-4">
                                        <label className="h5">Promoção</label>
                                        <input className="form-control  mb-2 mr-sm-2" type="text" name="desconto" id="desconto" value={this.state.produto.desconto} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                    <div className="col-6 mb-4">
                                        <h5 className="simbolo-porcentagem">%</h5>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-10">
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1" className="h5">Descrição do Produto</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="descricao" value={this.state.produto.descricao} onChange={e => this.atualizaCampo(e)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 ml-2">
                                    <Link className="btn btn-success  btn-sm text-white  mt-4 col-5 col-lg-5" id="prox-campo" onClick={e => this.enviaFormulario(e)} >
                                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                        Próximo Passo
                                    </Link>
                                </div>
                            </div>
                            <CadastroImagem />
                        </div>
                        <SessaoCategoria />
                    </form>
                </div>
            </Fragment>
        )
    }
}