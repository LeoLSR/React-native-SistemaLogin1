import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, Image} from 'react-native'
import firebase from '../firebaseConnection'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from "@react-navigation/native";

import Dashboards from "../Dashboard";

export default function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');

    const navigation = useNavigation()

    function areaLogada() {
        navigation.navigate('Dashboards', {user}, {setUser})
    }

    async function logar() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                alert('Bem-vindo:' + value.user.email)
                setUser(value.user.email)
                areaLogada()
            })
            .catch((error) => {
                alert('Ops, algo deu errado!')
                return

            })


        setEmail('')
        setPassword('')

    }

    async function registrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                alert('test2' + value.user.email)

            })
            .catch((error) => {
                alert('Ops, algo deu errado!')
                return

            })

        setEmail('')
        setPassword('')
    }


    return (
        <View style={styles.container}>
            <View style={styles.centralizado}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://urubuinterativo.com/wp-content/uploads/2021/10/urubu-menor.png',
                    }}
                />
            </View>


            <Text style={styles.texto}>Email</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
            />
            <Text style={styles.texto}>Senha</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setPassword(texto)}
                value={password}
            />
            <View>

            </View>
            <View style={styles.botoes}>

                <Button
                    title={"Acessar"}
                    onPress={logar}
                />
                <Button

                    title={"Registrar"}
                    onPress={registrar}

                />


            </View>
            <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>

            </Text>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,


    },
    texto: {
        fontSize: 20,

    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 17,
    },
    botoes: {

        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    logo: {
        width: 180,
        height: 150,

    },
    centralizado:{
        alignItems: 'center',
        marginBottom: 20,
    }


})