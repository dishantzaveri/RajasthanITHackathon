import React, { useEffect } from 'react';
import { StyleSheet, Text ,View,Image} from 'react-native';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SlidingUp')
    }, 2200);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/intro.json')}
        autoPlay={true}
        loop
        style={styles.lottieview}
      />

<Image source={require('../assets/logo.jpg')} style={styles.image} />
      </View>


  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor:'white'
  },
  lottieview: {
    height: 400,
    width: 300,
    marginTop: hp('10%'),
    alignSelf: 'center',
  },
    image: {
    marginTop: 50,
    alignSelf: 'center',
    height: 200,
    width: 210,
    resizeMode: 'contain',
  },
});