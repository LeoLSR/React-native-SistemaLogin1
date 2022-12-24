import React from "react";
import {StyleSheet} from "react-native";

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
    centralizado: {
        alignItems: 'center',
        marginBottom: 20,
    },
    copy:{
        marginTop: 180,
        alignItems: "center",



    }

})

export default styles