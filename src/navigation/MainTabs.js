import React from 'react';
import {Text, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';
import TaskScreen from '../screens/TaskScreen/TaskScreen';
import FocuseScreen from '../screens/FocuseScreen/FocuseScreen';
import UserScreen from '../screens/UserScreen/UserScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#363636',
          borderTopWidth: 0,
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Index"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/image/home-2.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={{color: 'rgba(255, 255, 255, 0.87)', marginTop: 8}}>
                Index
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/image/calendar.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={{color: 'rgba(255, 255, 255, 0.87)', marginTop: 8}}>
                Calendar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              style={{
                top: -50,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: '#8687E7',
                }}>
                <Image
                  source={require('../assets/image/add.png')}
                  style={{
                    width: 32,
                    height: 32,
                  }}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Focuse"
        component={FocuseScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/image/clock.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={{color: 'rgba(255, 255, 255, 0.87)', marginTop: 8}}>
                Focuse
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/image/user.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={{color: 'rgba(255, 255, 255, 0.87)', marginTop: 8}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
