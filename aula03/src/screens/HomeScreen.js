import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
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