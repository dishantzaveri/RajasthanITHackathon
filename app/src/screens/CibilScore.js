import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ToastAndroid,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



function CibilScore() {


  const [age, setAge] = useState('');
  const [AnnualIncome, setAnnualIncome] = useState('');
  const [MonthlySalary, setMonthlySalary] = useState('');
  const [bankAcc, setbankAcc] = useState('');
  const [creditCards, setcreditCards] = useState('');
  const [NumberLoans, setNumberLoans] = useState('');

  const bhejbhai = () => {
    var formdata = new FormData();
    formdata.append("Age", age);
    formdata.append("Annual_Income", AnnualIncome);
    formdata.append("Monthly_Inhand_Salary", MonthlySalary);
    formdata.append("Num_Bank_Accounts", bankAcc);
    formdata.append("Num_Credit_Card", creditCards);
    formdata.append("Num_of_Loan", NumberLoans);



    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://2d2b-117-250-3-86.in.ngrok.io/cibil/score/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#E24748', '#F57960']} style={styles.container1}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 40,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#F57960',
          }}>
          Cibil Score Simulator
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.header}>Age : </Text>
          <TextInput
            style={styles.display}
            placeholder="Age"
            keyboardType="default"
            placeholderTextColor="gray"
            value={age}
            onChangeText={text => setAge(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>Annual Income : </Text>
          <TextInput
            style={styles.display}
            placeholder="Annual Income"
            keyboardType="email-address"
            placeholderTextColor="gray"
            value={AnnualIncome}
            onChangeText={text => setAnnualIncome(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>Monthly In-hand Salary :</Text>
          <TextInput
            style={styles.display}
            placeholder="Monthly In-hand Salary"
            placeholderTextColor="gray"
            value={MonthlySalary}
            onChangeText={text => setMonthlySalary(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>No of Bank Accounts :</Text>
          <TextInput
            style={styles.display}
            placeholder="No of Bank Accounts "
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={bankAcc}
            onChangeText={text => setbankAcc(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>No of Credit Cards :</Text>
          <TextInput
            style={styles.display}
            placeholder="No of Credit Cards"
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={creditCards}
            onChangeText={text => setcreditCards(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>No of Loans :</Text>
          <TextInput
            style={styles.display}
            placeholder="No of Loans"
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={NumberLoans}
            onChangeText={text => setNumberLoans(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ ...styles.button, backgroundColor: '#F57960' }}>
          <TouchableOpacity onPress={bhejbhai}
            style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                fontWeight: '500',
                marginTop: 9,
              }}>
              Generate Cibil Score
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default CibilScore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD0DA',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: 'white',
    height: hp('75%'),
    width: wp('83%'),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 30,
  },
  linearGradient: {
    height: 200,
  },
  display: {
    color: '#1F4068',
    textAlign: 'left',
    borderWidth: 2,
    paddingTop: 10,
    paddingLeft: 20,
    margin: 10,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#E9E9E9',
    borderColor: '#E9E9E9',
  },
  header: {
    marginLeft: 15,
    color: 'black',
  },
  submit: {
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginTop: 20,
    width: wp('60%'),
    height: 45,
    borderRadius: 50,
    alignSelf: 'center',
  },
});