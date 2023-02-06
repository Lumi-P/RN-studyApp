import React, {useCallback, useState} from "react";
import {SafeAreaView, View, Text, Image, Alert} from "react-native";
import {styles} from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconA from "react-native-vector-icons/FontAwesome";
import {useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";

let money = 0;

export default function Study(){
    const theme = useTheme();
    const {colors} = theme;
    
    const memberList = [{key: "스터디원1", value: "https://source.unsplash.com/random/600x500"}, {key: "스터디원2", value: "https://source.unsplash.com/random/500x500"},
    {key: "스터디원3", value: "https://source.unsplash.com/random/600x600"}, {key: "스터디원4", value: "https://source.unsplash.com/random/500x600"},
    {key: "스터디원5", value: "https://source.unsplash.com/random/400x500"}, {key: "스터디원6", value: "https://source.unsplash.com/random/500x400"}]

    const navigation = useNavigation();
    const goChatting = useCallback(() => navigation.navigate("CHATTING"),[]);
    const goGallery = useCallback(() => navigation.navigate("GALLERY"),[]);

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>        
                <View style={{flex: 0.2, flexDirection: "row", padding:10, justifyContent: "space-between"}}>
                    <View style={{paddingLeft: 20, width: 300}}>
                        <Text style={[styles.text, {paddingTop: 5, color:colors.text}]}>8시 기상 스터디</Text>
                        <Text style={[styles.text, {paddingTop: 5, color: colors.text, fontSize: 10}]}>매일 아침 8시에 기상 후 사진을 찍어 올려주세요.</Text>
                    </View>
                    <View style={{height: 50, marginTop: 5, marginRight: 20, alignItems: "flex-end"}}>
                        <Text style={{color: colors.text}}>내 벌금</Text>
                        <Text style={{color: colors.text}}>{money}원</Text>
                    </View>
                </View>
                
                <View style={{flex: 0.1, padding: 10, flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "column", marginLeft: 20}}>
                        <Icon name="camera" size={40} style={{marginLeft: 5, color:colors.placeholder}} 
                        onPress={() => {Alert.alert('갤러리', '카메라에 접근 혹은 갤러리에 접근하는 것은 구현하지 못했습니다.')}}/>
                        <Text style={[styles.text, {fontSize: 10, color:colors.placeholder}]}>사진 업로드</Text>
                    </View>
                    <View style={{flexDirection: "column"}}>
                        <IconA name="picture-o" size={40} style={{color: colors.placeholder, marginLeft: 10}} onPress={goGallery}/>
                        <Text style={[styles.text, {fontSize: 10, marginLeft: 5, color:colors.placeholder}]}>내 인증사진</Text>
                    </View>
                    <View style={{flexDirection: "column"}}>
                        <Icon name="chat" size={40} style={{color: colors.placeholder, marginLeft: 10}} onPress={goChatting}/>
                        <Text style={[styles.text, {fontSize: 10, marginLeft: 15, color:colors.placeholder}]}>채팅방</Text>
                    </View>
                    <View style={{flexDirection: "column", marginRight: 20}}>
                        <Icon name="logout" size={40} style={{color: colors.placeholder, marginLeft: 10}}
                        onPress={() => {Alert.alert('탈퇴', '목록에서 삭제하는 것은 구현하지 못했습니다.')}}/>
                        <Text style={[styles.text, {fontSize: 10, color:colors.placeholder}]}>스터디 탈퇴</Text>
                    </View>
                </View>

                <FlatList style={{flex: 0.6, margin: 20, padding: 10, borderWidth: 1, borderRadius: 10, borderColor: colors.placeholder}}
                    data={memberList}
                    renderItem={({item}) => <View style={{padding: 10, flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{fontSize: 25, color: colors.text}}>{item.key}</Text>
                            <Image source={{uri: item.value}} style = {{width: 100, height: 80, borderWidth: 3, borderColor: colors.text, borderRadius: 10}}/>
                        </View>}
                />
        </SafeAreaView>
    )
}