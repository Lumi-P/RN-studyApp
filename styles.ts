import {StyleSheet} from "react-native";
import {Colors} from "react-native-paper";

export const styles = StyleSheet.create({
    safeArea: {flex: 1},
    text: {fontSize: 20},
    avatar: {borderWidth: 2, width: 80, height: 80, borderRadius: 40},
    button: {
        width: 300,
        height: 50,
        marginTop: 40,
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 20,
        margin: 10
    },
    smallButton: {
        margin: 20, borderRadius: 10, justifyContent: "center",
        width: 70, height: 40, borderWidth: 1
    },
    chat: {margin: 10, marginLeft: 100, padding: 10, borderWidth: 2, borderRadius: 20, width: 300}
});