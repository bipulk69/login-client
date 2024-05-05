import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadingText = ({text}) => {
  return (
    <View>
      <Text
        style={{
          color: '#004643',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({});
