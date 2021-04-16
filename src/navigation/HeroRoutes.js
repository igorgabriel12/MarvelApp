import React, {useLayoutEffect, useState} from 'react';

import _ from 'lodash';
import Onboarding from '../screens/Onboarding';
import HeroeDetails from '../screens/HeroeDetails';
import MyFavoriteHeroeDetails from '../screens/MyFavoriteHeroeDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const AuthRoutes = ({}) => {
  const Stack = createSharedElementStackNavigator();
  const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({current: {progress}}) => {
      return {
        cardStyle: {
          opacity: progress,
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode={'card'}
        headerMode="screen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        initialRouteName={'Onboarding'}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={() => options}
        />
        <Stack.Screen
          options={() => options}
          name="MyFavoriteHeroeDetails"
          component={MyFavoriteHeroeDetails}
        />
        <Stack.Screen
          name="HeroeDetails"
          options={() => options}
          component={HeroeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
