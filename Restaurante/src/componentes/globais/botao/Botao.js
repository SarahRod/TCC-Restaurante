import React from 'react';
import { Botao } from './styled';

export const BotaoLink = (props) => (
    <Botao onClick={props.onClick} to={props.to} className={`btn ${props.className}`}>{props.texto}</Botao>
) 