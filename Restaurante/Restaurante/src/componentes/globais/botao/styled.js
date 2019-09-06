import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Botao = styled(Link)`
color: #F26B3A !important;
border: 2px solid #F26B3A !important;
&:hover{
    background: #F26B3A;
    color: #ffffff !important;
}
`;

export const BotaoGrande = styled(Botao)`
    heigth: 65px;

`