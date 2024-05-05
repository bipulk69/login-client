import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContinueButton = ({btnText}) => {
  return (
    <View style={{margin: 10}}>
      <Pressable
        style={{
          backgroundColor: '#004643',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
          {btnText}
        </Text>
      </Pressable>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({});
