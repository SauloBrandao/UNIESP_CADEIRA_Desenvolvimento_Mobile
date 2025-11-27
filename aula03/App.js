import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StackScreen } from 'react-native-screens'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitleAlign: 'center'}}>
          <Stack.Screen/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App