// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home, { Task } from './src/components/Home';
import NewTask from './src/components/NewTask';
import { newTaskProps } from './src/components/NewTask';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Hoy"
          component={Home}
        />
        <Stack.Screen
          name="Nueva Tarea"
          component={NewTask}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
