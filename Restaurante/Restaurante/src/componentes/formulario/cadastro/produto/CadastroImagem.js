import React, {Component, Fragment} from 'react';
import Carne from '../../../../recursos/imgs/carne.jpg';
import $ from 'jquery';
import { DOMINIO } from '../../../../link_config';
import '../../../../recursos/js/AddImagem';


const initialState = {
    
    Imagem: {
        foto: '' ,
        index: '',
        legenda: '',
        id_produto: '',
    },

    imgSrc: '',
}

export class CadastroImagem extends Component{

    state = { ...initialState }

    
   
    atualizaCampo(e) {
        const Imagem = { ...this.state.Imagem}
        Imagem[e.target.name] = e.target.value
        this.setState({ Imagem })

         //PREVIEW FOTO
         var file = this.refs.file.files[0];
         var reader = new FileReader();
         var url = reader.readAsDataURL(file);
 
         reader.onloadend = function (e) {
             this.setState({
                 imgSrc: [reader.result],
             })
         }.bind(this);


    }


    
    

    enviaImagem() {
        const token = localStorage.getItem('token');

        
        // this.state.restaurante.id = json.id;

        const url = `${DOMINIO}/foto/produto`;

        //FAZ O UPLOAD DA FOTO
        var formData = new FormData();
        var files = $("#foto")[0].files[0];
        formData.append('foto', files);
        formData.append('legenda', this.state.Imagem.legenda);
        formData.append('index', 1);
        formData.append('id', 6);

        

        alert(JSON.stringify(formData));

        $.ajax({
            url: url,
            type: 'post',
            data: formData,
            headers: { 'token': token },
            contentType: false,
            processData: false,
            success: function (resposta) {

                console.log('Sucesso');
            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });
    }


    render(){
        return(
            <Fragment>
                <div class="col-12 col-md-7">
                    <h4>2º Passo</h4>
                    <hr/>
                    <div class="row">
                        <div class="col-7 col-md-5">
                            <div class="card card-maior">
                                <img src={this.state.imgSrc} class="card-img-top tamanho-imagem-produto" alt="..."/>
                                <div class="card-body pb-0">
                                    <p>
                                        <div class="input-group input-group-sm ">
                                            <input type="text" class="form-control mt-0" aria-label="" id="legenda" name="legenda" placeholder="Escreva uma legenda.." value={this.state.Imagem.legenda}  onChange={e => this.atualizaCampo(e)}/>
                                            
                                        </div>
                                    </p>

                                    <div className="input-file btn btn-light mt-0 ml-4">
                                                <span>Anexar Imagem</span>
                                                <input ref="file" type="file" className="upload"  multiple="true" id="foto" name="foto" value={this.state.Imagem.foto}  onChange={e => this.atualizaCampo(e)}/>
                                            </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12" >
                                            <a class="btn btn-success btn-sm mb-2 btn-tamanho" id="addInput" onClick={e => this.enviaImagem(e)} >
                                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                                Salvar
                                            </a>    
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </Fragment>
        )
    }
}