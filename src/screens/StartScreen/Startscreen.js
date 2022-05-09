import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Startscreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'angle-left'} style={styles.icon} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 52,
          }}>
          <Text
            style={{
              fontFamily: 'Lato-bold',
              fontSize: 32,
              color: 'rgba(255,255,255,0.87)',
            }}>
            Welcome to UpTodo
          </Text>
          <Text
            style={{
              marginTop: 26,
              fontFamily: 'Lato-Regular',
              fontSize: 16,
              color: 'rgba(255,255,255,0.67)',
              marginHorizontal: 44,
              textAlign: 'center',
            }}>
            Please login to your account or create new account to continue
          </Text>
        </View>
        <View style={{marginHorizontal: 24, marginBottom: 30}}>
          <View style={{}}>
            <TouchableOpacity
              style={{marginBottom: 30}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  borderRadius: 4,
                  backgroundColor: '#8875FF',
                  paddingTop: 12,
                  paddingBottom: 12,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Lato-Regular',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}>
              <Text
                style={{
                  borderRadius: 4,
                  paddingTop: 12,
                  paddingBottom: 12,
                  textAlign: 'center',
                  color: 'white',
                  borderWidth: 2,
                  borderColor: '#8e7cff',
                  fontSize: 16,
                  fontFamily: 'Lato-Regular',
                }}>
                CREATE ACCOUNT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  icon: {
    fontSize: 24,
    marginTop: 12,
    marginStart: 24,
    color: 'white',
  },
});
export default Startscreen;
