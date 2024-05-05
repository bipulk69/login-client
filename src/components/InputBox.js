import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const InputBox = ({text, placeholder, setValue}) => {
  return (
    <View style={{margin: 10}}>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => setValue(text)}
        style={{
          borderWidth: 1,
          borderColor: '#c4c4c4',
          borderRadius: 8,
          padding: 10,
        }}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
