import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet,ScrollView, } from 'react-native';
import { DataTable } from 'react-native-paper';

function EducationLoan() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Welcome user !</Text>
      </View>
      <View  style={styles.table}>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Scheme Name</DataTable.Title>
        <DataTable.Title>Link</DataTable.Title>
        {/* <DataTable.Title numeric>Age</DataTable.Title> */}
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Baroda Scholar Loan Scheme</DataTable.Cell>
        <DataTable.Cell>https://bit.ly/BarodaScholarLoanScheme</DataTable.Cell>
        {/* <DataTable.Cell numeric>33</DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Vidhya Jyoti</DataTable.Cell>
        <DataTable.Cell>https://bit.ly/VidhyaJyoti</DataTable.Cell>
        {/* <DataTable.Cell numeric>105</DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Cent Vidyarthi</DataTable.Cell>
        <DataTable.Cell>https://bit.ly/CentVidyarthi</DataTable.Cell>
        {/* <DataTable.Cell numeric>23</DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Baroda Scholar Loan Scheme</DataTable.Cell>
        <DataTable.Cell>https://bit.ly/BarodaScholarLoanScheme</DataTable.Cell>
        {/* <DataTable.Cell numeric>33</DataTable.Cell> */}
      </DataTable.Row>

    </DataTable>
    </View>
  </View>
  )
}

export default EducationLoan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  table:{
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  container1: {
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginTop: 40,
  },
  header: {
    color: '#E24748',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Source Sans Pro',
  },
});