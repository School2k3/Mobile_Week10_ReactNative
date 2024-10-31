import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ListOfContents from './screens/ListOfContents';
import AddJobScreen from './screens/AddJobScreen';

const Stack = createNativeStackNavigator();

function App() {

}

export default App;