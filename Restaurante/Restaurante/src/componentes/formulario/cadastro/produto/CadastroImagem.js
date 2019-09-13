import React, {Component, Fragment} from 'react';
import Carne from '../../../../recursos/imgs/carne.jpg';

export class CadastroImagem extends Component{
    render(){
        return(
            <Fragment>
                <div class="col-12 col-md-7 red">
                    <div class="row">
                        <div class="col-7 col-md-5 mx-auto ">
                            <div class="card card-maior">
                                <img src={Carne} class="card-img-top tamanho-imagem-produto" alt="..."/>
                                <div class="card-body pb-0">
                                    <h6 class="card-title text-center">Imagem Principal</h6> 
                                    <p>
                                        <div class="input-group input-group-sm mb-0 ">
                                            <input type="text" class="form-control mt-0" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" placeholder="Escreva uma legenda.."/>
                                            
                                        </div>
                                    </p>
                                    <div className="input-file btn btn-light">
                                                <span>Anexar Imagem</span>
                                                <input ref="file" type="file" className="upload"  multiple="true" id="foto" name="foto" value=""  onChange=""/>
                                            </div>
                                    <a class="btn btn-success btn-sm mb-2 btn-tamanho" id="addInput">
                                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                        Adicionar
                                    </a>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </Fragment>
        )
    }
}