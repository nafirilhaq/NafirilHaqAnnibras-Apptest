import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Router;
