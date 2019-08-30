import React from 'react' ;
import { Link } from 'react-router-dom'

export const BotaoLink = (props) =>(
    <Link  onClick={props.onClick} to={props.to} className={`btn ${props.className}`}>{ props.texto }</Link> 
) 