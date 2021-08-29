import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Welcome User</Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default Login;
