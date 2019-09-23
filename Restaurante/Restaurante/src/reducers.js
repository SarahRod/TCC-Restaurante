import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    dashboard: () => ({produto: {nome:'testeRedux'}})
})

export default rootReducer;