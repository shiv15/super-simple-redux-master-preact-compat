import { createStore } from 'redux';
import rootReducer from './reducers';

export const storeGlobal = () => {
  return createStore(rootReducer);
}
