import React from 'react' ;
import { Link } from 'react-router-dom'

export const BotaoLink = (props) =>(
    <Link to={props.to} onClick={props.onClick} className={`btn ${props.className}`}>{ props.texto }</Link> 
) 