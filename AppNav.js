import React, {Component} from 'react';
import Login from './src/screens/Login/Login';
import Registration from './src/screens/Registration/Registration';
import Home from './src/screens/Home/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function AppNav({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          component={Login}
          name="Login"
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          component={Registration}
          name="Registration"
          //   options={{headerShown: false}}
        />

        <Stack.Screen
          component={Home}
          name="Home"
          //   options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;

{
  /* // import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import Screen1 from './Components/Screen1';
// import Screen2 from './Components/Screen2';
// const Stack = createStackNavigator();

function MyStack() { */
}
{
  /* return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Screen1} name="Screen1" />
        <Stack.Screen component={Screen2} name="Screen2" />
      </Stack.Navigator>
    </NavigationContainer>
  );
} */
}

{
  /* // export default MyStack; */
}
