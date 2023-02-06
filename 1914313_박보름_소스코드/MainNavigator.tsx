import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import FindStudy from "./FindStudy";
import JoinStudy from "./JoinStudy";
import OpenStudy from "./OpenStudy";
import Setting from "./Setting";
import SetProfile from "./SetProfile";
import Study from "./Study";
import Chat from "./Chat";
import Gallery from "./Gallery";

const Stack = createStackNavigator();

export default function MainNavigator(){
    return (<Stack.Navigator>
        <Stack.Screen name = "MAIN" component = {Home}/>
        <Stack.Screen name = "FIND" component = {FindStudy}/>
        <Stack.Screen name = "OPEN" component = {OpenStudy}/>
        <Stack.Screen name = "JOIN" component = {JoinStudy}/>
        <Stack.Screen name = "SETTING" component = {Setting}/>
        <Stack.Screen name = "SET PROFILE" component = {SetProfile}/>
        <Stack.Screen name = "STUDY" component = {Study}/>
        <Stack.Screen name = "CHATTING" component = {Chat}/>
        <Stack.Screen name = "GALLERY" component = {Gallery}/>
    </Stack.Navigator>);
}