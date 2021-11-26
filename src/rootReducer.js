import { combineReducers } from 'redux';
import { reducer as currencySelectorReducer } from './containers/CurrencySelector';

export default combineReducers({
  currencySelectorReducer,
});
