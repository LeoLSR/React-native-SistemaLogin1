import React, {useEffect, useRef, useState} from "react";
import {Button, Image, Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import firebase from "../firebaseConnection";
import {useNavigation} from "@react-navigation/native";
import styles from "../Styles/Estilos";
import TaskList from "../TaskList";


export default function Dashboards({route}) {

    const inputRef = useRef(null)
    const navigation = useNavigation();
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([])
    const [key, setKey] = useState('')

    useEffect(() => {
        async function loadTasks() {
            await firebase.database().ref('tarefas').on('value', (snapshot) => {
                setTasks([]);

                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        nome: childItem.val().nome
                    };

                    setTasks(oldArray => [...oldArray, data])
                })
            })
        }

        loadTasks()

    }, [])

    async function handleAdd() {
        if (newTask !== '') {

            if (key !== '') {
                await firebase.database().ref('tarefas').child(key).update({
                    nome: newTask
                });
                Keyboard.dismiss();
                setNewTask('');
                setKey('');
                return;
            }

            let tarefas = await firebase.database().ref('tarefas');
            let chave = tarefas.push().key;


            tarefas.child(chave).set({
                nome: newTask
            })

            Keyboard.dismiss();
            setNewTask('')
        }
    }

    async function handleDelete(key) {
        await firebase.database().ref('tarefas').child(key).remove();
    }

    function handleEdit(data) {
        setNewTask(data.nome)
        setKey(data.key);
        inputRef.current.focus()
    }

    function cancelEdit() {
        setKey('');
        setNewTask('');
        Keyboard.dismiss();
    }

    async function logout() {
        await firebase.auth().signOut();

    }

    return (
        <View style={styles.container}>

            {/* <View style={styles.container2}>
                <Image
                    style={styles.urubu}
                    source={{uri: 'https://i.pinimg.com/originals/73/ab/1a/73ab1aeac5918bc4313e7f21d8c1604a.gif'}}

                />
            </View>*/}

            {key.length > 0 && (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={cancelEdit}>
                        <Icon name='x-circle' size={20} color="#FF0000"/>
                    </TouchableOpacity>
                    <Text style={{
                        marginLeft: 5, marginBottom: 5, color: '#FF0000'
                    }}>
                        Você está editando uma tarefa
                    </Text>
                </View>
            )}


            <View style={styles.containerTask}>
                <TextInput
                    style={styles.input2}
                    placeholder="O que vai fazer hoje?"
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => setNewTask(texto)}
                    value={newTask}
                    ref={inputRef}
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>


            {/* <View style={{alignItems: 'center', marginBottom: 200,}}>

            </View>*/}
            <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 10,}}> Seja Bem
                vindo {route.params.user}</Text>
            <FlatList
                data={tasks}
                keyExtractor={item => item.key}
                renderItem={({item}) => (
                    <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit}/>
                )}/>

            <Button title="Deslogar"
                    onPress={logout(), ()=> navigation.goBack()}/>

        </View>

    )
}

