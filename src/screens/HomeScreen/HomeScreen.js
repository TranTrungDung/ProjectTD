import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const listTodos = [
  {
    id: 1,
    title: 'Do Math Homework',
    time: 'Today At 16:45',
    doFor: 'University',
    icon: require('../../assets/image/flag.png'),
  },
  {
    id: 2,
    title: 'Tack out dogs',
    time: 'Today At 18:20',
    doFor: 'Home',
    icon: require('../../assets/image/flag.png'),
  },
  {
    id: 3,
    title: 'Business meeting with CEO',
    time: 'Today At 08:15',
    doFor: 'Work',
    icon: require('../../assets/image/flag.png'),
  },
];
const HomeScreen = () => {
  const [exist, setExist] = useState(listTodos);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'gray',
          width: '100%',
          height: 72,
          marginBottom: 16,
          borderRadius: 4,
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              paddingTop: 12,
              paddingLeft: 10,
              fontSize: 16,
              lineHeight: 21,
              fontWeight: '400',
              fontFamily: 'Lato-Regular',
              color: '#FFF',
            }}>
            {item.title}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 14,
                lineHeight: 21,
                fontWeight: '400',
                fontFamily: 'Lato-Regular',
                color: '#AFAFAF',
              }}>
              {item.time}
              {/* {index} */}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'orange',
                width: 42,
                height: 29,
                marginRight: 12,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Regular',
                  fontSize: 12,
                  lineHeight: 21,
                  fontWeight: '400',
                  color: '#FFF',
                  textAlign: 'center',
                }}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={item => {
                getIndex(item);
              }}
              style={{
                borderRadius: 4,
                backgroundColor: 'pink',
                width: 42,
                height: 29,
                marginRight: 10,
              }}>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const getIndex = useCallback(item => {
    console.log(item.id);
  }, []);

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

        {typeof exist !== 'object' ? (
          <View style={styles.viewContent}>
            <Image source={require('../../assets/image/checklist1.png')} />
            <Text style={styles.textTitle}>What do you want to do today?</Text>
            <Text style={styles.textDesc}>Tap + to add your tasks</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.wrap}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  paddingBottom: 20,
                }}>
                <View style={styles.viewSearch}>
                  <Image
                    source={require('../../assets/image/search-normal.png')}
                    style={styles.imgSearch}
                  />
                  <TextInput
                    placeholder="Search for your task..."
                    placeholderTextColor="#AFAFAF"
                    selectionColor={'#fff'}
                    style={styles.inputSearch}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#8687E7',
                      borderRadius: 4,
                      width: 50,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('../../assets/image/add.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <FlatList
                  data={listTodos}
                  renderItem={renderItem}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
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
    // marginBottom: 20,
    // marginTop: 16,
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
