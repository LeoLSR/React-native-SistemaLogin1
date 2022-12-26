import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Registrar from "./src/Registrar";

import Dashboards from "./src/Dashboard";
import Home from "./src/Home";

const Stack = createStackNavigator();

export default function App() {


    return (

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
                    <Stack.Screen name="Dashboards" component={Dashboards}/>
                    <Stack.Screen name="Registrar" component={Registrar}/>

                </Stack.Navigator>
            </NavigationContainer>



    )
}

