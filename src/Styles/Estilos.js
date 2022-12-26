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

textAlign: 'center',
      fontWeight: 'bold',
        color: '#727272',
        fontSize: 15,
        marginTop: 10,

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

    },
    urubu:{
        width: 300,
        height: 300,
    },
    container2:{
        alignItems: 'center'
    },
    containerTask:{
        flexDirection: "row"
    },
    input2:{
        flex: 1,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 17,
    },
    buttonAdd:{
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: '#121212',
        paddingLeft: 14,
        paddingRight: 14,
        marginLeft: 5,
    },
    buttonText:{
        fontSize: 25,
        color: '#FFF'
    },
    container3:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: "#121212",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    }

})

export default styles