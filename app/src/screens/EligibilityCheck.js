import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Slider from '@react-native-community/slider';

// const [value, setValue] = useState(18);

function EligibilityCheck() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.header}>Instant Eligiblity Check</Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: 'black',
            marginTop: 20,
          }}>
          Select Employment Type
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={require('../assets/salarieduser.png')}
              style={styles.image}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'black',
                marginTop: 20,
              }}>
              Salaried
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/selfemployed.png')}
              style={styles.image}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'black',
                marginTop: 20,
              }}>
              Self Employed
            </Text>
          </View>
        </View>
        <View style={{...styles.inputContainer, marginTop: 25}}>
          <Ionicons
            name="mail"
            size={20}
            color="#393E46"
            style={{paddingLeft: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            autoComplete="name"
            placeholderTextColor="black"
          />
        </View>
        <View style={{...styles.inputContainer, marginTop: 25}}>
          <Ionicons
            name="mail"
            size={20}
            color="#393E46"
            style={{paddingLeft: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Pancard number"
            autoComplete="name"
            placeholderTextColor="black"
          />
        </View>
        <View style={{...styles.inputContainer, marginTop: 25}}>
          <Ionicons
            name="mail"
            size={20}
            color="#393E46"
            style={{paddingLeft: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Monthly Income"
            autoComplete="name"
            placeholderTextColor="black"
          />
        </View>
        {/* <View style={{marginTop: 40}}>
          <Text style={styles.label}>ENTER YOUR AGE : {value}</Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={100}
            value={value}
            onValueChange={slideValue => setValue(slideValue)}
            minimumTrackTintColor="#FB008B"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FB008B"
          />
        </View> */}
      </View>
    </ScrollView>
  );
}

export default EligibilityCheck;
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
    paddingTop: 10,
  },
  appbar: {
    backgroundColor: '#E24748',
    elevation: 25,
  },
  image: {
    margin: 22,
    alignSelf: 'center',
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: wp('65%'),
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    marginTop: 20,
  },

  textInput: {
    marginLeft: 5,
    backgroundColor: 'white',
    fontSize: 15,
    color: 'black',
    paddingLeft: 10,
    fontWeight: '600',
  },
});
