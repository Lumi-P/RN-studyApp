import React, {useCallback, useState} from "react";
import {SafeAreaView, TextInput, View, FlatList, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from "./styles";
import {useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/core";

export default function FindStudy(){
    const theme = useTheme();
    const {colors} = theme;

    const navigation = useNavigation();
    const goJoin = useCallback(() => navigation.navigate("JOIN"),[]);

    const studyList = [{key: '기상 인증 스터디', value: "매일 아침 7시 기상 후 사진을 업로드 해주세요."}, {key: '공부 인증 스터디', value: "매일 밤 11시에 공부 시간을 찍어 올려주세요."},
    {key:"수능공부", value:"매일 자정까지 스케줄러위에 스톱워치를 올려 찍은 공부 시간과 목록을 인증해주세요"}, {key:"살기 위해 운동하자", value:"매주 한 번 운동 후 인증 가능한 사진 올려주세요."},
    {key:"식단관리 함께 해요", value:"매일 저녁 9시까지 하루 식단을 올려주세요."}, {key:"비대면 강의 듣기", value:"강의를 밀리지 않고 듣기 위한 스터디입니다. 매주 출석 현황 올려주세요."}];

    const [input, setInput] = useState<string>("");

    return(
        <SafeAreaView style={[styles.safeArea, {backgroundColor: colors.background}]}>
            <View style={{height: 60, margin: 20, marginBottom: 0, flexDirection: "row", justifyContent: "space-between"}}>
                <Icon name="feature-search" size={55} style={{color: colors.placeholder}} />
                <TextInput style={{width: '80%', borderColor: colors.placeholder, borderWidth: 1, borderRadius: 10, color: colors.text}}
                    placeholder = "ex)기상 인증 스터디" keyboardType = "default" onChangeText={setInput} value={input}/>
            </View>
            <FlatList style={{flex: 0.9, margin: 20, borderColor: colors.placeholder, borderWidth: 1, borderRadius: 10}}
                    data={studyList}
                    renderItem={({item}) => <View style={{padding: 20}}>
                            <Text style={{fontSize: 25, color: colors.text}} onPress={goJoin}>{item.key}</Text>
                            <Text style={{fontSize: 15, color: colors.text}}>{item.value}</Text>
                        </View>}
                />
        </SafeAreaView>
    )
}