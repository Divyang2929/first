import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import img from './Components/First';
import ak from './Components/Second';

const Stack = createNativeStackNavigator();

const Mystack =()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Login'
        component={img}/>

        <Stack.Screen
        name='HM'
        component={ak}/>


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Mystack;