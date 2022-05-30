import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigations/BottomTabs';

import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BottomTabs />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
