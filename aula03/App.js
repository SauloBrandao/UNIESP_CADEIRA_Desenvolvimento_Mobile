import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LoginScreen></LoginScreen>
    </View>
  )
}

export default App