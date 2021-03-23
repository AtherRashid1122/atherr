import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Login = ({params, navigation}) => {
  return (
    <View style={styles.main}>
      <Text
        onPress={() => navigation.navigate('Registration')}
        style={styles.container}>
        Login
      </Text>
    </View>
  );
};
export default Login;
