import { combineReducers } from 'redux';
import CadastroProdutoReducer from './componentes/formulario/cadastro/produto/cadastroReducer'

const rootReducer = combineReducers({
    dashboard: CadastroProdutoReducer
})

export default rootReducer;