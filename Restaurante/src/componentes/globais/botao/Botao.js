import React from 'react';
import { Botao } from './styled';
import "./style.css";
import $ from 'jquery';
import { DOMINIO, TOKEN } from '../../../link_config';

export const BotaoLink = (props) => (
  <Botao onClick={props.onClick} to={props.to} className={`btn ${props.className}`}>{props.texto}</Botao>
)

export class BotaoRadioSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {

    this.desativarProduto(e);
    this.setState({ isChecked: !this.state.isChecked })

  }

  componentWillMount() {

    const { id } = this.props;


    if (id != null || id != '') {
      this.verificaStatus();
    }

  }

  verificaStatus() {

    const { id } = this.props;

    const url = `http://localhost:8080/produto/${id}`;

    if (id != null) {

      $.ajax({
        url: url,
        type: 'get',
        headers: { 'token': TOKEN },
        success: function (resposta) {

          switch (resposta.status) {
            case "0":


              break;
            case "1":

              //this.setState({ isChecked: true })

              $('#btn-status').attr("checked", "checked");

              break;
            default:

          }



        }.bind(this),
        error: function (data) {
          console.log('Erro:', data);

        }
      });


    } else {

    }
  }

  desativarProduto() {

    const { id } = this.props;
   
      const url = `${DOMINIO}/produto/status/${id}`;

      $.ajax({
        url: url,
        type: 'PUT',
        headers: { 'token': TOKEN },
        success: function (data) {



        }
      });
    
  }


  render() {
    return (
      <label className={`switch ${this.props.className}`} id={this.props.id}>
        <input id="btn-status" type="checkbox" value={this.state.isChecked} onChange={e => this.handleChange(e)} />
        <div className="slider"></div>
      </label>
    );
  }
}
