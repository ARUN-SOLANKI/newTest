import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import More from '../screens/More';
import Home from '../screens/Home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="More" component={More} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
