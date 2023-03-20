import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Insurance() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Welcome to Samriddh Insurance !</Text>
      </View>
      <ScrollView horizontal={true}>
        <Image
          style={styles.main}
          source={require('../assets/insurance1.jpeg')}
        />
        <Image
          style={styles.main}
          source={require('../assets/insurance2.jpeg')}
        />
        <Image
          style={styles.main}
          source={require('../assets/insurance3.jpeg')}
        />
        <Image
          style={styles.main}
          source={require('../assets/insurance4.jpeg')}
        />
        <Image
          style={styles.main}
          source={require('../assets/insurance1.jpeg')}
        />
      </ScrollView>
      <View style={styles.container1}>
        <Text style={styles.header}>Services : </Text>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://uploads-ssl.webflow.com/5ca3ea782dc7ca33e2ba7218/5cb953b2adbd7d9ce6a6aa3a_Life%20Insruance.png',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Life Insurance</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.0yqbfegwJb51YVxaYiRO9gHaH6&pid=Api&P=0',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Health Insurance</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/insurance-97/284/Juridic___legal_insurance_private-512.png',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Juridic Insurance</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/real-estate-3/256/Home_Insurance-512.png',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Housing Insurance</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/vehicle-insurance/256/Car_Insurance-512.png',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Auto Insurance</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://tse2.mm.bing.net/th?id=OIP.39ctcY-vUqDh_ugGym0y7wHaHa&pid=Api&P=0',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Company Insurance</Text>
        </View>
      </View>
    </View>
  );
}

export default Insurance;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  main: {
    margin: 20,
    marginLeft: 15,
    height: 150,
    width: 200,
    resizeMode: 'contain',
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
  container2: {
    width: 110,
    height: 120,
    backgroundColor: '#FFFFFF',
    marginLeft: 25,
    borderRadius: 8,
    elevation: 10,
  },
  col: {
    flexDirection: 'row',
    marginTop: 50,
  },
  label: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 5,
  },
  image: {
    marginTop: 10,
    alignSelf: 'center',
    height: 63,
    width: 100,
    resizeMode: 'contain',
  },
});