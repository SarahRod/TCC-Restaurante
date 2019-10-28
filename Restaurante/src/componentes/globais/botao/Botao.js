import React from 'react';
import { Botao } from './styled';
import "./style.css";
import $ from 'jquery';
import { DOMINIO, TOKEN } from '../../../link_config';

export const BotaoLink = (props) => (
  <Botao onClick={props.onClick} to={props.to} className={`btn ${props.className}`}>{props.texto}</Botao>
)