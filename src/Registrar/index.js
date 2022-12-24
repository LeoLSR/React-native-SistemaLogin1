import React, {useState, useEffect} from "react";
import {Button, Text, TextInput, View} from "react-native";
import firebase from "../firebaseConnection";
import styles from "../Styles/Estilos";


export default function Registrar() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');

    async function registrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                //alert(value.user.uid)
                firebase.database().ref('usuarios').child(value.user.uid).set({
                    nome: name,
                    telefone: telefone,
                    email: email,
                    password: password,
                })

                alert('USUARIO CRIADO')

            })
            .catch((error) => {
                alert('Ops, algo deu errado!')
                return

            })
        setName('')
        setEmail('')
        setPassword('')
        setTelefone('')
    }

    return (
        <View style={styles.container}>

                <Text style={styles.texto}>Nome</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(name) => setName(name)}
                    value={name}
                />

                <Text style={styles.texto}>Telefone</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(telefone) => setTelefone(telefone)}
                    value={telefone}
                    textContentType="telephoneNumber"
                    keyboardType="numeric"
                />

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
            <Button
                title={"Registrar"}
                onPress={registrar}
            />

        </View>
    )
}