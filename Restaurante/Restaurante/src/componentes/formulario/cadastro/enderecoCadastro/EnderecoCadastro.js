import React, { Component, Fragment } from 'react';
import { Input } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import $ from 'jquery';
import Corpo from '../../../corpo/Corpo';
import { DOMINIO } from '../../../../link_config'


/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/',
    width: 'w-50'
}

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    restaurante: {
        cep: '',
        logradouro: '',
        bairro: '',
        complemento: '',
        numero: '',
        referencia: ''
    },

    estado: [
        {
            value: '1',
        },
        {
            value: '2',
        }
    ],

    cidade: [
        {
            name: 'Itapevi',
            value: '1',
        },
        {
            name: 'Jandira',
            value: '2',
        }
    ],
}

export class FormularioEndereco extends Component {

    state = { ...initialState }

    //ENVIA OS DADOS DO FORMULÁRIO PARA O SESSION STORAGE
    enviaFormulario(e) {
        const dadosRestaurante = sessionStorage.getItem('dadosRestaurante');
        
        
        const restaurante = {dadosRestaurante,...this.state.restaurante, ...this.state.cidade, ...this.state.estado}

        console.log(restaurante)
        sessionStorage.setItem('dados', JSON.stringify(restaurante));
    }


    //ATUALIZA AS INPUTS COM OS ESTADOS 
    atualizaCampo(e) {
        const restaurante = { ...this.state.restaurante }
        restaurante[e.target.name] = e.target.value
        this.setState({ restaurante })

        $("#cep").focusout(function () {
            //Início do Comando AJAX
            $.ajax({
                //O campo URL diz o caminho de onde virá os dados
                //É importante concatenar o valor digitado no CEP
                url: `http://localhost:8080/endereco/cep/${$(this).val()}`,
                //Aqui você deve preencher o tipo de dados que será lido,
                //no caso, estamos lendo JSON.
                dataType: 'json',
                //SUCESS é referente a função que será executada caso
                //ele consiga ler a fonte de dados com sucesso.
                //O parâmetro dentro da função se refere ao nome da variável
                //que você vai dar para ler esse objeto.
                success: function (resposta) {
                    //Agora basta definir os valores que você deseja preencher
                    //automaticamente nos campos acima.
                    $("#logradouro").val(resposta.logradouro);
                    // $("#complemento").val(resposta.complemento);
                    $("#bairro").val(resposta.bairro);
                    // $("#cidade").val(resposta.localidade);

                    //Vamos incluir para que o Número seja focado automaticamente
                    //melhorando a experiência do usuário

                }
            });
        });

    }


    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (

            <form className="form-group mt-4">
                <Label className="h2 mb-1" texto="Endereço do restaurante" />
                <div className="row mt-4 mb-4">
                    <Input className="col col-sm p-1 col-md col-lg p-1 ml-3 mr-3" id="cep" name="cep" type="text"
                        placeholder="CEP" value={this.state.restaurante.cep} onChange={e => this.atualizaCampo(e)} />
                    <Input className="col col-sm-5 col-md-5 col-lg-5 p-1 mr-3" id="logradouro" name="logradouro" type="text"
                        placeholder="Logradouro" value={this.state.restaurante.longradouro} onChange={e => this.atualizaCampo(e)} />
                    <Input className="col col-sm col-md col-lg p-1 mr-3" id="bairro" name="bairro" type="text"
                        placeholder="Bairro" />
                </div>
                <div className="row mb-4" >
                    <select name="cidade" className="col col-sm col-md col-lg p-1 ml-3 mr-3 border-input">
                        <option>Cidade</option>
                        {this.state.cidade.map(item => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <select name="estado" className="col col-sm col-md col-lg p-1 mr-3 border-input">
                        <option>Estado</option>
                        {this.state.estado.map(item => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="row mb-4">
                    <Input className="col col-sm-9 col-md-9 col-lg-9 p-1 ml-3 mr-3 " id="txt-complemento-restaurante" name="complemento" type="text"
                        placeholder="Complemento" />
                    <Input className="col col-sm col-md col-lg p-1 mr-3" id="txt-numero-restaurante" name="numero" type="text"
                        placeholder="N°" value={this.state.restaurante.n} onChange={e => this.atualizaCampo(e)} />
                </div>
                <div className="row mb-1">
                    <Label className="col col-sm col-md col-lg p-1 ml-3 mr-3" texto="Referência" />
                </div>
                <div className="row mb-5">
                    <textarea className="col col-sm col-md col-lg p-2 ml-3 mr-3 border-input" id="txt-referencia-restaurante" maxLength="150" name="txt-referencia-restaurante" type="text"></textarea>
                </div>
                {/*LINHA DO  BOTÃO COM A ROTA PARA O PRÓXIMA PÁGINA  */}
                <div className="row justify-content-end">
                    <BotaoLink to="/login" onClick={e => this.enviaFormulario(e)} className="col-3 col-sm-3 col-md-3 col-lg-3 btn-orange mr-3" texto="Próximo" />
                </div>
            </form>
        )
    }

    /*CORPO DA PÁGINA, COM  FORMULÁRIO DENTRO */
    render() {
        return (
            <Corpo {...propriedadesCabecalho}>{/*CABECALHO RECEBE AS PROPRIEDADES DA CONST*/}
                {this.renderForm()}

            </Corpo>
        )
    }
}

