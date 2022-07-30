import React from "react";
import { View,Text } from "react-native";

export default function Homescreen ({navigation}) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
        <Text 
        onPress={() => alert('HomeScreen')}
        style={{fontSize:30,fontWeight:'bold'}} >Home Screen</Text>
        </View>
    );


}