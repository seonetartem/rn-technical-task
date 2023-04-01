import * as React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Carousel from "../screens/Carousel";
import {Screens} from "../utils/constants";

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.home} component={Home}/>
            <Stack.Screen name={Screens.carousel} component={Carousel}/>
        </Stack.Navigator>
    )
}