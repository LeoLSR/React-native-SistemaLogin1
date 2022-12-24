import React from "react";
import {Button, Image, Text, View, StyleSheet} from "react-native";
import firebase from "../firebaseConnection";
import {useNavigation} from "@react-navigation/native";


export default function Dashboards({route}) {

    const navigation = useNavigation();

    async function logout() {
        await firebase.auth().signOut();
        setUser('')
        alert('Deslogado com sucesso')
    }

    return (
        <View style={styles.container}>
            <Image
            style={styles.urubu}
            source={{uri: 'https://i.pinimg.com/originals/73/ab/1a/73ab1aeac5918bc4313e7f21d8c1604a.gif'}}

            />

            <View style={{alignItems: 'center', marginBottom: 200,}}>
                <Text style={{fontSize: 20}}> Seja Bem vindo {route.params.user}</Text>
            </View>

            <Button title="Deslogar"
                    onPress={ logout(), ()=> navigation.goBack()}/>


        </View>

    )
}

const styles = StyleSheet.create({
    urubu:{
        width: 300,
        height: 300,
    },
    container:{
        alignItems: 'center'
    }
})
