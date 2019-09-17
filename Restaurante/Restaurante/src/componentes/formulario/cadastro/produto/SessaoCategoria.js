import React,{Component, Fragment} from 'react';
import $ from 'jquery';
import { DOMINIO } from '../../../../link_config';





export class SessaoCategoria extends Component{

    constructor(props){
        super();
        this.state = {categoria: []}
    }

    componentDidMount() {
        let id = localStorage.getItem("id");
        const url = `${DOMINIO}/categoria/todos`;
        const token = localStorage.getItem('token');
        
        $.ajax({
            url: url,
            contentType: "application/json",
            dataType: 'json',
            headers: {'token': token},
            type: 'GET',
            success: function(resposta) {
                console.log(resposta[0].nome)
                console.log(this.setState({categoria: resposta}));

                console.log(this.state.categoria);
           
            }.bind(this),
            error: function(resposta){
                console.log("Ocorreu um erro na conexão")
            }
        });
    }

    render(){
        return(
            <div className="row mt-5">
                <div className="col-12">
                    <h4>3º Passo</h4>
                    <hr/>
                </div>
                <div className="col-4">
                    <label className="h5">Categoria do Produto</label>
                    <select name="categoria" id="sql_categoria"  className="custom-select">
                        <option value="" selected >Selecione a categoria para este produto... </option>
                        {this.state.categoria.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
                        
            </div>
        )
    }
}