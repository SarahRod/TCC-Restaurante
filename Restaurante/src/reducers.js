import {combineReducers} from 'redux';

import Cabecalho from './componentes/cabecalho/restaurante/reducer';
// import TabReducer from '../common/tab/tabReducer';
// import BillingCycleReducer from '../billingCycle/billingCycleReducer';
// import AuthReducer from '../auth/authReducer';

const rootReducer = combineReducers({
   restaurante: Cabecalho,
});

export default rootReducer;