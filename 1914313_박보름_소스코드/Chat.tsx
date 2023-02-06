import React, {useState, useMemo, useCallback} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './styles';
import {useTheme} from "react-native-paper";

const Chat = () => {       
    const theme = useTheme();
    const {colors} = theme;

    const [chat, updateChat] = useState<string[]>(new Array<string>());
         const chatViews = useMemo(()=>{return chat.map((chatItem, index) => {
         if(chatItem.length<=14){
            return (
            <View style={[styles.chat, {height: 60, backgroundColor: colors.placeholder, borderColor: colors.text}]} key={index}>
                <Text style={{color: colors.text, flex: 1, fontSize: 20}}>{chatItem}</Text>
            </View>
            );
         }
         else if(chatItem.length<=28){
            return (
            <View style={[styles.chat, {height: 80, backgroundColor: colors.placeholder, borderColor: colors.text}]} key={index}>
                <Text style={{color: colors.text, flex: 1, fontSize: 20}}>{chatItem}</Text>
            </View>
            );
         }
         else{
            return (
            <View style={[styles.chat, {height: 100, backgroundColor: colors.placeholder, borderColor: colors.text}]} key={index}>
                <Text style={{color: colors.text, flex: 1, fontSize: 20}}>{chatItem}</Text>
            </View>
            );
         }
    })}, [chat.length]);

    const [chatText, updateChatText] = useState<string>('');
    const pressInput = useCallback(()=>{
        if(chatText != ""){
            updateChat((chatList) => {
                return [... chatList, chatText];
            });
        }
        updateChatText("");
    }, [chatText.length]);

    return (
        <SafeAreaView style={[styles.safeArea, {backgroundColor: colors.background}]}>
            <ScrollView style={{flex: 0.85}}>
                <View style={[styles.chat, {height: 60, marginLeft: 20, backgroundColor: colors.placeholder, borderColor: colors.text}]}>
                    <Text style={{flex: 1, fontSize: 20, color: "white"}}>전달 사항을 입력해주세요</Text>
                </View>
                {chatViews}
            </ScrollView>
            <View style={{flex: 0.15, flexDirection: 'row', borderWidth: 3, borderColor: colors.placeholder, height: 60}}>
                <TextInput style={{color: colors.text, flex: 4, fontSize: 20}} value={chatText} onChangeText={updateChatText} maxLength={42}/>
                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.placeholder}} onPress={pressInput}>
                    <Text style={{fontSize: 20, color: "white"}}>{"입력"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Chat;