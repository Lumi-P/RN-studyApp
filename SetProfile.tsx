import React, {useCallback, useState} from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert, KeyboardAvoidingView, ScrollView} from "react-native";
import {styles} from "./styles";
import {useNavigation} from "@react-navigation/core";
import {useDispatch, useSelector} from "react-redux";
import {ChangeInfoAction} from "./member";
import type {MemberState} from "./member";
import {useTheme} from "react-native-paper";

export default function Setprofile(){
    const theme = useTheme();
    const {colors} = theme;

    const navigation = useNavigation();
    const goHome = useCallback(() => navigation.navigate("MAIN"),[]);

    const [name, setName] = useState<string>(useSelector<MemberState, string>((state)=>state.member.name));
    const [comments, setComment] = useState<string>(useSelector<MemberState, string>((state)=>state.member.comments));
    const [image, setImage] = useState<string>(useSelector<MemberState, string>((state)=>state.member.image));

    const dispatch = useDispatch();
    const doChangeInfo = useCallback(()=>{
        dispatch(ChangeInfoAction({name, comments, image}));
        goHome();
    }, []);

    return(
        <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: colors.background}}>
            <ScrollView><KeyboardAvoidingView style={{flex:1}}><View style={{flex: 0.9}}>
                <Text style={[styles.text, {color:colors.text}]}>닉네임 변경</Text>
                <TextInput value={name} style={{marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.placeholder, color:colors.text}} 
                    onChangeText = {setName} maxLength = {6}
                    placeholder = "새로운 닉네임을 입력해주세요." keyboardType = "default"/>
                <Text style={[styles.text, {marginTop: 30, color:colors.text}]}>한줄소개 변경</Text>
                <TextInput value={comments} style={{marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.placeholder, color: colors.text}}
                    onChangeText = {setComment} maxLength = {10}
                    placeholder = "새로운 한줄소개를 입력해주세요." keyboardType = "default"/>
                <Text style={[styles.text, {marginTop: 30, color: colors.text}]}>프로필 사진 변경</Text>
                <TouchableOpacity onPress={() => {Alert.alert('갤러리', '카메라에 접근 혹은 갤러리에 접근하는 것은 구현하지 못했습니다.')}}>
                    <Image source={{uri: image}} style = {{width: 200, height: 200, borderWidth: 3, borderColor: colors.text, borderRadius: 10, marginTop: 10}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", flex: 0.1, justifyContent: "center", marginTop: 40}}>
                <TouchableOpacity style={[styles.smallButton,{borderColor: colors.placeholder, borderWidth: 1}]} onPress = {doChangeInfo}>
                    <Text style={[styles.text, {textAlign: "center", color:colors.text}]}>확인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.smallButton,{borderColor: colors.placeholder, borderWidth: 1}]} onPress={goHome}>
                    <Text style={[styles.text, {textAlign: "center", color:colors.text}]}>취소</Text>
                </TouchableOpacity>
            </View></KeyboardAvoidingView></ScrollView>
        </SafeAreaView>
    )
}