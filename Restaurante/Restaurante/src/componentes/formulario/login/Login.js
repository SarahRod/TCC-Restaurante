import React, { Component } from 'react';
import { Label } from '../../globais/label/Label';
import LogoGoDinner from '../../../recursos/imgs/logo.png';
import { InputCadastro } from '../../globais/input/Input';
import { BotaoLink } from '../../globais/botao/Botao';


export class FormularioLogin extends Component {

    // state = { ...initialState }

    // componentWillMount(){
    //     var dados = sessionStorage.getItem('dados');

    //     const json = JSON.parse(dados)

    //     this.state.texto = json.razaoSocial;

    // }

    // enviaFormulario() {

    //     const restaurante = { ...this.state.restaurante }

    //     var dados = sessionStorage.getItem('dados');

    //     const json = JSON.parse(dados)

    //     this.state.restaurante.id = json.id;

    //     const url = `${DOMINIO}/foto/restaurante`;

    //     //FAZ O UPLOAD DA FOTO
    //     var formData = new FormData();
    //     var files = $("#foto")[0].files[0];
    //     formData.append('foto', files);
    //     formData.append('id', this.state.restaurante.id);

    //     $.ajax({
    //         url: url,
    //         type: 'post',
    //         data: formData,
    //         contentType: false,
    //         processData: false,
    //         success: function (resposta) {

    //             console.log('Sucesso');
    //         }.bind(this),
    //         error: function (data) {
    //             console.log('Erro:', data);

    //         }
    //     });
    // }

    //ATUALIZA AS INPUTS COM OS ESTADOS 
    // atualizaCampo(e) {
    //     const restaurante = { ...this.state.restaurante }
    //     restaurante[e.target.name] = e.target.value
    //     this.setState({ restaurante })

    //     var file = this.refs.file.files[0];
    //     var reader = new FileReader();
    //     var url = reader.readAsDataURL(file);

    //      reader.onloadend = function (e) {
    //         this.setState({
    //             imgSrc: [reader.result],
    //         })
    //       }.bind(this);  

    // }



    /* FORMULÁRIO DO LOGIN */
    render() {
        return (
            <form className="form-group">
                <div className="row">
                    <img src={LogoGoDinner} className="img-fluid icone-img" />
                </div>
                <div className="row mb-5">
                    <div className="mx-auto h3">Bem-vindo(a) a GoDinner</div>
                </div>
                {/* <!--Div de Cadastro--> */}
                <Label className="ml-5 pl-5 h5" texto="Email" />
                <div className="row  justify-content-md-center mb-4">

                    <InputCadastro className="col-8 col-sm-8 col-md-8 col-lg-8 p-1 ml-3 mr-3" type="password" id="" name="" placeholder="Digite a seu email .." />

                </div>
                <Label className="ml-5 pl-5 h5" texto="Senha" /><br />
                <div className="row  justify-content-md-center">
                    
                        
                        <InputCadastro className="col-8 col-sm-8 col-md-8 col-lg-8 p-1 ml-3 mr-3" type="password" id="" name="" placeholder="Digite a sua senha .." />
                    
                </div>
                {/* <!--botões para cadastrar e entrar--> */}
                <div className="row mt-5 justify-content-md-center">

                    <BotaoLink to="/cadastro" className="col-8 col-sm-8 col-md-8 col-lg-8 p-1 ml-3 mr-3" texto="Entrar"></BotaoLink>

                </div>

                <div className="row mt-4 justify-content-md-center">

                    <BotaoLink to="/cadastro" className="col-8 col-sm-8 col-md-8 col-lg-8 p-1 ml-3 mr-3" texto="Cadastrar"></BotaoLink>

                </div>
                <div>
                    <div>
                        <hr />
                    </div>
                    <div className="mt-2 mr-2 ml-2">
                        <h6>  OU CONERCTAR COM    </h6>
                    </div>
                    <div>
                        <hr />
                    </div>
                </div>

                <img src="img/icone/icone-face.png " classNmae="rounded mx-auto d-block" />

                <div className="col-1 col-md-2 col-lg-3"></div> */} */}

            </form>


        )


    }

}