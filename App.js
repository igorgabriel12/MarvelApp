import React from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import configureStore from './src/reducers/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const {persistor, store} = configureStore();

  return (
    <SafeAreaProvider>
      <StatusBar translucent style={'light'} backgroundColor="transparent" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
