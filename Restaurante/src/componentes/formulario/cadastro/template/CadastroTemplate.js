import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';



export class CadastroTemplate extends Component{
    render(){
        return(
            <Fragment>
                <div class=" container">
                    <h1 class="mb-3 text-center mb-5">Sua página</h1>
                    <h5>Conte sobre sua empresa</h5>
                    <hr/>
                    <div class="row mt-4">
                        <div class="col-md-6 col-12">
                            <label class="h6">Descrição Principal</label><br/>
                            <textarea class="form-control" style={{height: 150 +'px'}} id="descricao-principal"></textarea>
                        </div>
                        <div class="col-md-6 col-12">
                            <label class="h6">Sobre nós</label><br/>
                            <textarea class="form-control"  style={{height: 150 +'px'}} id="sobre-nos"></textarea>
                        </div>
                    </div>
                    
                    <h5 class="mt-5">Plano de fundo</h5>
                    <hr/>
                    <div class="row mt-4 mb-5">
                        <div class="col-12 col-md-4">
                            <div class="card mb-3">
                                <img class="card-img-top" src="img/background.jpg" alt="imagem Template 02"/>
                            </div>
                            <input class="mr-3" type="radio" name="imagem" value="imagem-1"/>Imagem 01
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card mb-3">
                                <img class="card-img-top" src="img/background.jpg" alt="imagem Template 02"/>
                            </div>
                            <input class="mr-3" type="radio" name="imagem" value="imagem-2"/>Imagem 02
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card mb-3">
                                <img class="card-img-top" src="img/background.jpg" alt="imagem Template 02"/>
                            </div>
                            
                            <input class="mr-3" type="radio" name="imagem" value="imagem-3"/>Imagem 03
                        </div>
                    </div>
                    <div className="row">
                    <div className="col align-self-end bg-primary">
                        <div className="col col-sm col-md col-lg">
                            <Link class="btn btn-success" to="/restaurante">Finalizar</Link>
                        </div>
                    </div>
                    </div>
                    
                
                </div>
            </Fragment>
        )
    }
}