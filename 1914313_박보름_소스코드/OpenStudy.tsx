import React, {useCallback, useState} from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert , KeyboardAvoidingView, ScrollView} from "react-native";
import {styles} from "./styles";
import {useNavigation} from "@react-navigation/core";
import {useTheme} from "react-native-paper";

export default function OpenStudy(){
    const theme = useTheme();
    const {colors} = theme;

    const navigation = useNavigation();
    const goHome = useCallback(() => navigation.navigate("MAIN"),[]);

    const [day, setDay] = useState<string>("1");
    const limitDay = (text: string) => {
        if (text == '8' || text == '9') {text = '7';}
        else if (text == '0') {text = '1';}
        setDay(text);
    }

    const [time, setTime] = useState<string>("0");
    const limitTime = (text: string) => {
        if (parseInt(text) > 23) {text = '23';}
        setTime(text);
    }

    return(
        <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: colors.background}}>
            <ScrollView><KeyboardAvoidingView style={{flex: 1}}><View style={{flex: 0.9}}>
                <Text style={[styles.text, {color: colors.text}]}>스터디 이름</Text>
                <TextInput style={{borderColor: colors.placeholder, borderRadius: 10, borderWidth:1, marginTop: 20, color: colors.text}}
                    placeholder = "ex)기상 인증 스터디 (최대 20자)" keyboardType = "default" maxLength={20}/>
                <Text style={[styles.text, {marginTop: 30, color: colors.text}]}>스터디 소개</Text>
                <TextInput style={{borderColor: colors.placeholder, borderRadius: 10, borderWidth:1, marginTop: 20, color: colors.text, height: 100}}
                    placeholder = "ex)매일 아침 7시 기상 후 사진을 업로드 해주세요. (최대 100자)" keyboardType = "default" multiline={true} maxLength={100}/>
                <Text style={[styles.text, {marginTop: 30, color: colors.text}]}>인증 주기</Text>
                <View style={{flexDirection: "row"}}>
                    <TextInput style={{borderColor: colors.placeholder, borderRadius: 10, borderWidth:1, marginTop: 20, color: colors.text, width: 40}}
                        placeholder = "1~7" keyboardType='numeric' maxLength={1} value={day} onChangeText={limitDay}/>
                    <Text style={[styles.text, {marginTop: 30, color: colors.text, marginLeft: 10, marginRight: 30}]}>일 마다</Text>
                    <TextInput style={{borderColor: colors.placeholder, borderRadius: 10, borderWidth:1, marginTop: 20, color: colors.text, width: 45}}
                        placeholder = "0~23" keyboardType='numeric' maxLength={2} value={time} onChangeText={limitTime}/>
                    <Text style={[styles.text, {marginTop: 30, color: colors.text, marginLeft: 10}]}>시까지 인증</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", flex: 0.1, justifyContent: "center", marginTop: 30}}>
                <TouchableOpacity style={[styles.smallButton, {backgroundColor: colors.surface, borderColor: colors.placeholder}]} onPress={() => {Alert.alert('개설', '목록에 추가하는 것은 구현하지 못했습니다.')}}>
                    <Text style={[styles.text, {textAlign: "center", color: colors.text}]}>개설</Text>
                </TouchableOpacity>
            </View></KeyboardAvoidingView></ScrollView>
        </SafeAreaView>
    )
}