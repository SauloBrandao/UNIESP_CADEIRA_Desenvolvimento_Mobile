import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {

    const items = [
        { id: '1', name: 'Curso de React Native', description: 'Aprenda a criar apps para Android e iOS' },
        { id: '2', name: 'Curso de Java Spring Boot', description: 'Construa APIs robusta com Java e Spring'},
        { id: '3', name: 'Curso de AWS ', description: 'Domine os serviços da AWS'},
        { id: '4', name: '', description: 'Construa APIs robusta com Java e Spring'}
    ]

  return (
    <View style={styles.container}>
        <Text style={styles.title}>📚 Cursos Disponíveis </Text>

        <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5cc"},
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20},
    itemContainer: { backgroundColor: "#fff", padding: 15, marginBottom: 10,
    borderRadius: 8, elevation: 2},
    itemTitle: {fontWeight: 'bold', fontSize: 18},
    itemDescription: {fontSize: 14, color: "#555"}
})

export default HomeScreen