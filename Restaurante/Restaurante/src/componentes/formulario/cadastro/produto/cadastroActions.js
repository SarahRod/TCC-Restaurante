import axios from 'axios';
import { DOMINIO } from '../../../../link_config';

export function getProduto() {
    const requisicao = axios.get(`http://localhost:8080/produto/3`)
    return{
        type: "EDITAR_PRODUTO",
        payload: requisicao
    }
}