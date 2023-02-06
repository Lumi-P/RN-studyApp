import React, {useCallback, useState, useEffect} from "react";
import {SafeAreaView, View, Text, Image, FlatList} from "react-native";
import {styles} from './styles';
import {useNavigation} from "@react-navigation/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconA from "react-native-vector-icons/FontAwesome5";
import type {MemberState, Member} from './member'
import {useSelector} from "react-redux";
import {useTheme} from "react-native-paper";

export default function Home(){
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return () => {clearInterval(id);}
    }, []);

    const theme = useTheme();
    const {colors} = theme;

    const navigation = useNavigation();
    const goSetting = useCallback(() => navigation.navigate("SETTING"),[]);
    const goFind = useCallback(() => navigation.navigate("FIND"),[]);
    const goOpen = useCallback(() => navigation.navigate("OPEN"),[]);
    const goStudy = useCallback(() => navigation.navigate("STUDY"),[]);

    const userState = useSelector<MemberState, Member> ((state)=>state.member);
    const {name, comments, image} = userState

    return(
        <SafeAreaView style={[styles.safeArea, {backgroundColor: colors.background}]}>
                <View style={{flex: 0.2, flexDirection: "row", padding:10, marginLeft: 5}}>
                    <Image style={[styles.avatar, {borderColor: colors.backdrop}]} source={{uri: image}}/>
                    <View style={{paddingLeft: 20, width: 260, marginTop: 5}}>
                        <Text style={[styles.text, {paddingTop: 5, color: colors.text}]}>{name}</Text>
                        <Text style={[styles.text, {paddingTop: 5, height: 35, color: colors.text}]}>{comments}</Text>
                    </View>
                    <Icon name="cog-outline" onPress={goSetting} size={30} style={{color: colors.placeholder}}/>
                </View>
                
                <View style={{flex: 0.1, padding: 10, flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{marginLeft: 20}}>
                        <IconA name="search" onPress={goFind} size={40} style={{marginLeft: 5, color: colors.placeholder}}/>
                        <Text onPress={goFind} style={[styles.text, {fontSize: 10, marginRight: 15, color: colors.placeholder}]}>스터디 찾기</Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                        <IconA name="book-reader" onPress={goOpen} size={40} style={{marginLeft: 5, color: colors.placeholder}}/>
                        <Text onPress={goOpen} style={[styles.text, {fontSize: 10, marginRight: 15, color: colors.placeholder}]}>스터디 개설</Text>
                    </View>
                    <View style={{alignItems: "center", marginRight: 20, marginLeft: 80}}>
                        <Text style = {{color: colors.text, fontSize: 15}}>현재 시각</Text>
                        <Text style = {{color: colors.text, fontSize: 20, fontStyle: "italic"}}>{time.toLocaleTimeString()}</Text>
                    </View>
                </View>

                <FlatList style={{flex: 0.6, margin: 20, padding: 20, borderWidth: 1, borderColor: colors.placeholder, borderRadius: 10}}
                    data={[{key: '8시 기상 스터디', value: "매일 아침 8시에 기상 후 사진을 찍어 올려주세요."}]}
                    renderItem={({item}) => <View>
                            <Text style={{fontSize: 25, color: colors.text}} onPress={goStudy}>{item.key}</Text>
                            <Text style={{fontSize: 15, marginBottom: 20, color: colors.text}}>{item.value}</Text>
                        </View>}
                />
        </SafeAreaView>
    )
}