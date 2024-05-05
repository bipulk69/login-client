import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingText from '../components/HeadingText';
import InputBox from '../components/InputBox';
import ContinueButton from '../components/ContinueButton';

const Signin = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <HeadingText text={'Signin to your account'} />
      <Text style={styles.txt}>Email</Text>
      <InputBox placeholder={'Enter your email'} />
      <Text style={styles.txt}>Password</Text>
      <InputBox placeholder={'Enter your password'} />
      <ContinueButton btnText={'Signin'} />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
