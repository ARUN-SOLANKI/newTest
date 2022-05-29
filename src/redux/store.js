import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducers';
import persistStore from 'redux-persist/lib/persistStore';

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
