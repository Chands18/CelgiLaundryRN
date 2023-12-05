/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import OrderPage from '../screens/OrderPage';
import ProfilePage from '../screens/ProfilePage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarHideOnKeyboard: true }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Order" component={OrderPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});