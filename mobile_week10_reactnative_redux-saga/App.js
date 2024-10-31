import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './store'; // Đảm bảo bạn đã tạo và cấu hình store với redux-saga
import HomeScreen from './screens/HomeScreen';
import ListOfContents from './screens/ListOfContents';
import AddJobScreen from './screens/AddJobScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Contents" component={ListOfContents} />
          <Stack.Screen name="Jobs" component={AddJobScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
