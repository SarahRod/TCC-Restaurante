import React,{Component, Fragment} from 'react';

export class SessaoCategoria extends Component{
    render(){
        return(
            <div className="row mt-5">
                <div className="col-12">
                    <h4>3º Passo</h4>
                    <hr/>
                </div>
                <div className="col-4">
                    <label className="h5">Categoria do Produto</label>
                    <select name="categoria" id="sql_categoria" onChange={e => this.atualizaCidade(e)} className="custom-select">
                        <option value="" selected >Selecione a categoria para este produto... </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                        
            </div>
        )
    }
}