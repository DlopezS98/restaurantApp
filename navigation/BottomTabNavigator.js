import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import OfertsScreen from '../screens/Ofertas';
import ProfileScreen from '../screens/Perfil';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator tabBarOptions={{
      style:{
        backgroundColor: '#eee',
      },
      activeTintColor:'#F2A365',
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
  }
}
