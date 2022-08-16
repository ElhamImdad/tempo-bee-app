import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { MaterialCommunityIcons } from '../Icons/Icons';
import Icon from '../Icons';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme].tint,
      headerShown: false,
    }}
    >
      <Tab.Screen name="home" component={Home}
      options={{
        tabBarLabel: 'الرئيسية',
        tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
      }} />
      <Tab.Screen name="myOrdered" component={Profile} 
      options={{
        title: 'طلباتي',
        tabBarIcon: ({ color }) => <Icon name="notebook-edit-outline" color={color} />,
      }}/>
      <Tab.Screen name="delivery" component={Profile}
      options={{
        title: 'توصيل',
        tabBarIcon: ({ color }) => <Icon name="car" color={color} />,
      }} />
      <Tab.Screen name="profile" component={Profile} 
      options={{
        title: 'حسابي',
        tabBarIcon: ({ color }) => <Icon name="face-woman-profile" color={color} />,
      }}/>
    </Tab.Navigator>
  )
}

// function TabBarIcon(props) {
//   return <MaterialCommunityIcons size={26} style={{ marginBottom: -3 }} {...props} />;
// }