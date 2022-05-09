import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  // View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'angle-left'} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.login}>Login</Text>
        <View>
          <View style={styles.wrap}>
            <Text style={styles.text}>Username</Text>
            <TextInput
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              style={styles.textInput}
              placeholder="Enter your username"
              placeholderTextColor="#535353"
              selectionColor={'#fff'}></TextInput>
          </View>
          <View>
            <Text style={styles.text}>Password</Text>
            <TextInput
              onChangeText={newPass => setPass(newPass)}
              defaultValue={pass}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#535353"
              selectionColor={'#fff'}></TextInput>
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            disabled={text !== '' && pass !== '' ? false : true}
            style={[
              text !== '' && pass !== ''
                ? styles.btnLogin
                : [styles.btnLogin, {backgroundColor: '#39395e'}],
            ]}
            onPress={() => {
              navigation.navigate('MainTabs', {
                username: text,
                password: pass,
              });
            }}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 30,
            }}>
            <View style={styles.viewLine} />
            <Text style={styles.or}>or</Text>
            <View style={styles.viewLine} />
          </View>
          <TouchableOpacity
            style={[
              styles.btnLogin,
              styles.btnNoBg,
              {marginTop: 0, marginBottom: 20, flexDirection: 'row'},
            ]}>
            <Image
              style={styles.img}
              source={require('../../assets/image/google.png')}
            />
            <Text style={[styles.text, {marginLeft: 0, marginBottom: 0}]}>
              Login with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnLogin, styles.btnNoBg, {flexDirection: 'row'}]}>
            <Image
              style={styles.img}
              source={require('../../assets/image/apple.png')}
            />
            <Text style={[styles.text, {marginLeft: 0, marginBottom: 0}]}>
              Login with Apple
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textAccount}>
            Don't have an account?
            <Text style={styles.textRegister}>{'  '} Register</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 24,
  },
  icon: {
    fontSize: 24,
    color: 'white',
    marginTop: 13,
  },
  login: {
    fontSize: 32,
    fontFamily: 'Lato-Regular',
    color: 'white',
    marginTop: 41,
    marginBottom: 53,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  wrap: {
    marginBottom: 25,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.87)',
    marginBottom: 8,
    fontWeight: '400',
    lineHeight: 24,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    color: 'white',
    width: '100%',
    height: 48,
    borderColor: '#979797',
    backgroundColor: '#1D1D1D',
  },
  action: {
    marginTop: 69,
  },
  btnLogin: {
    borderRadius: 4,
    width: '100%',
    height: 48,
    backgroundColor: '#8687e7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    lineHeight: 24,
  },
  viewLine: {flex: 1, borderWidth: 1, height: 1, borderColor: '#979797'},
  or: {
    color: '#979797',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    marginHorizontal: 2,
    fontWeight: '400',
    lineHeight: 24,
  },
  btnNoBg: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#8875FF',
  },
  img: {
    marginRight: 10,
  },
  textAccount: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#979797',
    marginTop: 20,
    textAlign: 'center',
  },
  textRegister: {
    color: '#FFF',
  },
});
export default Login;
