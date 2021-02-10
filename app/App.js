import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { Home, Game, Finish, Failed, LeaderBoard } from './pages';
import store from './store';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} 
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#f4511e',
              }
            }}/>
          <Stack.Screen name='Game' component={Game} 
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#f4511e',
              }
            }}/>
          <Stack.Screen name='Failed' component={Failed} 
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#f4511e',
              }
            }}/>
          <Stack.Screen name='Leader Board' component={LeaderBoard} 
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#f4511e',
              }
            }}/>
          <Stack.Screen name='Finish' component={Finish} 
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#f4511e',
              }
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
