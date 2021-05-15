import React from 'react';
import {View, Text} from 'react-native';
import {sumFunction} from './utils/calculator';

const valueA = 5;
const valueB = 7;

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Simple Calculation</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>{valueA.toString() + ` + ` + valueB.toString()} = </Text>
        <Text> {sumFunction(valueA, valueB)}</Text>
      </View>
    </View>
  );
};

export default App;
