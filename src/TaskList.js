import React from "react";
import styles from "./Styles/Estilos";
import {Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import Icon from "react-native-vector-icons/Feather";


export default function TaskList({data, deleteItem, editItem}) {
    return (
        <View style={styles.container3}>
            <TouchableOpacity style={{marginRight:10,}} onPress={() => deleteItem(data.key)}>
                    <Icon name="trash" color="#FFF" size={20}/>
            </TouchableOpacity>

            <View style={{paddingRight: 15}}>
                <TouchableWithoutFeedback onPress={() => editItem(data)}>
                    <Text style={{color:'#FFF', paddingRight: 10}}>{data.nome}</Text>
                </TouchableWithoutFeedback>

            </View>

        </View>
    )
}