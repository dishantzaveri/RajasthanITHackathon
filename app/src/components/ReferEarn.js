import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import coin from '../assets/coin.png';
import { height, width } from '../Consts';

const ReferEarn = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20, alignItems: 'center' }}>

                <Text style={styles.title}>Refer our app to your friends and earn exciting rewards</Text>
                <Button style={{ backgroundColor: '#ABD0DA', borderColor: '#ABD0DA', margin: 5, borderRadius: 5, width: width * 0.3 }} labelStyle={{ color: 'white', fontSize: 10 }} >Refer now</Button>
                <Text style={styles.title1}>Available on</Text>
            </View>
            <View style={{ margin: 20, alignItems: 'center', borderTopColor: '#000000', borderTopWidth: 1 }}>

                <Text style={styles.title}>Refer a suitable mentor to an entrepreneur and earn exciting rewards</Text>
                <Button style={{ backgroundColor: '#ABD0DA', borderColor: '#ABD0DA', margin: 5, borderRadius: 5, width: width * 0.3 }} labelStyle={{ color: 'white', fontSize: 10 }} >Refer now</Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        color: '#000000',
    },
    title1: {
        fontSize: 13,
        textAlign: 'center',
        color: '#000000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
});


export default ReferEarn;
