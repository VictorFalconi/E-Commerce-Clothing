import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { saveState } from './localStorage';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const newReducer = persistReducer(persistConfig, reducer);

export const store = createStore(newReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

store.subscribe(() => {
    saveState(store.getState());
});