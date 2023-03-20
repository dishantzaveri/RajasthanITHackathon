import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text,Image,Button} from 'react-native';
import ButtonComponent from '../components/ButtonComponent.js';
import PasswordInputComponent from '../components/PasswordInputComponent.js';
import TextInputComponent from '../components/TextInputComponent.js';
//import {AuthContainer, useAuth} from '../../Auth';
import LottieView from 'lottie-react-native';

// import { TouchableOpacity } from 'react-native-gesture-handler';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [pancard, setPancard] = useState('');

//   const auth = useAuth();
//   const onRegister = (name, contact, email, password) =>
//     auth.register(name, contact, email, password);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.image} />
      <TextInputComponent
        marginTop={10}
        iconShape="person"
        placeholder="Name"
        autoComplete="name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholderTextColor="black"
      />
      <TextInputComponent
        marginTop={25}
        iconShape="call"
        autoComplete="tel"
        keyboardType="number-pad"
        placeholder="Contact"
        value={contact}
        onChangeText={number => {
          setContact(number);
        }}
        placeholderTextColor="black"
      />
      <TextInputComponent
        marginTop={25}
        iconShape="card"
        placeholder="Pancard Number"
        autoComplete="name"
        value={pancard}
        onChangeText={text => {
          setPancard(text);
        }}
        placeholderTextColor="black"></TextInputComponent>
      <TextInputComponent
        marginTop={25}
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
      {/* <TouchableOpacity >
                <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity> */}
      <TouchableOpacity>
      <View style={styles.button}>
        <Button
          //onPress={}
          title="Sign-Up"
          color="#2F3A56"
          accessibilityLabel="Learn more about this purple button"
        /></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    marginTop: 25,
    fontSize:20,
  },
  image: {
    marginTop: 10,
    alignSelf: 'center',
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  button:{
    marginTop:30,
  }
});

export default SignUpPage;