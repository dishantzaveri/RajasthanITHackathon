import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
// import ButtonComponent from '../components/ButtonComponent.js';
// import {AuthContainer, useAuth} from '../../Auth';
import PasswordInputComponent from '../components/PasswordInputComponent.js';
import TextInputComponent from '../components/TextInputComponent.js';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  //const auth = useAuth();
  //const onLogin = (email, password) => auth.signIn(email, password);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.image} />
      <TextInputComponent
        marginTop={60}
        iconShape="mail"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="black"></TextInputComponent>
      <PasswordInputComponent
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholderTextColor="black"
      />
      {/* <TouchableOpacity onPress={() => {navigation.navigate('BottomTab')}}> */}
        {/* // onPress={() => {
        //   onLogin(email, password);
        // }} */}
      <View style={styles.button}>
        <Button
          onPress={() => {navigation.navigate('MainBottomTab')}}
          title="Login"
          color="#2F3A56"
          accessibilityLabel="Learn more about this purple button"
        /></View>
        {/* <Text style={styles.textStyle}>Login</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles.textStyle}>Signup</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    color: 'black',
    marginTop: 25,
    fontSize: 20,
  },
  image: {
    marginTop: 50,
    alignSelf: 'center',
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  button:{
    marginTop:30,
  }
});

export default LoginPage;
