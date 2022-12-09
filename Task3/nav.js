import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Palette from './Screens/palette';
import routes from './common/routes';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: 'Palettes',
      
          headerStyle: {
            backgroundColor: 'green',
          },
        
        }}
      />
      <Stack.Screen name={routes.palette} component={Palette} />
    </Stack.Navigator>
  );
}
