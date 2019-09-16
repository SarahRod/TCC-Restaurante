import React, { Component, Fragment } from 'react';
import { CadastroImagem } from './CadastroImagem';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { DOMINIO } from '../../../../link_config';

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    produto: {
        nome: '',
        preco: 200,
        desconto: "0",
        descricao: '',
        vendido: 0
    },

    restaurante: {
        id: 1
    }
   
}

export class CadastroProduto extends Component {

    //ARMAZENA OS ESTADOS INICIAIS
    state = { ...initialState }

    enviaFormulario() {

        const token = localStorage.getItem('token')

        const produto = { ...this.state.produto };

        var novoproduto = { ...produto, 'restaurante': this.state.restaurante };

        const url = `${DOMINIO}/produto/novo`;

        console.log(novoproduto)

        $.ajax({
            url: url,
            dataType: 'json',
            headers: { 'token': token },
            type: 'POST',
            data: novoproduto,
            contentType: "application/json",
            success: function (resposta) {

                alert('Gravou')
               

            }.bind(this),
            error: function (data) {
                
                alert('naõ gravou')
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
                    <div className="row mt-3">
                        <h1 className="mx-auto">Cadastro de Produtos</h1>
                    </div>
                    <hr />
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <label className="h5">Nome do Produto</label>
                                        <input className="form-control  mb-2 mr-sm-2" type="text" name="nome" id="nome" value={this.state.produto.nome} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-3 mb-3">
                                        <label className="h5">Preço</label>
                                        <input className="form-control  mb-2 mr-sm-2" type="text" name="preco" id="preco" value={this.state.produto.preco} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                    <div className="col-3 mb-3">
                                        <label className="h5">Promoção</label>
                                        <input className="form-control  mb-2 mr-sm-2" type="text" name="desconto" id="desconto" value={this.state.produto.desconto} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <h5 className="simbolo-porcentagem">%</h5>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-8">
                                        <label className="h5">Categoria do Produto</label>
                                        <select className="custom-select">
                                            <option value="" selected >Selecione a categoria para este produto... </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-10">
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1" className="h5">Descrição do Produto</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="descricao"   value={this.state.produto.descricao} onChange={e => this.atualizaCampo(e)}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CadastroImagem />
                        </div>
                        <div>
                            <Link className="btn btn-success  btn-sm text-white  mt-4 col-5 col-lg-5" id="add-campo" onClick={e => this.enviaFormulario(e)} >
                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                Cadastrar
                            </Link>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}