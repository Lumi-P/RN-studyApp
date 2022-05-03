import React, {useCallback} from "react";
import {Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView} from "react-native";
import {styles} from "./styles";
import {useNavigation} from "@react-navigation/core";
import {useTheme} from "react-native-paper";

export default function JoinStudy(){
    const theme = useTheme();
    const {colors} = theme;

    const navigation = useNavigation();
    const goFind = useCallback(() => navigation.navigate("FIND"),[]);

    return(
        <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: colors.background}}>
            <ScrollView><KeyboardAvoidingView style={{flex: 1}}><View style={{flex: 0.9}}>
                <Text style={[styles.text, {color:colors.text}]}>자기소개</Text>
                <TextInput style={{marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.placeholder, color:colors.text}}
                    multiline ={true} placeholder = "ex)oo시험을 준비중 입니다. 같이 열심히 하고 싶어요. (최대 100자)" keyboardType = "default" maxLength={100}/>
            </View>
            <View style={{flexDirection: "row", flex: 0.1, justifyContent: "center", marginTop: 20}}>
                <TouchableOpacity style={[styles.smallButton, {borderColor: colors.placeholder}]} onPress={() => {Alert.alert('신청', '목록에 추가하는 것은 구현하지 못했습니다.')}}>
                    <Text style={[styles.text, {textAlign: "center", color: colors.text}]}>신청</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.smallButton, {borderColor: colors.placeholder}]} onPress={goFind}>
                    <Text style={[styles.text, {textAlign: "center", color: colors.text}]}>취소</Text>
                </TouchableOpacity>
            </View></KeyboardAvoidingView></ScrollView>
        </SafeAreaView>
    )
}