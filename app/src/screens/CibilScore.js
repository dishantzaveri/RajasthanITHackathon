import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AwesomeAlert from 'react-native-awesome-alerts';



function CibilScore() {


  const [age, setAge] = useState('');
  const [AnnualIncome, setAnnualIncome] = useState('');
  const [MonthlySalary, setMonthlySalary] = useState('');
  const [bankAcc, setbankAcc] = useState('');
  const [creditCards, setcreditCards] = useState('');
  const [NumberLoans, setNumberLoans] = useState('');
  const [alert, setAlert] = useState(false);
  const [cibil, setCibil] = useState(0);






  const bhejbhai = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "data": [
        {
          "Age": age,
          "Annual_Income": AnnualIncome,
          "Monthly_Inhand_Salary": MonthlySalary,
          "Num_Bank_Accounts": bankAcc,
          "Num_Credit_Card": creditCards,
          "Interest_Rate": 6,
          "Num_of_Loan": NumberLoans,
          "Delay_from_due_date": 6,
          "Num_of_Delayed_Payment": 1,
          "Changed_Credit_Limit": 181,
          "Num_Credit_Inquiries": 110,
          "Credit_Mix": 2,
          "Outstanding_Debt": 1000,
          "Credit_Utilization_Ratio": 35,
          "Credit_History_Age": 255,
          "Total_EMI_per_month": 55,
          "Amount_invested_monthly": 240,
          "Monthly_Balance": 186,
          "Credit_Score": 1,
          "Credit-Builder Loan": 1,
          "Personal_Loan": 1,
          "Debt Consolidation Loan": 0,
          "Student Loan": 0,
          "Payday Loan": 0,
          "Mortgage Loan": 0,
          "Auto Loan": 0,
          "Home Equity Loan": 0,
          "Month_August": 0,
          "Month_February": 0,
          "Month_January": 1,
          "Month_July": 0,
          "Month_June": 0,
          "Month_March": 0,
          "Month_May": 0,
          "Occupation_Architect": 0,
          "Occupation_Developer": 0,
          "Occupation_Doctor": 1,
          "Occupation_Engineer": 0,
          "Occupation_Entrepreneur": 0,
          "Occupation_Journalist": 0,
          "Occupation_Lawyer": 0,
          "Occupation_Manager": 0,
          "Occupation_Mechanic": 0,
          "Occupation_Media_Manager": 0,
          "Occupation_Musician": 0,
          "Occupation_Scientist": 0,
          "Occupation_Teacher": 0,
          "Occupation_Writer": 0,
          "Payment_of_Min_Amount_Yes": 0,
          "Payment_Behaviour_High_spent_Medium_value_payments": 0,
          "Payment_Behaviour_High_spent_Small_value_payments": 0,
          "Payment_Behaviour_Low_spent_Large_value_payments": 0,
          "Payment_Behaviour_Low_spent_Medium_value_payments": 0,
          "Payment_Behaviour_Low_spent_Small_value_payments": 1
        }
      ]
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://2d2b-117-250-3-86.in.ngrok.io/cibil/score/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result.data))
      .then(result => setCibil(result.data))

      .catch(error => console.log('error', error));

  }
  return (
    // <ScrollView>
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
          <TouchableOpacity onPress={bhejbhai} 
            style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                fontWeight: '500',
                marginTop: 9,
              }}>
             Your score is 550
            </Text>
          </TouchableOpacity>
        </View>

        {/* <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
          /> */}
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
    height: hp('95%'),
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
  button1: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});