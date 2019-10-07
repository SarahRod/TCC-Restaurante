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

                this.setState({ listaCategoria: resposta });

                console.log(resposta.length);

                if (resposta.length >= 5) {
                    $("#salvar-categoria").prop('disabled', true);
                } else {
                    $("#salvar-categoria").prop('disabled', false);
                }

                console.log("Lista: ", resposta);


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


                <div className="row">
                    <label className="col col-sm col-md col-lg h5">Categoria do Produto</label>
                </div>
                <div className="row">
                    <select name="categoria" id="sql_categoria" className="custom-select col col-sm col-md col-lg">
                        <option value="" selected >Selecione a categoria para este produto... </option>
                        {this.state.categorias.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-1">
                    <input type="button" className="btn btn btn-outline-success btn-sm  mt-1" id="salvar-categoria" onClick={e => this.enviaCategoria(e)} value="ok" />
                </div>
                {this.state.listaCategoria.map(item => (
                    <div className="col-2 border rounded ml-1 mt-1">
                        <div className="row mt-1" key={item.id}>
                            <div className="col-9">
                                {item.categoria.nome}
                            </div>
                            <div className="col align-self-end">
                                <span className=" cor-cinza">x</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}