import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function PensionLoan() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity >
      <View style={styles.container2}>
        <View style={styles.col}>
          <View>
            <Text style={styles.label}>Union Reverse Mortgage</Text>
            <View style={{width: 300}}>
              <Text style={styles.content}>
              To provide a source of regular income for senior citizens who own self occupied house property in India.
              </Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
      <View style={styles.container2}>
        <View style={styles.col}>
          <View>
            <Text style={styles.label}>Union Cash</Text>
            <View style={{width: 320}}>
              <Text style={styles.content}>
              Pensioners/family pensioner, who draw pension/family pension from our bank on account of superannuation/retirement/voluntary retirement/ ordinary family pension
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PensionLoan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    width: 340,
    height: 150,
    backgroundColor: '#FFF',
    marginLeft: 29,
    marginTop: 37,
    borderRadius: 8,
    elevation: 10,
    borderWidth:3,
    borderColor:"#E24748"
    
  },
  col: {
    flexDirection: 'row',
  },
  label: {
    color: '#000',
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
    marginLeft: 11,
    marginTop: 20,
  },
  content: {
    color: 'black',
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
