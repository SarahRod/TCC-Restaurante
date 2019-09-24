import axios from 'axios';
import { DOMINIO } from '../../../../link_config';

export function getProduto(id) {
    const requisicao = axios.get(`http://localhost:8080/produto/${id}`)

    return {
        type: "EDITAR_PRODUTO",
        payload: requisicao
    }


}

export function postProduto(){
    return {
        type: "ESTADO_INICIAL",
    }
}