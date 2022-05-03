import React, {useCallback, useRef, useMemo} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Image, Animated, TouchableOpacity, ScrollView} from 'react-native';
import type {NativeSyntheticEvent, NativeScrollEvent} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from './styles';
import {useTheme} from "react-native-paper";

const imageWidth = 240;
const imageHeight = imageWidth * 3 / 4;

const Gallery = () => {
    const theme = useTheme();
    const {colors} = theme;

    const imageList = useMemo(()=>[1,2,3,4,5,6,7,8,9,10].map((val)=>{return "https://source.unsplash.com/random/1000x1200";}),[]);
    const flatListRef = useRef<FlatList|null>(null);
    const animValue = useRef(new Animated.Value(0)).current;

    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const {contentOffset} = event.nativeEvent;
        const index = Math.round(contentOffset.x / imageWidth);
        Animated.timing(animValue, {useNativeDriver: true, toValue: index, duration: 100}).start();
    }, []);

    const selectImage = useCallback((index: number)=>{
        flatListRef.current?.scrollToIndex({index});
    },[]);

    const thumbnails = useMemo(()=>imageList.map((val, index)=>{
        return <TouchableOpacity key={index} onPress={()=>{selectImage(index);}}>
                <Image source={{uri:val}} style = {{width: imageWidth/3, height: imageHeight/3, marginTop: imageWidth/30}}/>
            </TouchableOpacity>
        }),[]);

    return (
        <SafeAreaView style={[styles.safeArea ,{alignItems: "center", flexDirection: "row", backgroundColor: colors.background}]}>
            <View style={{flexDirection: "column", height: 530, margin: 10, alignItems: "center"}}>
                <Icon name="chevron-up" size={40} style={{color: colors.text}}/>
                <ScrollView style = {{flexDirection: "column"}}>
                    {thumbnails}
                </ScrollView>
                <Icon name="chevron-down" size={40} style={{color: colors.text}}/>
            </View>
            <View style = {{width: imageWidth, height: imageHeight, margin: 30}}>
                <FlatList ref={flatListRef} data = {imageList} onScroll = {onScroll} renderItem = {({item})=>{
                    return <Image source={{uri:item}} style={{width: imageWidth, height: imageHeight}}/> 
                }}/>
            </View>
        </SafeAreaView>
    );
};

export default Gallery;