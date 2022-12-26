import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Image} from 'react-native'
import firebase from '../firebaseConnection'
import styles from "../Styles/Estilos";
import {NavigationContainer, useNavigation} from "@react-navigation/native";

import Dashboards from "../Dashboard";
import Registrar from "../Registrar";

export default function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');


    const navigation = useNavigation()



    function areaRegistrar() {
        navigation.navigate('Registrar')
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
    function areaLogada() {
        navigation.navigate('Dashboards', {user}, {setUser})
    }

    return (
        <View style={styles.container}>
            <View style={styles.centralizado}>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://urubuinterativo.com/wp-content/uploads/2021/10/urubu-menor.png'}} />
            </View>

            <Text style={styles.texto}>E-mail</Text>
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
                secureTextEntry={true}
            />

            <View style={styles.botoes}>
                <Button
                    title={"Acessar"}
                    onPress={logar}
                />
                <Button
                    title={"Criar Conta"}
                    onPress={areaRegistrar}
                />


            </View>
            <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>

            </Text>
        <View style={styles.copy}>
             <Text>© Leonardo de Souza</Text>
        </View>

        </View>
    )
}
