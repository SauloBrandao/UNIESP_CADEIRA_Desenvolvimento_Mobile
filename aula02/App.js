import { View} from 'react-native'
import React from 'react'
import LayoutResponsive from './src/components/LayoutResponsive'
import CartaoApresentacao from './src/components/CartaoApresentacao'
import CartaoPerfil from './src/components/CartaoPerfil'

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CartaoPerfil></CartaoPerfil>
    </View>
  )
}
export default App