// import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import SplashPage from './src/screens/SplashPage';
import RegisterPage from './src/screens/RegisterPage';
import LoginPage from './src/screens/LoginPage';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';

const stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="splash"
          screenOptions={{headerShown: false}}>
          <stack.Screen name="tab" component={TabNavigator} />
          <stack.Screen name="splash" component={SplashPage} />
          <stack.Screen name="register" component={RegisterPage} />
          <stack.Screen name="login" component={LoginPage} />
        </stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

//const styles = StyleSheet.create({})
