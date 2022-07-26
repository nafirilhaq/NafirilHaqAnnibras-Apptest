import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ContactDetail,
  Home,
  MyProfileDetail,
  SearchContact,
  Splash,
  UpdateContact,
} from '../pages';
import AddContact from '../pages/AddContact';

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
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateContact"
        component={UpdateContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
