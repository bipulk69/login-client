import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeadingText from '../components/HeadingText';
import InputBox from '../components/InputBox';
import ContinueButton from '../components/ContinueButton';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <HeadingText text={'Sign in to your account'} />
      <Text style={styles.txt}>Email</Text>
      <InputBox placeholder={'Enter your email'} setValue={setEmail} />
      <Text style={styles.txt}>Password</Text>
      <InputBox placeholder={'Enter your password'} setValue={setPassword} />
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{textAlign: 'right', marginRight: 10}}>
          Forgot password
        </Text>
      </Pressable>
      <ContinueButton btnText={'Signin'} />

      <View>
        <Text>
          Didn't have an account ?
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={{marginLeft: 5}}>Signup</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    marginHorizontal: 10,
  },
});
