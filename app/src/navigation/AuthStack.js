import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../OnBoarding/Login';
import Login1 from '../OnBoarding/Login1';
import SignUp1 from '../OnBoarding/SignUp1';
import {Jobs, JobSeekers} from '../pages';
import SwiperScreens from '../OnBoarding/SwiperScreens';
import SignUpMentor from '../OnBoarding/SignUpMentor';
import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import Onboarding4 from '../pages/Onboarding4';
import Onboarding5 from '../pages/Onboarding5';
import Profile1 from '../components/Profile/Profile1';
import Profile2 from '../components/Profile/Profile2';
import AddStartups from '../components/Profile/AddStartups';
import LocationTracer from '../pages/LocationTracer';
import SlidingUp from '../screens/SlidingUp';
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import Splash from '../screens/Splash';
import Loan from '../screens/Loan';
import Insurance from '../screens/Insurance';
import CibilScore from '../screens/CibilScore';
import Activity from '../screens/Activity';
import PersonalLoan from '../screens/PersonalLoan';
import PensionLoan from '../screens/PensionLoan';
import EligibilityCheck from '../screens/EligibilityCheck';
import Home from '../screens/Home';
import Details from '../screens/Details';
import MainBottomTab from '../screens/MainBottomTab';

const Stack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen
        name="Onboarding1"
        component={Onboarding1}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding2"
        component={Onboarding2}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding3"
        component={Onboarding3}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding4"
        component={Onboarding4}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding5"
        component={Onboarding5}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Profile1"
        component={Profile1}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Profile2"
        component={Profile2}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="AddStartUp"
        component={AddStartups}
        screenOptions={{headerShown: false}}
      />
    </OnboardingStack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Stack.Screen name="SwiperScreens" component={SwiperScreens} />
      <Stack.Screen
          name="SlidingUp"
          component={SlidingUp}
          options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="SignUp"
        component={SignUpMentor}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Login1"
        component={Login1}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="SignUp1"
        component={SignUp1}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}></Stack.Screen>
           <Stack.Screen
        name="LocationTracer"
        component={LocationTracer}
        options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Loginpage"
          component={LoginPage}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="MainBottomTab"
          component={MainBottomTab}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Loan"
          component={Loan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Insurance"
          component={Insurance}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen
          name="CibilScore"
          component={CibilScore}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen
          name="PersonalLoan"
          component={PersonalLoan}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen
          name="PensionLoan"
          component={PensionLoan}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen
          name="EligibilityCheck"
          component={EligibilityCheck}
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>

    </Stack.Navigator>
  );
};

export default AuthStack;
