import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Loan() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.image} />
      <TouchableOpacity onPress={() => {navigation.navigate('PersonalLoan')}}>
      <View style={styles.container2}>
        <View style={styles.col}>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../assets/personal.png')}
                style={styles.image1}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Personal Loan</Text>
            <View style={{width: 220}}>
              <Text style={styles.content}>
                Get the funds you need, when you need them, with a flexible and
                convenient personal loan.
              </Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
      <View style={styles.container2}>
        <View style={styles.col}>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../assets/education.png')}
                style={styles.image1}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Educational Loan</Text>
            <View style={{width: 220}}>
              <Text style={styles.content}>
                Invest in your future with an educational loan and achieve your
                academic dreams without worrying about finances.
              </Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
      <View style={styles.container2}>
        <View style={styles.col}>
          <View>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
              <Image
                source={require('../assets/business.png')}
                style={styles.image1}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Business Loan</Text>
            <View style={{width: 220}}>
              <Text style={styles.content}>
                Fuel your business growth with a tailored loan solution and take
                your venture to new heights of success.
              </Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

export default Loan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    width: 370,
    height: 150,
    backgroundColor: '#E24748',
    marginLeft: 29,
    marginTop: 37,
    borderRadius: 8,
    elevation: 10,
  },
  col: {
    flexDirection: 'row',
  },
  label: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
    marginLeft: 11,
    marginTop: 20,
  },
  content: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
    marginLeft: 11,
    marginTop: 5,
  },
  image: {
    marginTop: 30,
    alignSelf: 'center',
    height: 110,
    width: 210,
    resizeMode: 'contain',
  },
  image1: {
    marginTop: 30,
    height: 100,
    width: 120,
    resizeMode: 'contain',
  },
});
