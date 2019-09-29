import React, { Component, Fragment } from 'react';
import Carne from '../../../../recursos/imgs/carne.jpg';
import $ from 'jquery';
import { DOMINIO } from '../../../../link_config';
import '../../../../recursos/js/AddImagem';
import ImgProduto from '../../../../recursos/imgs/imagem-produto.png';


const initialState = {

    Imagem: {
        foto: '',
        index: '',
        legenda: '',
        idproduto: '',
    },

    imagens: [],


    imgSrc: `${ImgProduto}`,

    img1: `${ImgProduto}`

}

export class CadastroImagem extends Component {

    state = { ...initialState }

    componentWillMount() {

       
        // const  = localStorage.getItem('token');
    }


    visualizarImgSalva() {



        var idProduto = sessionStorage.getItem('id_produto');
        const token = localStorage.getItem('token');


        const url = `${DOMINIO}/fotoproduto/todos/${idProduto}`;



        $.ajax({
            url: url,
            type: 'get',
            headers: { 'token': token },
            success: function (resposta) {

              

                if (resposta.length >= 3 ) {
                    $("#addInput").prop('disabled', true);
                } else {
                    $("#addInput").prop('disabled', false);
                }



                this.setState({ imagens: resposta })

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });

    }



    atualizaCampo(e) {
        const Imagem = { ... this.state.Imagem }
        Imagem[e.target.name] = e.target.value
        this.setState({ Imagem })

        //PREVIEW FOTO
        var file = this.refs.file.files[0];
        var reader = new FileReader();


        //Verifica se a imagem foi alterada (Tratamento de erro)
        if (file != '' && file != null) {
            reader.onloadend = function (e) {

                this.setState({
                    imgSrc: [reader.result],
                })
            }.bind(this);

            reader.readAsDataURL(file)
        }


    }


    enviaImagem(e) {

        const token = localStorage.getItem('token');
        var idProduto = sessionStorage.getItem('id_produto');


        // this.state.restaurante.id = json.id;

        const url = `${DOMINIO}/foto/produto`;

        //FAZ O UPLOAD DA FOTO
        var formData = new FormData();
        var files = $("#foto")[0].files[0];
        formData.append('foto', files);
        formData.append('legenda', this.state.Imagem.legenda);
        formData.append('index', 1);
        formData.append('id', idProduto);


        $.ajax({
            url: url,
            type: 'post',
            data: formData,
            headers: { 'token': token },
            contentType: false,
            processData: false,
            success: function (resposta) {

                this.setState({ ...initialState })



                this.visualizarImgSalva()
            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });
    }


    render() {
        return (
            <Fragment>
                <div class="col-12 col-md-7" id="cadastro-imagem">
                    <h4>2º Passo</h4>
                    <hr />
                    <div class="row">
                        <div class="col-7 col-md-5">
                            <div class="card card-maior">
                                <img src={this.state.imgSrc} class="card-img-top tamanho-imagem-produto" alt="..." />
                                <div class="card-body pb-0">
                                    <p>
                                        <div class="input-group input-group-sm ">
                                            <input type="text" class="form-control mt-0" aria-label="" id="legenda" name="legenda" placeholder="Escreva uma legenda.." value={this.state.Imagem.legenda} onChange={e => this.atualizaCampo(e)} />

                                        </div>
                                    </p>

                                    <div className="input-file btn btn-light mt-0 ml-4">
                                        <span>Anexar Imagem</span>
                                        <input ref="file" type="file" className="upload" multiple="true" id="foto" name="foto" value={this.state.Imagem.foto} onChange={e => this.atualizaCampo(e)} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12" >
                                            <input type="button" class="btn btn-success btn-sm mb-2 btn-tamanho" id="addInput" onClick={e => this.enviaImagem(e)} value="Salvar"
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-4">
                        {this.state.imagens.map(item => (
                            <div className="col-3 col-md-3" id="campo">


                                <div className="card card-menor">
                                    <img key={item.id} name="img1" className="card-img-top tamanho-imagem-produto" alt="..." src={item.foto} />
                                </div>

                                {/* <div className="card card-menor">
                                <img name="img1" className="card-img-top tamanho-imagem-produto" alt="..." src={this.state.img1}/>
                            </div>  */}
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}