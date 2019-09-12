import React,{Component, Fragment} from 'react';
import {CadastroImagem} from './CadastroImagem';


export class CadastroProduto extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                <div className="row mt-3">
                    <h1 className="mx-auto">Cadastro de Produtos</h1>
                </div>
                <hr/>
                <form>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label  className="h5">Nome do Produto</label>
                                    <input className="form-control  mb-2 mr-sm-2" type="text" name="" id=""/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 mb-3">
                                    <label  className="h5">Preço</label>
                                    <input className="form-control  mb-2 mr-sm-2" type="text" name="" id=""/>
                                </div>
                                <div className="col-3 mb-3">
                                    <label  className="h5">Promoção</label>
                                    <input className="form-control  mb-2 mr-sm-2" type="text" name="" id=""/>
                                </div>
                                <div className="col-6 mb-3">
                                    <h5 className="simbolo-porcentagem">%</h5>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label  className="h5">Categoria do Produto</label>
                                    <select className="custom-select">
                                        <option selected>Selecione a categoria para este produto... </option>
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
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CadastroImagem/>
                    </div>
                </form>
            </div>
        </Fragment>
        )
    }
}