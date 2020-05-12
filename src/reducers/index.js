import { combineReducers } from 'redux';

// Importa os estados de cada reducer separadamente
import {appReducer} from './app';
import {productsReducer} from "./products";

// unifica todas as stores em uma única store global
const rootReducer = combineReducers({
  appInfo: appReducer,
  appProducts: productsReducer,
});

export default rootReducer;
