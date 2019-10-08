import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { DOMINIO, TOKEN, ID_PRODUTO } from '../../../../link_config';
import { Link } from 'react-router-dom';


export class SessaoCategoria extends Component {

    constructor(props) {
        super();
        this.state = {

            categoriaproduto: {

                categoria: {},
                produto: {}
            },

            categorias: [],

            listaCategoria: []

        }
    }

    componentDidUpdate() {
        const idProduto = this.props.idProduto;

        if (idProduto != null) {
            $("#cadastro-categoria").removeClass("disabilita-elemento");
        }
    }

    componentWillMount() {
        this.visualizarCategoriaSalva();
    }

    apagaCategoria(id) {

        const url = `${DOMINIO}/categoriaproduto/${id}`;

        $.ajax({
            url: url,
            type: 'DELETE',
            headers: { 'token': TOKEN },
            success: function (resposta) {

                this.visualizarCategoriaSalva();

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });


    }

    visualizarCategoriaSalva() {

        const idProduto = this.props.idProduto;

        const url = `${DOMINIO}/categoriaproduto/${idProduto}`;

        $.ajax({
            url: url,
            type: 'GET',
            headers: { 'token': TOKEN },
            success: function (resposta) {

                this.setState({ listaCategoria: resposta });

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });

    }

    enviaCategoria() {

        const idProduto = this.props.idProduto;
        const idCategoria = document.getElementById("sql_categoria").value
        var categoriaNome = { ...this.state.categoriaproduto };
        categoriaNome.categoria = { "id": idCategoria }
        categoriaNome.produto = { "id": idProduto }

        const url = `${DOMINIO}/categoriaproduto`;

        $.ajax({

            url: url,
            contentType: "application/json",
            dataType: 'json',
            headers: { 'token': TOKEN },
            type: 'POST',
            data: JSON.stringify(categoriaNome),



            success: function (resposta) {


                if (resposta.length >= 5) {
                    $("#salvar-categoria").prop('disabled', true);
                } else {
                    $("#salvar-categoria").prop('disabled', false);
                }

               this.visualizarCategoriaSalva();


            }.bind(this),
            error: function (data) {

                console.log(JSON.stringify(categoriaNome));

            }
        });
    }

    componentDidMount() {
        const idProduto = this.props.idProduto;
        const url = `${DOMINIO}/categoria`;

        $.ajax({
            url: url,
            headers: { 'token': TOKEN },
            type: 'GET',
            success: function (resposta) {
                console.log(resposta[0].nome)
                console.log(this.setState({ categorias: resposta }));
                console.log(this.state.categorias);

            }.bind(this),
            error: function (resposta) {
                console.log(resposta)
            }
        });
    }

    render() {
        return (

        <div className={`${this.props.className}`} id="cadastro-categoria">

            <h4 >3º Passo</h4>
            <hr />

            <div className="row mx-auto w-75 pb-2">
                <label className="col col-sm col-md col-lg h5">Categoria do Produto</label>
            </div>
            <div className="row mx-auto w-75 pb-3">
                <div class="col-11">
                    <select name="categoria" id="sql_categoria" className="custom-select">
                        <option value="" selected >Selecione a categoria para este produto... </option>
                        {this.state.categorias.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-1 p-0">
                    <input type="button" className="btn btn-outline-success" id="salvar-categoria" onClick={e => this.enviaCategoria(e)} value="ok" />
                </div>
            </div>
            <div className="row mx-auto w-75 pb-3">
                {this.state.listaCategoria.map(item => (
                    <div className="col-2 float-left border rounded ml-1 mt-1">
                        <div className="row mt-1" key={item.id}>
                            <div className="col-9">
                                {item.categoria.nome}
                            </div>
                            <div className="col-1 align-self-end">
                                <span className=" cor-cinza" onClick={e => this.apagaCategoria(item.id)}>x</span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}