import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar2 from './SearchBar2';
import addTestIdentifiers from '../utils/addTestIdentifiers';

export default function StockView(props) {
	return (
		<View>
			<Text 
        {...addTestIdentifiers('stockNameText')}
        style={[styles.mediumText, styles.textStyle]}>
          {props.stockName}
      </Text>
			<Text
        {...addTestIdentifiers('stockPriceText')} 
        style={[styles.largeText, styles.textStyle]}>
          {props.stockPrice}
      </Text>
			<View style={[styles.rectangleShapeContainer, props.changeType === "+" ? styles.positiveChange : styles.negativeChange]}>
				<Text
          {...addTestIdentifiers('stockChangeValueText')}  
          style={[styles.smallText, styles.textStyle]}>
            {props.changeValue}
        </Text>
			</View>
			<SearchBar2 
				placeholderTextInputLabelText="Search (e.g. AAPL)" 
				onSubmit={props.onSubmit}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'AvenirNext-Regular',
    textAlign: 'center',
    color: 'white',
  },
  largeText: {
    fontSize: 45,
  },
  mediumText: {
    fontSize: 35,
  },
  smallText: {
    fontSize: 25,
  },
  rectangleShapeContainer: {
    marginTop: 5,
    marginHorizontal: 160,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  positiveChange: {
    backgroundColor: 'green',
  },
  negativeChange: {
    backgroundColor: 'red',
  },
});