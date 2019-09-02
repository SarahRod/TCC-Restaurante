import React, { Component } from 'react';
import { InputCadastro } from '../../../globais/input/Input';
import { Label } from '../../../globais/label/Label';
import { BotaoLink } from '../../../globais/botao/Botao';
import $ from 'jquery';
import Corpo from '../../../corpo/Corpo';
import { DOMINIO } from '../../../../link_config';

/*PROPRIEDADES DO CABEÇALHO*/
const propriedadesCabecalho = {
    to: '/',
    width: 'w-50'
}

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    
    
}

export class FormularioEndereco extends Component {

    constructor(){
        super();
        this.state = {
            restaurante: {
                cep: '',
                logradouro: '',
                bairro: '',
                complemento: '',
                numero: '',
                referencia: '',
                cidade: ''
            },
            cidade: [],
        
            estado: []
        }
    }
    // state = { ...initialState }

    //ENVIA OS DADOS DO FORMULÁRIO PARA O SESSION STORAGE
    enviaFormulario(e) {
        var dados = sessionStorage.getItem('dados');

        const json = JSON.parse(dados);

        const  idCidade = document.getElementById("sql_cidade").value

        const enderecoRestaurante = this.state.restaurante;
        enderecoRestaurante.cidade = {"id": idCidade};
        this.setState({restaurante: enderecoRestaurante});

        var novoDado = { ...json, 'endereco':  enderecoRestaurante};

        sessionStorage.setItem('dados', JSON.stringify(novoDado));
       
    }
    

    buscarCidadesporEstado(id = ""){
        let url = `${DOMINIO}/cidade`; 
        if(id != ""){
            url += "/"+id;
        }
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            success: function (resposta) {
                this.state.cidade ="";
                
                this.setState({ cidade: resposta })

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);
            }
        });
    }
    buscarEstados(){
        $.ajax({
            url: `${DOMINIO}/estado`,
            dataType: 'json',
            type: 'GET',
            success: function (resposta) {
                this.setState({ estado: resposta })
            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);
            }
        });
    }
    componentWillMount(){
        this.buscarEstados();
        this.buscarCidadesporEstado(11);
    }


    //ATUALIZA AS INPUTS COM OS ESTADOS 
    atualizaCampo(e) {
        const restaurante = { ...this.state.restaurante }
        restaurante[e.target.name] = e.target.value
        this.setState({ restaurante })

        //REALIZA AS REQUISIÇÕES NA API DE CEP
        // $("#cep").focusout(function () {
           
            
        // });
        
       

    }

    atualizaCidade(){
        let id =document.getElementById("sql_estado").value
        this.buscarCidadesporEstado(id);
    }
    
    atualizaCamposViaCep(){
        let cep = document.getElementById("cep").value;
        console.log(cep);
        cep = cep.replace(/[^0-9]/g, "");
        
        console.log(cep.length, "---");
        if(cep.length > 4 ){
            $.ajax({
                url: `${DOMINIO}/endereco/cep/${cep}`,
                dataType: 'json',
                success: resposta =>{
                    $("#logradouro").val(resposta.logradouro);
                    $("#bairro").val(resposta.bairro);
                    let idEstado = resposta.cidade.estado.id;
                    document.getElementById("estado-"+idEstado).selected = true;
    
                    this.atualizaCidade();
                }
            });
        }
        
    }
    


    /* FORMULÁRIO DO ENDEREÇO */
    renderForm() {
        return (

            <form className="form-group mt-5">
                <Label className="h2 mb-1" texto="Endereço do restaurante" />
                <div className="row mt-4 mb-4">
                    <InputCadastro className="col col-sm p-1 col-md col-lg p-1 ml-3 mr-3" id="cep" name="cep" type="text"
                        placeholder="CEP" onF value={this.state.restaurante.cep} onFocus={e => this.atualizaCamposViaCep()} onChange={e => this.atualizaCampo(e)} />
                    <InputCadastro className="col col-sm-5 col-md-5 col-lg-5 p-1 mr-3" id="logradouro" name="logradouro" type="text"
                        placeholder="Logradouro" value={this.state.restaurante.longradouro} onChange={e => this.atualizaCampo(e)} />
                    <InputCadastro className="col col-sm col-md col-lg p-1 mr-3" id="bairro" name="bairro" type="text"
                        placeholder="Bairro" />
                </div>
                <div className="row mb-4" >
                   
                        <select name="estado" id="sql_estado" onChange={e => this.atualizaCidade()} className="col col-sm col-md col-lg p-1 ml-3 mr-3 border-input">
                            {/* <option>Estado</option> */}
                            {this.state.estado.map(item => (
                                <option key={item.id} id={"estado-"+item.id} value={item.id}>
                                    {item.estado}
                                </option>
                            ))}
                        </select>
                        <select name="cidade" id="sql_cidade" className="col col-sm col-md col-lg p-1 mr-3 border-input">
                            {/* <option>Cidade</option> */}
                            {this.state.cidade.map(item => (
                                <option key={item.id} id={"cidade-"+item.id} value={item.id}>
                                    {item.cidade}
                                </option>
                            ))}
                        </select>
                </div>
                    <div className="row mb-4">
                        <InputCadastro className="col col-sm-9 col-md-9 col-lg-9 p-1 ml-3 mr-3 " id="txt-complemento-restaurante" name="complemento" type="text"
                            placeholder="Complemento" />
                        <InputCadastro className="col col-sm col-md col-lg p-1 mr-3" id="txt-numero-restaurante" name="numero" type="text"
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
        
