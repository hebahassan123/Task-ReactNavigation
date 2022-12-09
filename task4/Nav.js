import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from './Users';
import Details from './Details';
import routes from './Routes';
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator();
export default function Nav() {
  return (
    <Stack.Navigator>
     <Stack.Screen name={routes.user} component={Users}/>

      <Stack.Screen name={routes.details} component={Details} />
   
      
    
    </Stack.Navigator>

    
  );
}









{/* <Stack.Screen name={routes.palette} component={Palette} /> */}


