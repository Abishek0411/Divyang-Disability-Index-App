import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './Mainscreen';
import CalculatorPage from './CalculatorPage';
import SecondScreen from './SecondScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import {PaperProvider } from 'react-native-paper'; 


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Mainpage">
      <Stack.Screen name="Mainpage" component={Mainpage} options={{ headerShown: false }}/>
      <Stack.Screen name="SecondPage" component={SecondScreen} />
      <Stack.Screen name="Calculator" component={CalculatorPage} />
    </Stack.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <PaperProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName; 

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Calculator') {
              iconName = 'calculator-variant';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#3F2A7F',
          tabBarInactiveTintColor: '#0d1b2a',
        })}
      >
        <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Calculator" component={CalculatorPage} />
      </Tab.Navigator>
    </PaperProvider>
  );
}