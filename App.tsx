import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import apptw from './utils/lib/tailwind';
import { Provider } from 'react-redux';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './screens/allroutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import Test from './screens/Tests/Test';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './Navigation/CustomDrawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashBoardScreen from './screens/DashBoard/DashBoardScreen';
import Tabs from './Navigation/Tabs';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';











export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();



  return (

    <SafeAreaProvider>
      <StatusBar />


      <NavigationContainer>
        {/* <AppStack/> */}
        <AuthStack />
      </NavigationContainer>



    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
