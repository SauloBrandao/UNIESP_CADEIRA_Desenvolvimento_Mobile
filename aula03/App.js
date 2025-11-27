import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StackScreen } from 'react-native-screens'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitleAlign: 'center'}}>
          <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Tela de Login'}}/>
          <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen'}}/>
          <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Detalhes'}}/>
          {/* Cada Screen recebe uma navigation como prop */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App