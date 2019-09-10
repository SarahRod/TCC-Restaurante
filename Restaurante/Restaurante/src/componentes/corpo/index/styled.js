import styled from 'styled-components';
import theme from 'styled-theming';

export const corDiv = theme('cor',{
    laranja: "#F26B3A",
    marrom: "#705348",
    verde: "#3D830B"
})

export const DivOpecoes = styled.div`
    background: ${corDiv};
    height: 100px;
    border-radius: 10px 10px 0 0;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
`

export const DivOpecoesTitulo = styled.div`
    border: 1px solid ${corDiv};
    height: 30px;
    border-radius: 0 0 10px 10px;
    font-size: 0.8em;
    padding-left: 15px;
`

export const IconeOpcoes = styled.img`
    max-width: 90px;
`

export const CabecalhoGraficos = styled.div`
    height: 30px;
    font-size: 0.8em;
`

export const CorpoGraficos = styled.div`
    height: 200px;
`

