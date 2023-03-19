import React from 'react'
import {
    View,
    Text,StyleSheet,Image
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResumeBuilder from '../components/ResumeBuilder';
import MyResume from '../components/MyResume';


const Tab = createMaterialTopTabNavigator();

export default function Resume() {
    const insets = useSafeAreaInsets();
    return (
         <SafeAreaView style={styles.container}>
            {/* <View></View> */}
            <Tab.Navigator
                initialRouteName="MyResume"
                screenOptions={{
                    activeTintColor: "#ABD0DA",
                    labelStyle: { fontSize: 11 },
                    style: { backgroundColor: "#ABD0DA", marginTop: insets.top },
                tabBarActiveTintColor: "#ABD0DA",
                tabBarInactiveTintColor: "#000000",
                tabBarShowLabel: true,
                
                tabBarLabelStyle: {
                  fontSize: 12,
                
                }
                }}
            >
                <Tab.Screen
                    name="ResumeBuilder"
                    component={ResumeBuilder}
                    options={{ tabBarLabel: "Resume Builder" }}
                />
                <Tab.Screen
                    name="MyResume"
                    component={MyResume}
                    options={{ tabBarLabel: "My Resume" }}
                />

            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
        color: '#000000',
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        left: 10,
    },
    title1: {
        fontSize: 13,
        textAlign: 'center',
        color: '#ABD0DA',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});
