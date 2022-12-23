import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator} from 'react-native'
import firebase from './src/firebaseConnection'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import Dashboards from "./src/Dashboard";
import Home from "./src/Home";

const Stack = createStackNavigator();

export default function App() {


    return (

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
                    <Stack.Screen name="Dashboards" component={Dashboards}/>
                </Stack.Navigator>
            </NavigationContainer>



    )
}

