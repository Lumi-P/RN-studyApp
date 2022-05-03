import React, {useCallback} from "react";
import {SafeAreaView, TouchableOpacity, Text, Switch, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import {styles} from "./styles"
import {useTheme} from "react-native-paper";
import {useToggleContext} from "./ToggleThemeContext";

export default function Setting(){
    const theme = useTheme();
    const {colors} = theme;
    const toggleTheme = useToggleContext();

    const navigation = useNavigation();
    const goProfile = useCallback(() => navigation.navigate("SET PROFILE"),[]);

    return(
        <SafeAreaView style = {{flex: 1, alignItems: "center", backgroundColor: colors.background}}>
            <TouchableOpacity style={[styles.button, {borderColor: colors.placeholder}]} onPress={goProfile}>
                <Text style={[styles.buttonText, {color: colors.text}]}>프로필 변경</Text>
            </TouchableOpacity>
            <View style={[styles.button, {borderColor: colors.placeholder}]}>
                <View style = {{flexDirection: "row"}}>
                    <Text style={[styles.buttonText, {color: colors.text}]}>다크 모드</Text>
                    <Switch value={theme.dark} onValueChange = {toggleTheme} style={{marginLeft: 140}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}