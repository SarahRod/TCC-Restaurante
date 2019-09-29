import React,{Component, Fragment} from 'react';
import $ from 'jquery';
import { DOMINIO } from '../../../../link_config';
import { Link } from 'react-router-dom';






export class SessaoCategoria extends Component{

    constructor(props){
        super();
        this.state = {
           
            categoriaproduto:{
                
                categoria:{},
                produto:{}
            },

            categorias: [],
            
            listaCategoria: []

        }
    }

   

    enviaCategoria() {

        const token = localStorage.getItem('token');
        const idCategoria = document.getElementById("sql_categoria").value
        var categoriaNome = { ...this.state.categoriaproduto};
        var idProduto = sessionStorage.getItem('id_produto');
        categoriaNome.categoria = {"id": idCategoria}
        categoriaNome.produto = {"id": idProduto}

       alert(JSON.stringify(categoriaNome));



        const url = `${DOMINIO}/categoriaproduto/novo`;

        $.ajax({

            url: url,
            contentType: "application/json",
            dataType: 'json',
            headers: { 'token': token },
            type: 'POST',
            data: JSON.stringify(categoriaNome),



            success: function (resposta) {

                this.setState({listaCategoria: resposta});

                console.log(resposta.length);
                
                if (resposta.length >= 5 ) {
                    $("#salvar-categoria").prop('disabled', true);
                } else {
                    $("#salvar-categoria").prop('disabled', false);
                }

                console.log("Lista: ",resposta);
                

            }.bind(this),
            error: function (data) {

                console.log(JSON.stringify(categoriaNome));
                alert('nao gravou');
                alert(JSON.stringify(categoriaNome));
              
            }
        });
    }

    componentDidMount() {
        let id = localStorage.getItem("id");
        const url = `${DOMINIO}/categoria/todos`;
        const token = localStorage.getItem('token');

        $.ajax({
            url: url,
            contentType: "application/json",
            
            data: {'token': token},
            type: 'GET',
            success: function(resposta) {
                console.log(resposta[0].nome)
                console.log(this.setState({categorias: resposta}));

                console.log(this.state.categorias);
           
            }.bind(this),
            error: function(resposta){
                console.log(resposta)
            }
        });
    }


   


    render(){
        return(
            <Fragment>
                <div className="row mt-5">
                    <div className="col-12">
                        <h4>3º Passo</h4>
                        <hr/>
                    </div>
                    <div className="col-4">
                        <label className="h5">Categoria do Produto</label>
                        <select name="categoria" id="sql_categoria"  className="custom-select">
                            <option value="" selected >Selecione a categoria para este produto... </option>
                            {this.state.categorias.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>
                    </div>   
                    {this.state.listaCategoria.map(item => (
                        <div className="col" key={item.id}>
                                {item.categoria.nome}
                        </div>
                    ))}
                    
                    
                      
                </div>
            <div class="row col-3">
                <input type="button" className="btn btn-success  btn-sm text-white  mt-4 col-5 col-lg-5" id="salvar-categoria" onClick={e => this.enviaCategoria(e)} value="Salvar"
            
                    
                />
            </div>
            </Fragment>
           
            
        )
    }
}