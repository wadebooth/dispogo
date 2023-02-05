import * as React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from '../screens/Home'
import StrainList from './Strainlist'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

const Tab = createMaterialBottomTabNavigator()

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#e91e63'
      style={{ backgroundColor: 'green' }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Strains'
        component={StrainList}
        options={{
          tabBarLabel: 'Strains',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cannabis' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cog-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabBar
