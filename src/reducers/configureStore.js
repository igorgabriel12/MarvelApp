import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {persistCombineReducers, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './modules';

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  blacklist: ['comics'],
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
const middleware = [thunk];

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configureStore;
