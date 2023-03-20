import React from 'react';
import { View, Animated, Dimensions, Platform, StyleSheet, Text, Button, TouchableOpacity, TextInput, Image, ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import plus from '../assets/plus.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRef } from 'react';
import Loan from './Loan';
import Insurance from './Insurance';
import CibilScore from './CibilScore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainBottomTab2 = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  console.disableYellowBox = true;
  return (
  
      <Tab.Navigator independent={true}
        screenOptions={{
          tabBarActiveBackgroundColor: "#FFFFFF",
          tabBarInactiveBackgroundColor: "#FFFFFF",
          showLabel: false,
          style: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 50,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10
            },
            paddingHorizontal: 0,
          }

        }}
      >
        <Tab.Screen
        name="Loan"
        component={Loan}
        options={{
          headerShown:false,
          tabBarLabel: 'Loan',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="handshake"
              color="#ABD0DA"
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
              color="#ABD0DA"
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
              color="#ABD0DA"
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
              color="#ABD0DA"
              size={30}
            />
          ),
        }}
      />

      
      </Tab.Navigator>

  );
};

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MainBottomTab2;