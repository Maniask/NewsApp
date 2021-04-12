import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import News from './src/screens/News';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News Page" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;