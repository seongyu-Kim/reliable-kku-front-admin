import React, {useEffect, useState} from 'react';
import * as styles from './Login.styles';
import CheckBox from '@react-native-community/checkbox';
import AdminId from '../../assets/images/adminID.svg';
import AdminPassword from '../../assets/images/adminPassword.svg';
import Margin from '../../components/common/margin/Margin';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {BASE_API} from '../../api/CommonApi';
import {MMKVLoader} from 'react-native-mmkv-storage';
const MMKV = new MMKVLoader().initialize();

const Login: React.FC<{}> = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const autoLogin = await MMKV.getBoolAsync('autoLogin');
        const savedAutoLogin: boolean = autoLogin ? autoLogin : false;
        setAutoLogin(savedAutoLogin);

        if (savedAutoLogin) {
          const savedUsername: string | null | undefined =
            await MMKV.getStringAsync('username');
          const savedPassword: string | null | undefined =
            await MMKV.getStringAsync('password');
          if (savedUsername && savedPassword) {
            await handleLogin(savedUsername, savedPassword);
          }
        }
      } catch (e) {
        console.error('Error reading data from MMKVStorage:', e);
      }
    };

    getData();
  }, []);

  const handleLogin = async (savedUsername: string, savedPassword: string) => {
    try {
      await BASE_API.post('https://dev.deunku.com/api/v1/auth/admin/login', {
        username: savedUsername,
        password: savedPassword,
      }).then(res => {
        console.log('authorization', res.headers.authorization);
        MMKV.setStringAsync('accessToken', res.headers.authorization);
      });

      if (autoLogin) {
        MMKV.setBool('autoLogin', true);
        MMKV.setString('username', savedUsername);
        MMKV.setString('password', savedPassword);
      } else {
        MMKV.setBool('autoLogin', false);
        MMKV.removeItem('username');
        MMKV.removeItem('password');
      }

      navigation.navigate('MainScreen');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <styles.Container>
      <Margin height={257} />

      <styles.InputView>
        <styles.InputText
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <styles.InputImg>
          <AdminId width={30} height={30} />
        </styles.InputImg>
      </styles.InputView>

      <Margin height={13} />

      <styles.InputView>
        <styles.InputText
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <styles.InputImg>
          <AdminPassword width={30} height={30} />
        </styles.InputImg>
      </styles.InputView>

      <Margin height={39} />

      <styles.AutoLoginView>
        <CheckBox
          disabled={false}
          lineWidth={3}
          boxType="square"
          tintColor="black"
          onCheckColor="black"
          onTintColor="black"
          animationDuration={0.2}
          value={autoLogin} // 자동 로그인 상태를 CheckBox에 반영
          onValueChange={newValue => setAutoLogin(newValue)} // CheckBox 상태 변경 시 상태 업데이트
        />
        <styles.AutoLoginText>자동로그인</styles.AutoLoginText>
      </styles.AutoLoginView>

      <Margin height={28} />

      <styles.LoginBtn onPress={() => handleLogin(username, password)}>
        <styles.LoginBtnText>Login</styles.LoginBtnText>
      </styles.LoginBtn>
    </styles.Container>
  );
};

export default Login;
