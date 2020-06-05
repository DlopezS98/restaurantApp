import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './Security/Main';
import Registrer from './Security/Registrer';
import Login from './Security/Login';
import Index from './Index';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC4sSFNwENipmOvM_fgAeeB1MuRL4vEZpU",
  authDomain: "restaurantapp-75f11.firebaseapp.com",
  databaseURL: "https://restaurantapp-75f11.firebaseio.com",
  projectId: "restaurantapp-75f11",
  storageBucket: "restaurantapp-75f11.appspot.com",
  messagingSenderId: "162406145955",
  appId: "1:162406145955:web:577d4f5608b671fd310416",
  measurementId: "G-ELFVK5LMYR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* firebase.analytics(); */

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrer" component={Registrer} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
