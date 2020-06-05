import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OfertsScreen from '../screens/Ofertas';
import ProfileScreen from '../screens/Perfil';
import OrderScreen from '../screens/Ordenes';
import Colors from '../constants/Colors';
import ModalScreen from '../screens/Modal';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerStyle:{backgroundColor:'#fff'}, headerTintColor:'#282828' });

  return (
    <BottomTab.Navigator tabBarOptions={{
      style:{
        backgroundColor: '#eee',
      },
      activeTintColor:'#30475E',
      keyboardHidesTabBar:true,

    }} initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Tienda',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="isv" />,
        }}
      />
      <BottomTab.Screen
        name="Oferts"
        component={OfertsScreen}
        options={{
          title: 'Ofertas',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="tags" />,
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          title: 'Orden',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="shoppingcart" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="profile" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'MENU';
    case 'Oferts':
      return 'OFERTAS';
    case 'Profile':
      return 'PERFIL'
    case 'Order':
      return 'MIS ORDENES'
  }
}
