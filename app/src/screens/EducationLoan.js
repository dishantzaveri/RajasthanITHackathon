import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet,ScrollView, } from 'react-native';

function EducationLoan() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.header}>Educational Loan</Text>
        </View>
        </View>
        </ScrollView>
  )
}

export default EducationLoan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    paddingTop: 10
  },
  appbar:{
    backgroundColor:'#E24748',
    elevation:25
  }
});