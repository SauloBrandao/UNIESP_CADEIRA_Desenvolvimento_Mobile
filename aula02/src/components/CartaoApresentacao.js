import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
  return (
    <View style={styles.container}>   {/* View Principal é chamada de C*/ }
        <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
            style={styles.imagePerfil}
        />
        {/* nome e descrição do card */}
        <Text style={styles.nome}>John Doe</Text> 
        <Text style={styles.descricao}>Desenvolvedor Mobile • Apaixonado por Tecnologia</Text>

          {/* Botoes do contato */}
        <View style={styles.botoesContainer}>
        <TouchableOpacity style={[styles.botao, styles.botaoGitHub]}>
            <Text style={styles.textoBotao}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.botaoLinkedin]}>
            <Text style={styles.textoBotao}>Linkedin</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000', // Cor da Sombra
        shadowOffset: { width: 0, height: 2},  /// Direção da Sombra
        shadowOpacity: 0.1, /// Transparenca da Sombra
        shadowRadius: 4, /// Espeplhamento da Sombra
        elevation: 5, ///
    },
    
    imagePerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,        
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'
    },
    
    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },

    botao: {
        flex: 1,
        padding: 10, /// espacamento interno
        borderRadius: 5, /// Raio da Borda
        alignItems: 'center',
        marginHorizontal: 5,
    },
    
    botaoGitHub: {
        backgroundColor: '#333',
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    botaoLinkedin: {
        backgroundColor: '#0077b5'
    },

    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10,
    }

})

export default CartaoApresentacao