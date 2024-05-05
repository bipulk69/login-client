import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeadingText from '../components/HeadingText';
import InputBox from '../components/InputBox';
import ContinueButton from '../components/ContinueButton';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <HeadingText text={'Sign up to your account'} />
      <Text style={styles.txt}>Email</Text>
      <InputBox placeholder={'Enter your email'} setValue={setEmail} />
      <Text style={styles.txt}>Mobile number</Text>
      <InputBox placeholder={'Enter your mobile'} setValue={setMobile} />
      <Text style={styles.txt}>Password</Text>
      <InputBox placeholder={'Enter your password'} setValue={setPassword} />
      <Text style={styles.txt}>Confirm Password</Text>
      <InputBox placeholder={'Confirm your password'} setValue={setPassword} />

      <ContinueButton btnText={'Signup'} />

      <View>
        <Text>
          Already have an account ?
          <Pressable onPress={() => navigation.navigate('Signin')}>
            <Text style={{marginLeft: 5}}>Signin</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    marginHorizontal: 10,
  },
});
