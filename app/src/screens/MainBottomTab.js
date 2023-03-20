import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Loan from './Loan';
import Insurance from './Insurance';
import CibilScore from './CibilScore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Loan"
        component={Loan}
        options={{
          headerShown:false,
          tabBarLabel: 'Loan',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="handshake"
              color="#2F3A56"
              size={30}
            />
          ),
        }}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{
          headerShown:false,
          tabBarLabel: 'Insurance',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="file-document"
              color="#2F3A56"
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CibilScore"
        component={CibilScore}
        options={{
          headerShown:false,
          tabBarLabel: 'CibilScore',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="scoreboard-outline"
              color="#2F3A56"
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel: 'Activity',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="lightbulb-group"
              color="#2F3A56"
              size={30}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default MainBottomTab;