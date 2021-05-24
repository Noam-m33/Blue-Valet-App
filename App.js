import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './App/BeforeLogin/WelcomeScreen';
import Register from './App/BeforeLogin/Register';
import Login from './App/BeforeLogin/Login';
import Reservation from './App/Reservation';
import Orders from './App/Orders';
import Account from './App/Account';
import Help from './App/Help';
import carsLogo from './assets/cars.png';
import ordersLogo from './assets/orders.png';
import accountLogo from './assets/account.png'
import helpLogo from './assets/help.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [displayWelcomeScreen, setDisplayWelcomeScreen] = useState(true)

  function skipWelcomeSection(){
    setDisplayWelcomeScreen(false)
    console.log('coucou');
  }

  return (
    <NavigationContainer>
      {
       displayWelcomeScreen ? (
        <Stack.Navigator>
          <Stack.Screen name="Welcome Screen" options={{ headerShown: false }}>
            {props => <Welcome {...props} skipWelcomeSection={skipWelcomeSection} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{ title: 'Inscription', headerStyle: { backgroundColor: '#2E4CB9', shadowOffset: { height: 0, width: 0 }}, headerTintColor: 'white' }} />
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ title: 'Connexion', headerStyle: { backgroundColor: '#2E4CB9', shadowOffset: { height: 0, width: 0 }}, headerTintColor: 'white' }} />
        </Stack.Navigator>)
        :           
        <Tab.Navigator
        tabBarOptions={{ activeTintColor:'#2E4CB9'}}
        >
          <Tab.Screen name="Réservation" component={Reservation} options={{
             tabBarIcon: ({ color }) => (
              <Image
                source={carsLogo}
                style={{ height: 24, width: 24, marginTop: 15, tintColor: color  }}
              />
             )}} 
          />
          <Tab.Screen name="Commandes" component={Orders} options={{
             tabBarIcon: ({ color }) => (
              <Image
                source={ordersLogo}
                style={{ height: 20, width: 20, marginTop: 15, tintColor: color  }}
              />
             )}} 
          />
          <Tab.Screen name="Compte" component={Account} options={{
             tabBarIcon: ({ color }) => (
              <Image
                source={accountLogo}
                style={{ height: 20, width: 20, marginTop: 15, tintColor: color  }}
              />
             )}} 
          />
          <Tab.Screen name="Aide" component={Help} options={{
             tabBarIcon: ({ color }) => (
              <Image
                source={helpLogo}
                style={{ height: 20, width: 20, marginTop: 15, tintColor: color  }}
              />
             )}} 
          />
        </Tab.Navigator>
    }
    
    </NavigationContainer>
    
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
