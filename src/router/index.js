import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ContactDetail, Home, MyProfileDetail, Splash} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyProfileDetail"
        component={MyProfileDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
