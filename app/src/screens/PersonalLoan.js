import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const PersonalLoan = () => {

    const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Welcome user !</Text>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/home.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>HOME LOAN</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/marriage.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>MARRIAGE LOAN</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/medical.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>MEDICAL LOAN</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => {navigation.navigate('PensionLoan')}}>
            <Image
              source={require('../assets/pension.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>PENSION LOAN</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/vacation.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>VACATION LOAN</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/travel.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>TRAVEL LOAN</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/short.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>SHORT TERM LOAN</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/electronics.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>ELECTRONICS LOAN</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/car.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>CAR LOAN</Text>
        </View>
      </View>
      <View style={{width:200, alignSelf:'center',marginTop:50}}>
      <Button
          onPress={() => {navigation.navigate('EligibilityCheck')}}
          title="Instant Eligibility Check"
          color="#E24748"
          accessibilityLabel="Learn more about this purple button"
        /></View>
    </View>
  );
};

export default PersonalLoan;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginTop: 40,
  },
  container2: {
    width: 100,
    height: 120,
    backgroundColor: '#FFFFFF',
    marginLeft: 23,
    marginTop: 10,
    borderRadius: 8,
    elevation: 10
  },
  col: {
    flexDirection: 'row',
    marginTop: 50,
  },
  header: {
    color: '#E24748',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Source Sans Pro',
  },
  header1: {
    color: '#E24748',
    fontWeight: 'bold',
    fontSize: 17,
    opacity: 0.5,
    fontFamily: 'Source Sans Pro',
  },
  label: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 5,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: 50,
    marginTop: 15,
    alignSelf: 'center',
  },
  image: {
    marginTop: 10,
    alignSelf: 'center',
    height: 63,
    width: 100,
    resizeMode: 'contain',
  },
 
});