import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FlatListScreen from './components/FlatListScreen';
import listTodos from './Data/Data';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.viewMenu}>
          <Image
            style={{marginLeft: 10}}
            source={require('../../assets/image/sort.png')}
          />
          <Text style={styles.textIndex}>Index</Text>
          <Image source={require('../../assets/image/ava.png')} />
        </View>

        {typeof listTodos !== 'object' ? (
          <View style={styles.viewContent}>
            <Image source={require('../../assets/image/checklist1.png')} />
            <Text style={styles.textTitle}>What do you want to do today?</Text>
            <Text style={styles.textDesc}>Tap + to add your tasks</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.wrap}>
              <FlatListScreen />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  wrap: {
    flex: 1,
    marginHorizontal: 24,
  },
  viewMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    marginHorizontal: 24,
    marginTop: 13,
  },
  textIndex: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  viewContent: {
    marginTop: 75,
    alignItems: 'center',
    marginHorizontal: 52,
  },
  textTitle: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: 'rgba(255, 255, 255, 0.87)',
    marginVertical: 10,
  },
  textDesc: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  viewSearch: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderColor: '#979797',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSearch: {
    borderColor: 'blue',
    margin: 12,
  },
  inputSearch: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
});
export default HomeScreen;
