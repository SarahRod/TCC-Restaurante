const ESTADO_INICIAL = { produto: { nome: '', preco: 0, desconto: 0, descricao: '' } }

export default function (state = ESTADO_INICIAL, action) {
    switch (action.type) {
        case "EDITAR_PRODUTO":
            return { ...state, produto: action.payload.data }

        default:

            return state

    }
}