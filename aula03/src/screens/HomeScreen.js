import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native-web'
import { Touchable } from 'react-native'
import { db } from '../config/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const HomeScreen = ({ navigation } ) => {

    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
               const snapshot = await getDocs(collection(db, "cursos"))
               const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ... doc.data()
               }))
               setCourses((data))
            } catch (error) {
                console.error("Erro ao buscar cursos no Firestore", error)
                setError("Não foi possível carregar cursos. Tente novamente.")
            } finally {
                setLoading(false)
            }
        }
    }, [])

    const items = [
        { id: '1', c: 'Curso de React Native', description: 'Aprenda a criar apps para Android e iOS' },
        { id: '2', name: 'Curso de Java Spring Boot', description: 'Construa APIs robusta com Java e Spring'},
        { id: '3', name: 'Curso de AWS ', description: 'Domine os serviços da AWS'},
        { id: '4', name: 'Curso de Python para Data Science', description: 'Domine analise de dados em Python'}
    ]

    const goToDetails = (course) => {
    navigation.navigate("Details", {course})
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>📚 Cursos Disponíveis </Text>
        <FlatList data={items} 
        KeyExtractor={(item) => item.id}
        renderItem={({ item }) => (<TouchableOpacity style={styles.itemContainer} onPress={ () => goToDetails((item))}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </TouchableOpacity>)}>
        </FlatList>
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