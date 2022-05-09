import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = () => {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => {
            navigation.goBack('StartScreen');
          }}>
          <Icon name={'angle-left'} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headingRegister}>Register</Text>
        <View>
          <View>
            <Text style={styles.text}>Username</Text>
            <TextInput
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              style={styles.textInput}
              placeholder="Enter your username"
              placeholderTextColor="#535353"
              selectionColor={'#fff'}
            />
          </View>
          <View style={styles.viewWrap}>
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
          <View>
            <Text style={styles.text}>Confirm Password</Text>
            <TextInput
              onChangeText={confirmPass => setConfirmPass(confirmPass)}
              defaultValue={confirmPass}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Confirm your password"
              placeholderTextColor="#535353"
              selectionColor={'#fff'}
            />
          </View>
        </View>
        <View style={styles.viewAction}>
          <TouchableOpacity
            disabled={
              text !== '' && pass !== '' && confirmPass !== '' ? false : true
            }
            style={[
              text !== '' &&
              pass !== '' &&
              confirmPass !== '' &&
              pass === confirmPass
                ? styles.btnRegister
                : [styles.btnRegister, {backgroundColor: '#39395e'}],
            ]}>
            <Text
              style={[
                text !== '' &&
                pass !== '' &&
                confirmPass !== '' &&
                pass === confirmPass
                  ? styles.textRegister
                  : [styles.textRegister, {color: '#cccc'}],
                ,
              ]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 18,
              marginBottom: 24,
            }}>
            <View style={styles.viewLine} />
            <Text style={styles.or}>or</Text>
            <View style={styles.viewLine} />
          </View>
          <TouchableOpacity
            style={[
              styles.btnRegister,
              styles.btnNoBg,
              {marginTop: 0, marginBottom: 17, flexDirection: 'row'},
            ]}>
            <Image
              style={styles.img}
              source={require('../../assets/image/google.png')}
            />
            <Text style={[styles.text, {marginLeft: 0, marginBottom: 0}]}>
              Register with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnRegister,
              styles.btnNoBg,
              {flexDirection: 'row'},
            ]}>
            <Image
              style={styles.img}
              source={require('../../assets/image/apple.png')}
            />
            <Text style={[styles.text, {marginLeft: 0, marginBottom: 0}]}>
              Register with Apple
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.textAccount}>
            Already have an account?
            <Text style={styles.textLogin}> Login</Text>
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
  iconBack: {
    width: 24,
    height: 24,
    // backgroundColor: 'red',
    marginTop: 13,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  headingRegister: {
    fontSize: 32,
    fontFamily: 'Lato-Regular',
    color: '#fff',
    marginTop: 16,
    marginBottom: 23,
    fontWeight: '700',
    lineHeight: 38.4,
    opacity: 0.8,
  },
  viewWrap: {
    marginVertical: 25,
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
    color: '#fff',
    width: '100%',
    height: 48,
    borderColor: '#979797',
    backgroundColor: '#1D1D1D',
  },
  viewAction: {
    marginTop: 40,
  },
  btnRegister: {
    borderRadius: 4,
    width: '100%',
    height: 48,
    backgroundColor: '#8687e7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegister: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    lineHeight: 24,
  },
  viewLine: {
    flex: 1,
    borderWidth: 1,
    height: 1,
    borderColor: '#979797',
  },
  or: {
    color: '#979797',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
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
    textAlign: 'center',
  },
  textLogin: {
    color: '#FFF',
  },
});

export default RegisterScreen;
