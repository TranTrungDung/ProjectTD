import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import listTodos from '../Data/Data';

const FlatListScreen = () => {
  const [listTodo, setListTodo] = useState(listTodos);
  const [listTodo1, setListTodo1] = useState(listTodos);

  const [value, setValue] = useState('');
  const [desc, setDesc] = useState('');
  const [updateDesc, setUpdateDesc] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [getIndex, setGetIndex] = useState();
  const [searchItem, setSearchItem] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.viewItem}>
        <View style={styles.viewMain}>
          <Text style={styles.textTitleMain}>{item.title}</Text>
        </View>
        <View style={styles.viewDesc}>
          <View style={styles.viewMain}>
            <Text style={styles.textTime}>{item.time}</Text>
          </View>
          <View style={styles.viewAction}>
            <TouchableOpacity
              onPress={() => {
                handleGetIndex(index);
              }}
              style={styles.touchWorkFor}>
              <Text style={styles.textWork}>abc</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemoveItem(index)}
              style={[styles.touchWorkFor, {backgroundColor: 'pink'}]}>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const handleSearchItem = newText1 => {
    // const newList = listTodo.find(data => data.title === newText1);
    // console.log(newList);
    // return newList;
    setSearchItem(newText1);
    console.log(searchItem);
    // const newList = [...listTodo]
    // const newList1 = listTodo.filter(x => x.title === newText1);
    // console.log(newList1);
    //return searchItem
    const newList1 = listTodo.filter(x => {
      const itemData = x.title.toUpperCase();
      const textData = String(searchItem).toLocaleUpperCase();
      // console.log('A:', new, 'B:', searchItem);
      return itemData.indexOf(textData) > -1;
    });
    setListTodo(newList1);
    console.log(listTodos);
    searchItem === '' ? setListTodo(listTodos) : newList1;
    // return searchItem ? newList1 : setListTodo(listTodos);
    // : listTodos
  };

  const handleGetIndex = useCallback(i => {
    setModalUpdate(true);
    setGetIndex(i);
  }, []);

  const handleUpdateItem = () => {
    setModalUpdate(false);
    const newList = [...listTodo];
    newList[getIndex] = {id: Date.now(), title: updateValue, time: updateDesc};
    setListTodo(newList);
  };
  const handleAddItem = useCallback(() => {
    const newList = [...listTodo];
    newList.push({id: Date.now(), title: desc, time: value});
    setListTodo(newList);
  }, []);

  const handleRemoveModal = useCallback(() => {
    setModalVisible(!modalVisible);
    handleAddItem();
  }, []);

  const handleRemoveItem = useCallback(i => {
    const newList = [...listTodo];
    newList.splice(i, 1);
    setListTodo(newList);
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 16,
          paddingBottom: 20,
        }}>
        <View style={styles.viewSearch}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/image/search-normal.png')}
              style={styles.imgSearch}
            />
          </TouchableOpacity>
          <TextInput
            onChangeText={newText1 => handleSearchItem(newText1)}
            // value={searchItem}
            placeholder="Search for your task..."
            placeholderTextColor="#AFAFAF"
            selectionColor={'#fff'}
            style={styles.inputSearch}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={{
              backgroundColor: '#8687E7',
              borderRadius: 4,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../../../assets/image/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginBottom: 14,
                color: '#fff',
              }}>
              Add Task
            </Text>
            <TextInput
              onChangeText={newDesc => {
                setDesc(newDesc);
              }}
              value={desc}
              selectionColor={'#fff'}
              placeholder=""
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                width: '100%',
                marginBottom: 20,
                color: '#FFF',
              }}></TextInput>
            <TextInput
              onChangeText={newText => {
                setValue(newText);
              }}
              value={value}
              selectionColor={'#fff'}
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                width: '100%',
                marginBottom: 20,
              }}></TextInput>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    backgroundColor: 'transparent',
                    color: '#8687E7',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: '#8687E7',
                      textAlign: 'center',
                    },
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    flex: 1,
                    marginLeft: 5,
                    backgroundColor: '#8687E7',
                    borderRadius: 4,
                  },
                ]}
                onPress={handleRemoveModal}>
                <Text style={[styles.textStyle]}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={modalUpdate}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginBottom: 14,
                color: '#fff',
              }}>
              Update Task
            </Text>
            <TextInput
              onChangeText={newDesc => {
                setUpdateValue(newDesc);
              }}
              value={updateValue}
              selectionColor={'#fff'}
              placeholder=""
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                width: '100%',
                marginBottom: 20,
                color: '#FFF',
              }}></TextInput>
            <TextInput
              onChangeText={newText => {
                setUpdateDesc(newText);
              }}
              value={updateDesc}
              selectionColor={'#fff'}
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                width: '100%',
                marginBottom: 20,
              }}></TextInput>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    backgroundColor: 'transparent',
                    color: '#8687E7',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => setModalUpdate(!modalUpdate)}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: '#8687E7',
                      textAlign: 'center',
                    },
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    flex: 1,
                    marginLeft: 5,
                    backgroundColor: '#8687E7',
                    borderRadius: 4,
                  },
                ]}
                onPress={handleUpdateItem}>
                <Text style={[styles.textStyle]}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={listTodo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  viewItem: {
    backgroundColor: 'gray',
    width: '100%',
    height: 72,
    marginBottom: 16,
    borderRadius: 4,
  },
  viewMain: {
    flex: 1,
  },
  textTitleMain: {
    paddingTop: 12,
    paddingLeft: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: '#FFF',
  },
  viewDesc: {flex: 1, flexDirection: 'row'},
  textTime: {
    paddingLeft: 10,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: '#AFAFAF',
  },
  viewAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  touchWorkFor: {
    backgroundColor: 'orange',
    width: 42,
    height: 29,
    marginRight: 12,
    borderRadius: 4,
  },
  textWork: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    lineHeight: 21,
    fontWeight: '400',
    color: '#FFF',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '50%',
    margin: 20,
    backgroundColor: '#363636',
    borderRadius: 16,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default FlatListScreen;
