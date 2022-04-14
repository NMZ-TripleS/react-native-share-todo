/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen, { HomeName } from './src/screens/HomeScreen';
import ToDoItemDetail, { ToDoDetailName } from './src/screens/ToDoItemDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={HomeName}
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name={ToDoDetailName}//id ofthe screen
        component={ToDoItemDetail}
        options={{ title: 'Item Detail' }}
      />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>

  );
};
export default App;
